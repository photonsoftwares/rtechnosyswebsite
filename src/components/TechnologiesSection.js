import React from "react";

export default function TechnologiesSection() {
  return (
    <div className="bg-[#faf6e7] text-gray-800 font-sans">
      {/* Technologies we master */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center">Technologies we master</h2>
        <p className="text-center font-serif text-gray-600 mt-2">
          We use cutting-edge tools to build scalable, reliable, and high-performing software.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {["React", "Node.js", "Python", "AWS", "Docker", "MongoDB"].map((tech) => (
            <div
              key={tech}
              className="bg-[#173E79] text-white px-11 py-4 rounded-lg text-lg font-medium shadow-md"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Our impact in numbers */}
      <div className="bg-[#FAF7F0] py-12 px-4">
        <h2 className="text-3xl font-bold text-center">Our impact in numbers</h2>
        <p className="text-center font-serif text-gray-600 mt-2">
          We don’t just build software, we build long-term value. Here’s a snapshot of what we’ve achieved so far:
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
  {[
    { number: "25+", label: "Projects Delivered", img: "/card.png" },
    { number: "15+", label: "Clients Served Globally", img: "/men.png" },
    { number: "98%", label: "Client Satisfaction Rate", img: "/smiley.png" },
    { number: "5+", label: "Industries Catered", img: "/building.png" },
  ].map((item) => (
    <div
      key={item.label}
      className="bg-[#173E79] text-white rounded-lg p-6 w-64 text-center shadow-md flex flex-col items-center"
    >
      {/* Image */}
      <img
        src={item.img}
        alt={item.label}
        className="h-12 w-12 mb-3 p-2 bg-[#faf6e7] rounded-3xl"
      />

      {/* Number */}
      <div className="text-3xl font-bold">{item.number}</div>

      {/* Label */}
      <div className="mt-2">{item.label}</div>
    </div>
  ))}
</div>

      </div>

      {/* Contact Section */}
      <div className="py-12 px-4 text-center">
        <h2 className="text-3xl font-serif font-bold">Ready to start your next project?</h2>
        <p className="text-gray-600 font-serif font-medium text-2xl mt-2">
          Let’s discuss how can we help bring your digital vision to life
        </p>

        <div className="mt-6 flex items-center justify-center gap-20 space-y-2">
          <div>
          <p className="text-gray-600 text-sm text-left">
            Email us
          </p>
           <p className="font-medium text-sm ">rtechnosyslab@gmail.com</p>
           </div>
           <div>
          <p className="text-gray-600 text-sm text-left">
            Call us
          </p>
           <p className="font-medium text-sm">+91 84000 63557, +91 98261 70926</p>
           </div>
        </div>

        <button className="mt-8 font-serif border border-gray-800 px-6 py-2 rounded-md hover:bg-gray-200 transition">
          Contact us now
        </button>
      </div>
    </div>
  );
}