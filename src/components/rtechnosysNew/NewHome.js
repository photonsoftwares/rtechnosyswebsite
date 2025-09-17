import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// Custom hook to detect screen size
const useDesktopMediaQuery = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const mediaQuery = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    setIsDesktop(mediaQuery);
  }, [mediaQuery]);

  return isDesktop;
};

export default function NewHome() {
  const isDesktop = useDesktopMediaQuery();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (isDesktop) {
    // Desktop Layout (your original code)
    return (
      <section className="relative w-full h-[813px] bg-gradient-to-br from-black via-black to-violet-500 overflow-hidden">
        {/* Background */}
        <img
          src="upscale_image.png"
          alt="Hero Illustration"
          className="absolute right-0 top-20 w-[850px] h-[680px] object-contain"
        />

        {/* Logo absolute to background */}
        <div className="absolute top-2 left-40 flex items-center gap-2 z-20">
          <Link to={"/"}>
            <img
              src="Rtechnosys_logo1.png"
              alt="Rtechnosys Logo"
              className="w-40 h-40 object-contain"
            />
          </Link>
        </div>

        {/* Navbar */}
        <nav className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center gap-16 text-white font-semibold text-sm z-20">
          <Link to="/products">Products</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/case-studies">Case Studies</Link>
        </nav>

        {/* CTA top right */}
        <button className="absolute right-24 top-10 flex items-center gap-3 bg-blue-600 text-white rounded-full px-6 py-2 text-sm font-medium z-20">
          Get Started
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
            <ArrowUpRight className="text-blue-600 w-4 h-4" />
          </span>
        </button>

        {/* Content */}
        <div className="absolute left-20 top-56 text-white max-w-xl">
          <h1 className="text-6xl font-poppins font-medium leading-[1.6] capitalize">
            Innovating <br /> Digital Solutions <br /> For Your{" "}
            <span className="italic font-normal">Business</span> <br />
            <span className="italic font-normal">Growth</span>
          </h1>

          {/* Profile avatars + text */}
          <div className="flex items-center gap-3 mt-10">
            <div className="flex -space-x-3">
              <img
                src="happy-mature-male-business-leader.png"
                alt="profile1"
                className="w-14 h-14 rounded-full border-2 border-white"
              />
              <img
                src="head-shot-portrait-close-smiling.png"
                alt="profile2"
                className="w-14 h-14 rounded-full border-2 border-white"
              />
              <img
                src="close-head-shot-portrait-preppy.png"
                alt="profile3"
                className="w-14 h-14 rounded-full border-2 border-white"
              />
              <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-white bg-yellow-400 text-black font-bold">
                4k+
              </div>
            </div>
            <p className="text-sm font-semibold">
              We have 40k+ customers world-wide
            </p>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="absolute bottom-0 left-[600px] flex gap-10">
          {/* Explore More */}
          <div className="bg-white rounded-t-xl p-6 w-[385px]">
            <h3 className="text-blue-600 text-lg font-semibold flex items-center gap-2">
              Explore More <ArrowUpRight className="w-5 h-5 text-blue-600" />
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              From vision to reality—explore now.
            </p>
          </div>

          {/* Get Started */}
          <div className="bg-white rounded-t-xl p-6 w-[385px] flex justify-between items-center">
            <p className="text-black font-semibold">
              Begin your journey with us today.
            </p>
            <button className="flex items-center gap-3 bg-blue-600 text-white rounded-full px-4 py-2 text-sm">
              Get Started
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
                <ArrowUpRight className="text-blue-600 w-4 h-4" />
              </span>
            </button>
          </div>
        </div>

        {/* Extra floating image (rectangle 55) */}
        <img
          src="cover-timesheet-adoption.jpg"
          alt="Floating"
          className="absolute top-60 left-[430px] w-40 h-20 object-cover rou border-2 rounded-full border-white "
        />
      </section>
    );
  } else {
    // Mobile Layout (your new code)
    return (
      <section className="relative w-full min-h-screen bg-gradient-to-br from-black via-black to-violet-500 overflow-hidden text-white">
        {/* Background */}
        <img
          src="upscale_image.png"
          alt="Hero Illustration"
          className="absolute right-0 top-20 w-full object-contain opacity-40"
        />

        {/* Header with hamburger menu */}
        <header className="relative z-30 flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Link to={"/"}>
              <img
                src="Rtechnosys_logo1.png"
                alt="Rtechnosys Logo"
                className="w-28 h-28 object-contain"
              />
            </Link>
          </div>
          <button className="text-white z-50" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </header>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-90 z-40 transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            <Link to="/products" className="text-2xl font-semibold" onClick={toggleMenu}>
              Products
            </Link>
            <Link to="/services" className="text-2xl font-semibold" onClick={toggleMenu}>
              Services
            </Link>
            <Link to="/contact" className="text-2xl font-semibold" onClick={toggleMenu}>
              Contact Us
            </Link>
            <Link to="/case-studies" className="text-2xl font-semibold" onClick={toggleMenu}>
              Case Studies
            </Link>
            <Link to="/get-started" className="flex items-center gap-3 bg-blue-600 text-white rounded-full px-6 py-3 text-lg font-medium mt-8" onClick={toggleMenu}>
              Get Started
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
                <ArrowUpRight className="text-blue-600 w-4 h-4" />
              </span>
            </Link>
          </nav>
        </div>

        {/* Content */}
        <div className="relative z-10 p-4 mt-8">
          <h1 className="text-4xl font-poppins font-medium leading-tight">
            Innovating <br /> Digital Solutions <br /> For Your{" "}
            <span className="italic font-normal">Business</span> <br />
            <span className="italic font-normal">Growth</span>
          </h1>

          {/* Profile avatars + text */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <div className="flex -space-x-3">
              <img
                src="happy-mature-male-business-leader.png"
                alt="profile1"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <img
                src="head-shot-portrait-close-smiling.png"
                alt="profile2"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <img
                src="close-head-shot-portrait-preppy.png"
                alt="profile3"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white bg-yellow-400 text-black font-bold">
                4k+
              </div>
            </div>
            <p className="text-sm font-semibold mt-2">
              We have 40k+ customers world-wide
            </p>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="relative z-10 p-4 flex flex-col gap-6 mt-16">
          {/* Explore More */}
          <div className="bg-white rounded-t-xl p-6 w-full">
            <h3 className="text-blue-600 text-lg font-semibold flex items-center gap-2">
              Explore More <ArrowUpRight className="w-5 h-5 text-blue-600" />
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              From vision to reality—explore now.
            </p>
          </div>

          {/* Get Started */}
          <div className="bg-white rounded-t-xl p-6 w-full flex justify-between items-center">
            <p className="text-black font-semibold">
              Begin your journey with us today.
            </p>
            <Link to="/get-started" className="flex items-center gap-3 bg-blue-600 text-white rounded-full px-4 py-2 text-sm">
              Get Started
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
                <ArrowUpRight className="text-blue-600 w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}