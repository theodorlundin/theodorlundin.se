import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
  useLocation,
  Outlet
} from 'react-router-dom'
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

function RootLayout() {
  return (
    <>
      <ScrollRestoration />
      <AnalyticsHandler />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/om-mig',
        element: <About />
      },
      {
        path: '/hemsidor',
        element: <Websites />
      },
      {
        path: '/kontakt',
        element: <Contact />
      },
      {
        path: '/hemsida/:page',
        element: <BuyWebsite />
      },
      {
        path: '/typografi',
        element: <Typografi />
      },
      {
        path: '/integritet',
        element: <Integrity />
      }
    ]
  }
])

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
