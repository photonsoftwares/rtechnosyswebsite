import React from "react";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaCode } from "react-icons/fa";
import WhyChooseSection from "./WhyChoose";
import WhatWeOffer from "./WhatWeOffer";
import TechnologiesSection from "./TechnologiesSection";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
    <section className="bg-[#143c7d] text-white py-12 px-4">
      <div className="max-w-full mx-5 my-5 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-3xl text-center font-serif font-bold leading-snug">
            Reliable Software Solutions for <br /> Real-World Results
          </h2>
          <p className="mt-4 text-lg font-serif  text-center text-gray-200">
            With years of experience and a passion for innovation,<br /> we craft
            scalable software that drives business success.
          </p>
          <div className="text-center">
            <Link to={"/services"} >
          <button className="mt-6 bg-[#5a86c5]  hover:bg-[#4871a8] transition px-6 py-2 rounded text-white font-medium">
            Explore Services
          </button>
          </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="grid mx-4 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white relative text-black rounded-lg shadow-md p-6 flex flex-col items-center hover:scale-110">
            <div className="absolute top-2 left-4 rounded-2xl flex justify-center items-center p-2 bg-blue-900"> <FaLaptopCode className="text-white text-2xl " /></div>
           <div className="mt-6">
            <h3 className="text-lg font-semibold text-center my-3">Web Development</h3>
            <p className="text-gray-600 text-sm mt-2">
              Custom websites and web applications built with modern technologies
            </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white relative text-black rounded-lg shadow-md p-6 flex flex-col items-center hover:scale-110">
            <div className="absolute top-2 left-4 rounded-2xl flex justify-center items-center p-2 bg-blue-900">
            <FaMobileAlt className="text-white text-2xl " />
            </div>
            <div className="mt-6">
            <h3 className="text-lg font-semibold text-center my-3">Mobile Apps</h3>
            <p className="text-gray-600 text-sm mt-2">
              Native and cross-platform mobile applications for iOS and Android
            </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white relative text-black rounded-lg shadow-md p-6 flex flex-col items-center hover:scale-110">
            <div className="absolute top-2 left-4 rounded-2xl flex justify-center items-center p-2 bg-blue-900"><FaPaintBrush className="text-white text-2xl " /></div>
            <div className="mt-6">
            <h3 className="text-lg font-semibold text-center my-3">UI/UX Design</h3>
            <p className="text-gray-600 text-sm mt-2">
              User-centered design solutions that enhance user experience
            </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white relative text-black rounded-lg shadow-md p-6 flex flex-col items-center hover:scale-110">
            <div className="absolute top-2 left-4 rounded-2xl flex justify-center items-center p-2 bg-blue-900">
            <FaCode className="text-white text-2xl " />
            </div>
            <div className="mt-6">
            <h3 className="text-lg font-semibold text-center my-3">Devoted Developers</h3>
            <p className="text-gray-600 text-sm mt-2">
              Skilled developers ready to join your team and accelerate your growth
            </p>
            </div>
          </div>
        </div>
      </div>
     
    </section>
     <WhyChooseSection/>
      <WhatWeOffer/>
      <TechnologiesSection/>
      <Footer/>
    </>
  );
};

export default HeroSection;
