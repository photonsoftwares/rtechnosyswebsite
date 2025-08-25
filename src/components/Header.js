import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
   const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <header className="bg-[#f6f4e5] ">
     <div className="w-full flex items-center justify-between px-2 py-5">

        
        {/* Logo */}
        <div className="flex items-start gap-2">
          <Link to="/">
            <img
              src="/Rtechnosys_logo1.png"
              alt="Rtechnosys"
              className="w-20 invert sepia saturate-200 -hue-rotate-180 block"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-20 text-gray-700 font-serif text-sm">
         <Link
        to="/"
        className={`hover:text-[#0d3b7e] ${activeLink === '/' ? 'font-semibold' : ''}`}
        onClick={() => handleLinkClick('/')}
      >
        Home
      </Link>
      <Link
        to="/services"
        className={`hover:text-[#0d3b7e] ${activeLink === '/services' ? 'font-semibold' : ''}`}
        onClick={() => handleLinkClick('/services')}
      >
        Services
      </Link>
      <Link
        to="/hiredevelopers"
        className={`hover:text-[#0d3b7e] ${activeLink === '/hiredevelopers' ? 'font-semibold' : ''}`}
        onClick={() => handleLinkClick('/hiredevelopers')}
      >
        Hire Developers
      </Link>
      <Link
        to="/technologies"
        className={`hover:text-[#0d3b7e] ${activeLink === '/technologies' ? 'font-semibold' : ''}`}
        onClick={() => handleLinkClick('/technologies')}
      >
        Technologies
      </Link>
      <Link
        to="/blogs"
        className={`hover:text-[#0d3b7e] ${activeLink === '/blogs' ? 'font-semibold' : ''}`}
        onClick={() => handleLinkClick('/blogs')}
      >
        Blogs
      </Link>
          <Link to="/contact">
            <button className="bg-[#6a95c9] text-white text-sm px-4 py-2 rounded-md hover:bg-[#5a83b6]">
              Contact us
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
