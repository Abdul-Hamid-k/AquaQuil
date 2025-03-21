import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { headerArc, logo } from '../assets/assets'

const Header = () => {

  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false)

  return (
    <header className="backdrop-blur-2x z-50 max-w-[75rem] mx-auto px-5 sm:px-[3%]">

      {/* <div className="absolute flex w-full left-0 top-0 h-[8rem] sm:h-[10rem] justify-center">
        <img src={headerArc} className='w-[60%] -z-10' />
      </div> */}

      {/* desktop view */}
      <nav className="grid grid-cols-3 items-center justify-items-center ">
        <i class="sm:hidden text-2xl ri-menu-4-line justify-self-start cursor-pointer" onClick={() => { setIsNavMenuOpen(true) }}></i>
        {/* Left Navigation Items */}
        <ul className="hidden justify-self-start sm:flex gap-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-primary-g font-medium'
                  : 'text-gray-700 hover:text-gray-900 font-medium'
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? 'text-primary-g font-medium'
                  : 'text-gray-700 hover:text-gray-900 font-medium'
              }
            >
              Products
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-primary-g font-medium'
                  : 'text-gray-700 hover:text-gray-900 font-medium'
              }
            >
              About
            </NavLink>
          </li>

        </ul>

        {/* Logo at the Center */}
        <div className="flex-shrink-0">
          <NavLink to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-18 w-auto"
            />
          </NavLink>
        </div>

      </nav>

      {/* mobile view */}
      <nav className={`${isNavMenuOpen ? 'translate-x-0' : '-translate-x-full'} sm:-translate-full transition-all duration-300 absolute w-[80%] bg-white/90 backdrop-blur top-0 h-screen pt-16`}>

        <i class="ri-close-fill text-2xl absolute top-8 right-8 text-red-500 cursor-pointer font-medium" onClick={() => { setIsNavMenuOpen(false) }}></i>

        {/* Left Navigation Items */}
        <ul className="flex flex-col sm:hidden items-center gap-5">
          <li onClick={() => { setIsNavMenuOpen(false) }}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-primary-g font-medium'
                  : 'text-gray-700 hover:text-gray-900 font-medium'
              }
            >
              Home
            </NavLink>
          </li>

          <li onClick={() => { setIsNavMenuOpen(false) }}>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? 'text-primary-g font-medium'
                  : 'text-gray-700 hover:text-gray-900 font-medium'
              }
            >
              Products
            </NavLink>
          </li>

          <li onClick={() => { setIsNavMenuOpen(false) }}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-primary-g font-medium'
                  : 'text-gray-700 hover:text-gray-900 font-medium'
              }
            >
              About
            </NavLink>
          </li>

        </ul>
      </nav>

    </header>
  )
}

export default Header