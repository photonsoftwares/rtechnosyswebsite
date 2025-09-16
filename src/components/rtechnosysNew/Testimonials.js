import React from "react";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Rtechnosys transformed our business idea into a fully functional app within weeks. The team was professional, transparent, and always available when we needed support.",
      name: "Ariana Collins",
      role: "Small Business Owner",
      image:
        "ariana.png", // Replace with actual image
      rating: 5,
    },
    {
      text: "Rtechnosys transformed our business idea into a fully functional app within weeks. The team was professional, transparent, and always available when we needed support.",
      name: "Ariana Collins",
      role: "Small Business Owner",
      image:
        "ariana.png", // Replace with actual image
      rating: 5,
    },
  ];

  return (
    <section className="w-full bg-[#f9fbff] py-16 relative">
      {/* Top Section */}
      <div className="text-center mb-12">
        <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
          Our Testimonials
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Why Our <span className="italic text-gray-800">Client Say!</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Trusted by startups, SMEs, and enterprises worldwide.
        </p>
      </div>

      {/* Testimonials Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-md relative"
          >
            {/* Quote Icon */}
            <FaQuoteLeft className="text-blue-600 text-3xl mb-4" />

            {/* Testimonial Text */}
            <p className="text-gray-700 leading-relaxed mb-6">{t.text}</p>

            {/* User Info */}
            <div className="flex items-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="absolute bottom-6 right-8 text-gray-600 flex items-center gap-1">
              <img
                src="google.png"
                alt="Google"
                className="w-5 h-5"
              />
              <span className="text-sm font-medium">Google</span>
              <span className="ml-2 text-yellow-500">★★★★★</span>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 shadow bg-white hover:bg-blue-600 hover:text-white transition">
          <FaArrowLeft />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 shadow bg-white hover:bg-blue-600 hover:text-white transition">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
