import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavbarContact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="relative w-full h-[350px] md:h-[400px] bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: "url('/navback.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Navbar */}
      <div className="relative z-20 flex justify-between items-center px-4 sm:px-6 md:px-10 py-4 md:py-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to={"/"}>
            <img src="Rtechnosys_logo1.png" alt="Rtechnosys Logo" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32" />
          </Link>
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="md:hidden flex items-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-full flex items-center">
            Get Started <span className="ml-2">➜</span>
          </button>
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-8 text-white font-medium">
          <Link to="/products">Products</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/case-studies">Case Studies</Link>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full flex items-center">
            Get Started <span className="ml-2">➜</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-10 bg-black bg-opacity-90 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-white text-xl">
          <Link to="/products" onClick={toggleMenu}>Products</Link>
          <Link to="/services" onClick={toggleMenu}>Services</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
          <Link to="/case-studies" onClick={toggleMenu}>Case Studies</Link>
        </div>
      </div>

      {/* Centered Text */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center px-4">
        <span className="px-4 py-1 sm:px-6 sm:py-2 bg-gray-700 bg-opacity-80 text-white rounded-full text-xs sm:text-sm">
          Our Contact
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
          Our Contact
        </h1>
      </div>
    </div>
  );
};

export default NavbarContact;