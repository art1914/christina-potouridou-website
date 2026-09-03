import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Services from './pages/Services'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'sxetika-me-mena', element: <About /> },
      { path: 'ypiresies', element: <Services /> },
      { path: 'epikoinonia', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
