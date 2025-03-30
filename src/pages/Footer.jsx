import React from 'react';
import assets from '../assets/assets';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="border-t-2 border-primary-g bg-primary-g/80 min-h-48 text-center text-white flex flex-col items-center justify-between py-4">
      {/* Logo */}
      <Link to='/' onClick={() => window.scrollTo(0, 0)}><img src={assets.logo} alt="logo" className='w-[8rem]' /></Link>

      {/* Navigation Links */}
      <nav className="flex space-x-4 mt-3">
        <Link to="/" className="hover:font-medium" onClick={() => window.scrollTo(0, 0)}>HOME</Link>
        <Link to="/about" className="hover:font-medium" onClick={() => window.scrollTo(0, 0)}>ABOUT</Link>
        <Link to="/products" className="hover:font-medium" onClick={() => window.scrollTo(0, 0)}>PRODUCTS</Link>
      </nav>

      {/* Social Media Icons */}
      <div className="flex space-x-4 text-xl mt-3">
        <a href={`https://api.whatsapp.com/send?phone=+919826031934&text=Hello, more information!`}
          target="_blank" rel="noopener noreferrer"
          className="hover:text-primary-g/80 hover:bg-gray-100 px-3 py-2 bg-white text-primary-g rounded-xl no-underline">
          <i class="ri-whatsapp-line"></i>
        </a>
        <a href="https://www.instagram.com/aziziya_developers/"
          target="_blank" rel="noopener noreferrer"
          className="hover:text-primary-g/80 hover:bg-gray-100 px-3 py-2 bg-white text-primary-g rounded-xl no-underline">
          <i className="ri-instagram-line"></i>
        </a>
        <a href="https://facebook.com"
          target="_blank" rel="noopener noreferrer"
          className="hover:text-primary-g/80 hover:bg-gray-100 px-3 py-2 bg-white text-primary-g rounded-xl no-underline">
          <i className="ri-facebook-circle-line"></i>
        </a>
        <a href="https://www.youtube.com/@aziziyadevelopers"
          target="_blank" rel="noopener noreferrer"
          className="hover:text-primary-g/80 hover:bg-gray-100 px-3 py-2 bg-white text-primary-g rounded-xl no-underline">
          <i className="ri-youtube-line"></i>
        </a>
      </div>

      {/* Copyright Text */}
      <div className="text-sm mt-8">© AquaQuill. All rights reserved</div>
    </footer>
  );
};

export default Footer;