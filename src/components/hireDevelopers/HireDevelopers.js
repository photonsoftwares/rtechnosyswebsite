import React from 'react'
import { Clock, Eye, MessageSquare, Handshake } from "lucide-react";
import Footer2 from '../Footer2';

const HireDevelopers = () => {
  return (
    <>
    <section className="bg-[#f6f4e5] font-serif py-16 px-6">
      {/* Title + Subtitle */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Hire skilled developers for your next project
        </h2>
        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
          Whether you’re building from scratch or scaling an existing product,
          our dedicated developers integrate seamlessly into your team to
          deliver high-quality, timely solutions. With expertise across web,
          mobile, AI, and cloud technologies, we offer flexible hiring models
          tailored to your project’s needs.
        </p>
      </div>

      {/* Developer Categories */}
      <div className="bg-[#143c7d] text-white rounded-2xl p-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Front-End */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Front-End</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Hire AngularJS Developers</li>
            <li>Hire ReactJS Developers</li>
            <li>Hire Vue.js Developers</li>
          </ul>
        </div>

        {/* Back-End */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Back-End</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Hire Python Developers</li>
            <li>Hire Node.js Developers</li>
            <li>Hire Ruby on Rails Developers</li>
            <li>Hire Laravel Developers</li>
            <li>Hire Java Developers</li>
          </ul>
        </div>

        {/* Mobile */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Mobile</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Hire React Native Developers</li>
            <li>Hire Flutter Developers</li>
            <li>Hire iOS Developers</li>
            <li>Hire Android Developers</li>
          </ul>
        </div>

        {/* AI & ML */}
        <div>
          <h3 className="text-xl font-semibold mb-4">AI & ML</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Hire ChatGPT Developers</li>
            <li>Hire AI Developers</li>
            <li>Hire LLM Developers</li>
            <li>Hire AI Agent Developers</li>
            <li>Hire Langflow Developers</li>
          </ul>
        </div>

        {/* Other */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Other</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Hire Full Stack Developers</li>
            <li>Hire DevOps Developers</li>
            <li>Hire Software Developers</li>
            <li>Hire .Net Developers</li>
            <li>Hire Workflow Developers</li>
          </ul>
        </div>
      </div>
       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16 mb-10">
        
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <div className="bg-white w-40 h-40 flex items-center justify-center rounded-full shadow-md">
            <Clock className="w-12 h-12 text-[#0d3b7e]" />
          </div>
          <p className="mt-4 text-lg text-center font-serif">On Time <br /> Delivery</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <div className="bg-white w-40 h-40 flex items-center justify-center rounded-full shadow-md">
            <Eye className="w-12 h-12 text-[#0d3b7e]" />
          </div>
          <p className="mt-4 text-lg text-center font-serif">100% <br /> Transparency</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <div className="bg-white w-40 h-40 flex items-center justify-center rounded-full shadow-md">
           <img src="message.png" alt="" className='w-12h h-12' />
          </div>
          <p className="mt-4 text-lg text-center font-serif">One-to-one <br /> Communication</p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center">
          <div className="bg-white w-40 h-40 flex items-center justify-center rounded-full shadow-md">
            <Handshake className="w-12 h-12 text-[#0d3b7e]" />
          </div>
          <p className="mt-4 text-lg text-center font-serif">Engagement <br /> Models</p>
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-2xl text-center font-bold font-serif mb-6">
        Empower your business with our devoted developers
      </h2>

      {/* Button */}
      <div className="flex justify-center">
        <button className="bg-[#6a95c9] text-white px-6 py-2 rounded-md hover:bg-[#5a83b6] transition">
          Hire Us
        </button>
      </div>
    </section>
<Footer2/>

    </>
  );
  
}

export default HireDevelopers