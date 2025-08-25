import React from "react";
import teamImage from "../assets/Globe_-_Collage_Art-removebg-preview.png"; // path to your uploaded image

const WhyChooseSection = () => {
  return (
    <section className="bg-[#faf6e7] py-16 px-6">
      <div className="max-w-none mx-12 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="mb-4 mx-4">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-600 font-poppins mb-6">
            Why Choose Rtechnosys?
          </h2>
          <div className="px-6 mb-12">
          <p className="text-gray-500 font-poppins font-medium text-lg leading-relaxed mb-8">
            Our lean team blends strategy, design, and development to <br /> deliver
            real results, on time and on budget. We’re partners in <br /> your growth
            journey. Agile, transparent, and obsessed with <br /> quality.
          </p>
          </div>

            <div className="px-12">
          <div className="space-y-6 ">
            {/* Expert Team */}
            <div>
              <h3 className="text-lg font-serif font-semibold text-gray-500">
                Expert Team
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                A talented team of designers, developers, and strategists with
                real-world experience. We don’t just build software, we build
                solutions tailored to your business goals.
              </p>
            </div>

            {/* Agile Methodology */}
            <div>
              <h3 className="text-lg font-serif font-semibold text-gray-500">
                Agile Methodology
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We work in fast, iterative cycles that keep you involved and in
                control. Expect transparency, rapid delivery, and the flexibility
                to pivot when needed.
              </p>
            </div>

            {/* 24/7 Support */}
            <div>
              <h3 className="text-lg font-serif font-semibold text-gray-500">
                24/7 Support
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our team is available around the clock to ensure your product runs
                smoothly and evolves with your needs.
              </p>
            </div>
          </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={teamImage}
            alt="Team Collaboration"
            className=" w-3/4 h-3/4 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

