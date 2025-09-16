export default function WhyChooseUsNew() {
  return (
    <>
    <section className="w-full bg-white py-10">
      {/* Top Info Cards */}
    

      {/* About Us Section */}
    <div className="relative rounded-lg p-2 w-full h-[600px]">
  {/* Background Image */}
  <img
    src="meeting.jpg"
    alt="Team Collaboration"
    className="w-full h-full object-fill animate-fadeLeft"
  />

  {/* White Overlay on Right Side */}
<div className="absolute inset-0 bg-gradient-to-l from-white via-white/70 to-transparent"></div>


  {/* Information Floating on Overlay */}
  <div className="absolute top-0 right-0 w-[40%] h-full flex items-center px-10">
    <div>
      <span className="inline-block text-[12px] font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
        About Us
      </span>

      <h2 className="mt-6 text-[34px] md:text-[38px] font-bold leading-snug">
        Technology That Delivers {" "}
        <span className="italic font-medium">Growth, Not Just Code</span>
      </h2>

      <p className="mt-5 text-gray-600 leading-relaxed">
       With years of expertise in IT solutions, digital products, and cloud services, Rtechnosys is your trusted partner for business transformation.
      </p>

      {/* Stats */}
      <div className="mt-7 grid grid-cols-1 gap-4 text-sm text-gray-700">
        <Stat text="Agile & Transparent Process – Milestone-driven sprints with clear reporting." />
        <Stat text="Flexible Engagement Models – Hourly, monthly, or project-based." />
        <Stat text="Cost-Effective Solutions – Quality without over-budgeting." />
        <Stat text="End-to-End Reliability – From idea validation to post-deployment support.give me sub headline more deats" />
      </div>

      {/* CTA */}
      <button className="mt-8 flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-700 transition">
        Get Your Free Consultation
        <span className="w-7 h-7 flex items-center justify-center bg-white text-blue-600 rounded-full">
          ➜
        </span>
      </button>
    </div>
  </div>
</div>





    </section>
     <section className="w-full bg-[#f5f7fb] py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        {/* Left Content */}
        <div className="flex-1 text-left">
          {/* Tag */}
          <span className="inline-block text-sm font-semibold text-blue-700 bg-blue-100 px-4 py-1 rounded-full">
            Why Choose Us
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-[34px] md:text-[42px] font-bold leading-snug text-gray-900">
            Your Vision, Our Expertise—
            <br />
            <span className="font-normal italic text-gray-800">
              Together We Create Impactful Digital Solutions.
            </span>
          </h2>

          {/* Bullet Points */}
          <ul className="mt-6 space-y-4 text-gray-600">
            {[
              "We bring 10+ years of IT expertise across industries and technologies.",
              "Our agile, transparent process ensures faster delivery and zero surprises.",
              "Flexible hiring models fit startups, SMEs, and enterprises alike.",
              "From idea validation to 24/7 support—we stay with you at every step.",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm">
                  ✓
                </span>
                <p>{point}</p>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button className="mt-8 flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-700 transition">
            Work with us
            <span className="w-6 h-6 flex items-center justify-center bg-white text-blue-600 rounded-full">
              ➜
            </span>
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center relative">
          {/* Background Curve */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 z-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 300"
              className="w-40 h-64 text-blue-200"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            >
              <path d="M100 0 C180 100, 180 200, 100 300" />
              <path d="M60 0 C140 100, 140 200, 60 300" />
            </svg>
          </div>

          {/* Person Image */}
          <img
            src="happily_doing.png"
            alt="Working professional"
            className="relative z-10 max-w-sm"
          />
        </div>
      </div>
    </section>
    </>
  );
}

/* small helper for bullet + text */
function Stat({ text }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-5 h-5 rounded-full bg-blue-600"></span>
      <span>{text}</span>
    </div>
  );
}
