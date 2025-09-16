import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FooterNew() {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-[#2c2442] text-white px-8 md:px-16 py-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-8 border-b border-gray-700 pb-10">
          {/* Left: Logo + Tagline (30%) */}
          <div className="md:col-span-3 md:pr-8 md:border-r md:border-gray-700">
            <img src="Rtechnosys_logo1.png" alt="" className="w-34 h-32" />
           
            <p className="text-gray-300 mt-4 max-w-sm">
              Innovating Digital Solutions For Your Business Growth
            </p>
          </div>

          {/* Right: Newsletter + Links + Contact Info (70%) */}
          <div className="md:col-span-7 md:pl-8 flex flex-col space-y-8">
            {/* Newsletter */}
            <div className="flex items-center w-full">
    <input
      type="email"
      placeholder="Enter Your E-Mail"
      className="flex-grow h-12 px-4 rounded-full text-black outline-none"
    />
    <button className="ml-3 h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center">
      Get Started <span className="ml-2">➜</span>
    </button>
  </div>

            {/* Links */}
            <div className="flex justify-around">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-20 text-gray-300">
             <Link to={'/products'}> <p className="font-semibold">Products</p></Link>
             <Link to={'/services'}><p className="font-semibold">Services</p></Link> 
             
              <Link to={'/contact'}><p className="font-semibold">Contact Us</p> </Link>
              <Link to={'/case-studies'}><p className="font-semibold">Case Studies</p> </Link>
            </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
              <div>
                <p className="font-semibold">Call Us</p>
                <p className="mt-2">+91 84000 63557</p>
              </div>
              <div>
                <p className="font-semibold">Send Email</p>
                <p className="mt-2">Rtechnosyslab@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="mt-2">
                  Rtechnosys Lab LLP - The Hub IT Park, Rajnagar EXTN Ghaziabad
                  NCR Delhi India, Uttar Pradesh, 201001
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 mt-6">
          <p className="text-gray-400 text-sm text-center md:text-left">
            Copyright © SEOT 2025 . All Rights Reserved, Rtechnosys
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
