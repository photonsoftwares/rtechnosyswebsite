import { useState } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  { title: "Web Development", active: true },
  { title: "SEO Optimization" },
  { title: "E-commerce Solutions" },
  { title: "Responsive Design" },
  { title: "UX/UI Design" },

];

export default function OurServicesNew() {
  const [activeService, setActiveService] = useState("Web Development");

  return (
    <section className="bg-[#0a58f5] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-block bg-white/20 text-white text-sm px-4 py-1 rounded-full font-semibold">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            Unleash The Full Potential Of Your <br />
            <span className="italic font-medium">Business With Rtechnosys</span>
          </h2>
        </div>

        {/* Content */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Services List */}
          <div className="flex flex-col gap-4">
            {services.map((service, i) => (
              <button
                key={i}
                onClick={() => setActiveService(service.title)}
                className={`flex items-center justify-between rounded-full px-6 py-4 text-left text-sm font-semibold transition
                  ${
                    activeService === service.title
                      ? "bg-yellow-400 text-black"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {service.title}
                <span
                  className={`ml-3 flex h-8 w-8 items-center justify-center rounded-full
                    ${
                      activeService === service.title
                        ? "bg-black text-white"
                        : "bg-blue-100 text-blue-600"
                    }`}
                >
                  <ArrowRight size={16} />
                </span>
              </button>
            ))}
          </div>

          {/* Right Side - Card */}
          <div className="relative w-full max-w-xl mx-auto">
  {/* Background stacked layers */}
 <div className="absolute top-6 left-6 w-[95%] h-[105%] rounded-2xl bg-blue-400 -z-10"></div>
  <div className="absolute top-12 left-12 w-[90%] h-[105%] rounded-2xl bg-blue-300 -z-20"></div>

  {/* Main Card */}
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden relative z-20">
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* Image */}
      <div className="relative">
        <img
          src="laptop.jpg"
          alt="Web Development"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
          Web Development
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-center">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 7h18M3 12h18M3 17h18"
            />
          </svg>
        </div>

        <h3 className="text-lg font-semibold">
          Innovative Expert in Web Development Services
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          Our orthopedic specialists are to helping you move freely an without
          pain.
        </p>

        <button className="mt-6 flex items-center gap-2 bg-yellow-400 px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 transition">
          View Details
          <span className="flex items-center justify-center bg-white rounded-full w-6 h-6 text-yellow-500">
            →
          </span>
        </button>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
