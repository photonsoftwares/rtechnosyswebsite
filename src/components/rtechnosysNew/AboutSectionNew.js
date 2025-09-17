// AboutSection.jsx
export default function AboutSectionNew() {
  return (
    <section className="w-full bg-white py-10">
      {/* Top Info Cards */}
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-4 px-6">
        {/* Card 1 */}
        <div className="bg-blue-600 text-white rounded-2xl p-8 flex flex-col justify-between min-h-[280px]">
          <div>
            <p className="text-sm font-medium">Years Of Experience</p>
            <h2 className="text-6xl md:text-9xl font-semibold mt-4">35+</h2>
          </div>
          <div className="self-end mt-6 w-12 h-12 md:w-16 md:h-16 border-[6px] border-white border-b-transparent rounded-full -rotate-45"></div>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl overflow-hidden min-h-[200px]">
          <img
            src="team_working.png"
            alt="Team working"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 3 */}
        <div
          className="rounded-2xl p-6 md:p-8 w-full min-h-[200px] text-white"
          style={{ background: "linear-gradient(90deg,#3b3b3b 0%, #111 100%)" }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-yellow-400"></div>
            <span className="text-base md:text-lg font-bold">Rtechnosys</span>
          </div>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-white/90">
            At Rtechnosys, We Build Scalable Software, Smart Products, And
            Future-Ready Solutions To Empower Businesses Worldwide.
          </p>
        </div>
      </div>

      {/* Merchants row */}
      <div className="max-w-full mx-6 mb-6 mt-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {[
            "Marhaba",
            "Ahad",
            "Marhaba",
            "Ahad",
            "Marhaba",
            "Ahad",
            "Marhaba",
            "Ahad",
          ].map((name, i) => (
            <div key={i} className="flex items-center gap-2 md:gap-3">
              <span className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gray-400/70"></span>
              <span className="text-gray-700 text-sm md:text-lg font-medium">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* About Us Section */}
      <div className="relative rounded-lg p-2 w-full h-[400px] md:h-[600px]">
        {/* Background Image */}
        <img
          src="team_collaboration.jpg"
          alt="Team Collaboration"
          className="w-full h-full object-cover rounded-lg"
        />

        {/* White Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-white via-white/90 to-transparent rounded-lg"></div>

        {/* Info Overlay */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-end px-6 md:px-10">
          <div className="w-full md:w-[45%] text-center md:text-left">
            <span className="inline-block text-[12px] font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              About Us
            </span>

            <h2 className="mt-6 text-[26px] sm:text-[30px] md:text-[38px] font-bold leading-snug">
              Unleash The Full Potential Of Your{" "}
              <span className="italic font-medium">Business With Rtechnosys</span>
            </h2>

            <p className="mt-4 md:mt-5 text-gray-600 text-sm md:text-base leading-relaxed">
              With years of expertise in IT solutions, digital products, and cloud
              services, Rtechnosys is your trusted partner for business
              transformation.
            </p>

            {/* Stats */}
            <div className="mt-6 md:mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-sm md:text-base text-gray-700">
              <Stat text="10+ Years of Experience" />
              <Stat text="Clients Across 15+ Countries" />
              <Stat text="250+ Projects Delivered" />
              <Stat text="24/7 Dedicated Support" />
            </div>

            {/* CTA */}
            <button className="mt-6 md:mt-8 flex items-center justify-center md:justify-start gap-3 bg-blue-600 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold hover:bg-blue-700 transition">
              Get Your Free Consultation
              <span className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center bg-white text-blue-600 rounded-full">
                ➜
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Stat Helper */
function Stat({ text }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-600"></span>
      <span>{text}</span>
    </div>
  );
}
