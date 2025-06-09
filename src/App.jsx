import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Websites from './pages/Websites'
import Contact from './pages/Contact'
import Typografi from './pages/Typografi'
import Integrity from './pages/Integrity'
import BuyWebsite from './pages/BuyWebsite'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactGA from 'react-ga4'
import { useEffect } from 'react'

const queryClient = new QueryClient()

ReactGA.initialize('G-M9J6379SMQ')

function AnalyticsHandler() {
  const location = useLocation()
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname })
  }, [location])
  return null
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AnalyticsHandler />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/om-mig" element={<About />} />
          <Route path="/hemsidor" element={<Websites />} />
          <Route path="/kontakt" element={<Contact />} />

          <Route path="/hemsida/:page" element={<BuyWebsite />} />

          <Route path="/typografi" element={<Typografi />} />
          <Route path="/integritet" element={<Integrity />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
