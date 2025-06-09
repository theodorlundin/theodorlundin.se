import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Websites from './pages/Websites'
import Contact from './pages/Contact'
import Typografi from './pages/Typografi'
import Integrity from './pages/Integrity'
import BuyWebsite from './pages/BuyWebsite'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
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
