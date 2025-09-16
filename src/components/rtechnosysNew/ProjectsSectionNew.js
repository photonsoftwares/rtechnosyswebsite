import React, { useState, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

const ProjectsSectionNew = () => {
  const projects = [
    {
      title: "Innovative Expert in Web Development Services",
      desc: "Our orthopedic specialists are to helping you move freely an without pain.",
      tag: "Web Development",
      image: "laptop.jpg",
    },
    {
      title: "Marhaba – Smart QR Menu & Engagement Platform",
      desc: "A complete digital menu and customer engagement solution for restaurants, cafés, and food outlets.",
      tag: "Web Development",
      image: "assignment1.jpg",
    },
    {
      title: "WISE POS – Restaurant Point Of Sale",
      desc: "Smooth operations, reduced errors, and full control of your restaurant business.",
      tag: "POS System",
      image: "assignment2.png",
    },
  ];

  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  const handleDotClick = (index) => {
    setCurrent(index);
    const container = containerRef.current;
    const card = document.getElementById(`card-${index}`);
    if (container && card) {
      const containerRect = container.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const scrollLeft =
        container.scrollLeft +
        (cardRect.left - containerRect.left) -
        containerRect.width / 2 +
        cardRect.width / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-black via-gray-900 to-purple-900 py-16">
      {/* Top Section */}
      <div className="text-center mb-12">
        <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-medium">
          Our Projects
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">
          Unleash The Full Potential Of Your{" "}
          <span className="italic text-gray-300">Business With Rtechnosys</span>
        </h2>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-6 px-6 md:px-16 scrollbar-hide snap-x snap-mandatory scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            id={`card-${index}`}
            className="flex-shrink-0 w-[280px] md:w-[420px] bg-white rounded-2xl shadow-lg overflow-hidden snap-center"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 text-sm rounded-md font-medium">
                {project.tag}
              </span>
              <h3 className="text-lg md:text-xl font-semibold mt-3 text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2">{project.desc}</p>

              <button className="mt-4 flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-full font-medium transition">
                View Details <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 space-x-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-yellow-400" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSectionNew;
