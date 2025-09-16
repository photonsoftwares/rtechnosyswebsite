import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      className="relative w-full h-[400px] bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: "url('/navback.jpg')",
      }}
    >
      {/* Overlay (for dark effect on image) */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Navbar */}
      <div className="relative z-10 flex justify-between items-center px-10 py-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to={"/"} >
          <img src="Rtechnosys_logo1.png" alt="" className="w-34 h-32" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          <Link to="/products">Products</Link>
  <Link to="/services">Services</Link>
  <Link to="/contact">Contact Us</Link>
  <Link to="/case-studies">Case Studies</Link>
        </div>

        {/* Get Started Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full flex items-center">
          Get Started <span className="ml-2">➜</span>
        </button>
      </div>

      {/* Centered Text */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow">
        <span className="px-6 py-2 bg-gray-700 bg-opacity-80 text-white rounded-full text-sm">
          Our Services
        </span>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white">
          Our Services
        </h1>
      </div>
    </div>
  );
}
