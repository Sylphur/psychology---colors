import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ColorsPage from './pages/colors/colors.tsx'
import ColorRed from './pages/red/red.tsx'
import ColorYellow from './pages/yellow/yellow.tsx'
import ColorOrange from './pages/orange/orange.tsx'
import ColorGreen from './pages/green/green.tsx'
import ColorCyan from './pages/cyan/cyan.tsx'
import ColorBlue from './pages/blue/blue.tsx'
import ColorViolet from './pages/violet/violet.tsx'
import ColorBlack from './pages/black/black.tsx'
import ColorWhite from './pages/white/white.tsx'
import ColorBrown from './pages/brown/brown.tsx'
import ColorGray from './pages/gray/gray.tsx'
import ColorPink from './pages/pink/pink.tsx'

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
  },
  {
    path: 'yellow',
    element: <ColorYellow />
  },
  {
    path: 'orange',
    element: <ColorOrange />
  },
  {
    path: 'green',
    element: <ColorGreen />
  },
  {
    path: 'cyan',
    element: <ColorCyan />
  },
  {
    path: 'blue',
    element: <ColorBlue/>
  },
  {
    path: 'velvet',
    element: <ColorViolet />
  },
  {
    path: 'black',
    element: <ColorBlack />
  },
  {
    path: 'white',
    element: <ColorWhite/>
  },
  {
    path: 'brown',
    element: <ColorBrown />
  },
  {
    path: 'gray',
    element: <ColorGray />
  },
  {
    path: 'pink',
    element: <ColorPink />
  },
  
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
