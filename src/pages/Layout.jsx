import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
      <Header />
      <div className="max-w-[75rem] mx-auto px-5 sm:px-[3%]">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Layout