import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'

import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import SplashScreen from './pages/SplashScreen'

const router = createBrowserRouter([{
  path: '/',
  element: <Home />
}, {
  path: '/about',
  element: <About />
}, {
  path: '/products',
  element: <Products />
}
])


const App = () => {
  return (
    <>
      <SplashScreen />
      <RouterProvider router={router} />
    </>
  )
}



export default App