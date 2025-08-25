import React from 'react'

const Footer2 = () => {
  return (
   <footer className="bg-blue-950 text-white max-w-screen py-12 px-4">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Company</h3>
            <a href="#" className="text-sm text-gray-300 hover:text-white">About us</a>
            <a href="#" className="text-sm text-gray-300 hover:text-white">Careers</a>
            <a href="#" className="text-sm text-gray-300 hover:text-white">Contact</a>
          </div>

          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Resources</h3>
            <a href="#" className="text-sm text-gray-300 hover:text-white">Blog</a>
            <a href="#" className="text-sm text-gray-300 hover:text-white">Support</a>
          </div>

          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Legal</h3>
            <a href="#" className="text-sm text-gray-300 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-300 hover:text-white">Terms of Services</a>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-2">Connect</h3>
            <div className="flex space-x-4 text-2xl">
              <a href="#" className="text-gray-300 hover:text-white">
                 <img src="instagram.png" alt="" className="w-6 h-7" /> {/* Placeholder for icon */}
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
               <img src="twitter.png" alt="" className="w-6 h-5" /> {/* Placeholder for icon */}
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <img src="linkedin.png" alt="" className="w-6 h-7" />{/* Placeholder for icon */}
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer2