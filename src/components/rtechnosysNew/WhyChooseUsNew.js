import React from 'react';

export default function WhyChooseUsNew() {
  return (
    <>
      {/* About Us Section */}
      <section className="w-full bg-white py-10">
        <div className="relative rounded-lg w-full h-[600px] md:h-[500px]">
          {/* Background Image */}
          <img
            src="meeting.jpg"
            alt="Team Collaboration"
            className="w-full h-full object-cover animate-fadeLeft"
          />

          {/* White Overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent"></div>

          {/* Info Overlay */}
          <div className="absolute inset-0 flex items-center md:justify-end px-4 sm:px-6 md:px-10">
            <div className="w-full md:w-[45%] bg-white/70 md:bg-transparent p-5 rounded-lg md:rounded-none">
              {/* Tag */}
              <span className="inline-block text-xs sm:text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                About Us
              </span>

              {/* Heading */}
              <h2 className="mt-4 sm:mt-6 text-2xl sm:text-[28px] md:text-[34px] font-bold leading-snug">
                Technology That Delivers{" "}
                <span className="italic font-medium">Growth, Not Just Code</span>
              </h2>

              {/* Paragraph */}
              <p className="mt-3 sm:mt-5 text-gray-600 text-sm sm:text-base leading-relaxed">
                With years of expertise in IT solutions, digital products, and cloud
                services, Rtechnosys is your trusted partner for business transformation.
              </p>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-1 gap-3 text-sm sm:text-base text-gray-700">
                <Stat text="Agile & Transparent Process – Milestone-driven sprints with clear reporting." />
                <Stat text="Flexible Engagement Models – Hourly, monthly, or project-based." />
                <Stat text="Cost-Effective Solutions – Quality without over-budgeting." />
                <Stat text="End-to-End Reliability – From idea validation to post-deployment support." />
              </div>

              {/* CTA */}
              <button className="mt-6 sm:mt-8 flex items-center gap-2 sm:gap-3 bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-blue-700 transition">
                Get Your Free Consultation
                <span className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center bg-white text-blue-600 rounded-full">
                  ➜
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full bg-[#f5f7fb] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 md:px-12 gap-10">
          {/* Left Content */}
          <div className="flex-1 text-left">
            <span className="inline-block text-xs sm:text-sm font-semibold text-blue-700 bg-blue-100 px-3 sm:px-4 py-1 rounded-full">
              Why Choose Us
            </span>

            <h2 className="mt-4 sm:mt-6 text-2xl sm:text-[32px] md:text-[42px] font-bold leading-snug text-gray-900">
              Your Vision, Our Expertise—
              <br className="hidden sm:block" />
              <span className="font-normal italic text-gray-800">
                Together We Create Impactful Digital Solutions.
              </span>
            </h2>

            {/* Bullet Points */}
            <ul className="mt-5 sm:mt-6 space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
              {[
                "We bring 10+ years of IT expertise across industries and technologies.",
                "Our agile, transparent process ensures faster delivery and zero surprises.",
                "Flexible hiring models fit startups, SMEs, and enterprises alike.",
                "From idea validation to 24/7 support—we stay with you at every step.",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-600 text-white text-xs sm:text-sm">
                    ✓
                  </span>
                  <p>{point}</p>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button className="mt-6 sm:mt-8 flex items-center gap-2 sm:gap-3 bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-blue-700 transition">
              Work with us
              <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-white text-blue-600 rounded-full">
                ➜
              </span>
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center relative">
            {/* Curve (hidden on small screens) */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 z-0 hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 300"
                className="w-28 sm:w-36 md:w-40 h-48 sm:h-60 md:h-64 text-blue-200"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              >
                <path d="M100 0 C180 100, 180 200, 100 300" />
                <path d="M60 0 C140 100, 140 200, 60 300" />
              </svg>
            </div>

            <img
              src="happily_doing.png"
              alt="Working professional"
              className="relative z-10 max-w-[200px] sm:max-w-xs md:max-w-sm"
            />
          </div>
        </div>
      </section>
    </>
  );
}

/* Small helper */
function Stat({ text }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-600"></span>
      <span>{text}</span>
    </div>
  );
}