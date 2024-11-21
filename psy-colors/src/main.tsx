import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ColorsPage from './pages/colors/colors.tsx'
import ColorRed from './pages/red/red.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: []
  },
  {
    path: 'colors',
    element: <ColorsPage />,
    children: [
    ]
  },
  {
    path: 'red',
    element: <ColorRed />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
