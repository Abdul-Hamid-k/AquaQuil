import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import 'remixicon/fonts/remixicon.css'

import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import SplashScreen from './pages/SplashScreen'
import Layout from './pages/Layout'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(MotionPathPlugin)

const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/products', element: <Products /> },
  ]
}])


const App = () => {
  return (
    <>
      <SplashScreen />
      <RouterProvider router={router} />
    </>
  )
}



export default App