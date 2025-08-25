import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";


const Footer = () => {
  return (
    <footer className="bg-[#15478C] text-white max-w-screen mx-auto ">
    
      <div className="max-w-screen-xl mx-auto px-2 py-3 grid grid-cols-3 gap-8">
        
       
        <div className="py-7 font-serif">
          <h3 className="text-xl font-semibold mb-4">Contact us</h3>
          <div className="flex items-center gap-1"><FaMapMarkerAlt className="h-10" />
          <p className="text-xs leading-relaxed">
            RTechnosys Lab LLP - The Hub IT park, Rajnagar EXTN<br />
            Ghaziabad NCR Delhi India, Uttar Pradesh, 201001
          </p>
          </div>
          <div className="flex items-center gap-1">
            <IoCallOutline className="h-10" />
          <p className="mt-2 text-xs">
            +91 84000 63557, +91 98261 70926
          </p>
          </div>
          <div className="flex items-center gap-1">
            <IoMdMail  className=""/>
          <p className="mt-1 text-xs">rtechnosyslab@gmail.com</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col font-serif items-center justify-center space-y-2">
          <p className="text-base cursor-pointer hover:underline">FAQ</p>
          <p className="text-base cursor-pointer hover:underline">Support</p>
          <p className="text-base cursor-pointer hover:underline">About us</p>
        </div>

        {/* Logo + Description */}
        <div className="text-right">
          <img src="/Rtechnosys_logo1.png" alt="Rtechnosys" className="h-28 ml-44" />
          <p className="text-xs mt-0 font-serif ">
            A forward-thinking software development company delivering
            cutting-edge web, mobile, and custom solutions. We blend innovation,
            performance, and design to build scalable products for startups and
            enterprises. From concept to code, we help businesses transform
            digitally, accelerate growth, and stay ahead in a fast-evolving tech
            landscape.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pb-3">
        <div className="max-w-screen-xl mx-auto font-serif flex justify-center space-x-8 py-3 text-xs">
          <span>Copyright @ Rtechnosys</span>
          <span>Privacy Policy</span>
          <span>TOS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
