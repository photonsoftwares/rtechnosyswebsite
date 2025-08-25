import React from 'react'
import Footer2 from '../Footer2'

const ServicesDashboard = () => {
  return (
    <>
    <div className="bg-[#f7f6e2] font-serif min-h-screen mt-24 flex flex-col items-center justify-center px-6">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 leading-snug">
        Delivering reliable, innovative & scalable <br /> software solutions
      </h1>

      {/* Paragraphs */}
      <p className="mt-6 text-center text-gray-700 max-w-3xl">
        We craft digital solutions that drive growth, solve challenges, and give
        your business a competitive edge. Combining creativity, technical
        expertise, and industry insights, we deliver scalable, secure, and
        high-performance products tailored to your goals.
      </p>
      <p className="mt-4 text-center text-gray-700 max-w-2xl">
        From dynamic websites to mobile apps, AI tools, and end-to-end IT
        support, we turn ideas into reality, working as an extension of your
        team every step of the way.
      </p>

      {/* Button */}
      <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition">
        Explore Services
      </button>

      {/* Our Services Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Our Services</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          We offer comprehensive software development services designed to meet
          your unique business needs and accelerate your digital transformation.
        </p>
      </div>
       <div className="bg-[#f7f6e2] flex justify-center py-12 px-6">
      <div className="bg-[#0d3d91] rounded-xl p-10 max-w-6xl w-full text-white text-center">
        {/* Heading */}
        <h2 className="text-2xl font-semibold">Web Development</h2>

        {/* Description */}
        <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed">
          We build custom websites and powerful web applications using
          cutting-edge technologies like Angular, React, Node.js, Python,
          Laravel, and more. Our solutions are designed for speed, security, and
          scalability, ensuring your business can grow without limitations. From
          e-commerce platforms to enterprise dashboards, we tailor every detail
          to meet your objectives.
        </p>

        {/* Sub-heading */}
        <h3 className="mt-10 text-xl font-medium">
          Relevant projects and case studies
        </h3>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((card) => (
            <div
              key={card}
              className="bg-gray-100 rounded-xl h-56 flex items-end justify-center p-6"
            >
              <button className="border border-gray-500 text-gray-700 px-6 py-1 rounded-full hover:bg-gray-200 transition">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>



     <div className="bg-[#f7f6e2] flex justify-center py-12 px-6">
      <div className="bg-[#0d3d91] rounded-xl p-10 max-w-6xl w-full text-white text-center">
        {/* Heading */}
        <h2 className="text-2xl font-semibold">Mobile App Development</h2>

        {/* Description */}
        <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed">
         Our mobile solutions deliver smooth, intuitive experiences on both iOS and Android. Whether it’s a native app built for maximum performance or a cross-platform solution for cost efficiency, we design and develop apps that keep users engaged, encourage loyalty, and help you stand out in the competitive mobile market.

        </p>

        {/* Sub-heading */}
        <h3 className="mt-10 text-xl font-medium">
          Relevant projects and case studies
        </h3>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((card) => (
            <div
              key={card}
              className="bg-gray-100 rounded-xl h-56 flex items-end justify-center p-6"
            >
              <button className="border border-gray-500 text-gray-700 px-6 py-1 rounded-full hover:bg-gray-200 transition">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>


    <div className="bg-[#f7f6e2] flex justify-center py-12 px-6">
      <div className="bg-[#0d3d91] rounded-xl p-10 max-w-6xl w-full text-white text-center">
        {/* Heading */}
        <h2 className="text-2xl font-semibold">UI/UX Design</h2>

        {/* Description */}
        <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed">
         Great design is more than aesthetics, it’s about creating meaningful, effortless interactions. We combine research-driven insights with creative vision to produce interfaces that delight users and deliver measurable results. From wireframes to fully interactive prototypes, our designs ensure every click feels natural.

        </p>

        {/* Sub-heading */}
        <h3 className="mt-10 text-xl font-medium">
          Relevant projects and case studies
        </h3>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((card) => (
            <div
              key={card}
              className="bg-gray-100 rounded-xl h-56 flex items-end justify-center p-6"
            >
              <button className="border border-gray-500 text-gray-700 px-6 py-1 rounded-full hover:bg-gray-200 transition">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>


    <div className="bg-[#f7f6e2] flex justify-center py-12 px-6">
      <div className="bg-[#0d3d91] rounded-xl p-10 max-w-6xl w-full text-white text-center">
        {/* Heading */}
        <h2 className="text-2xl font-semibold">AI & Machine Learning</h2>

        {/* Description */}
        <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed">
         Harness the power of AI to automate processes, uncover insights, and innovate faster. Our expertise spans natural language processing, computer vision, predictive analytics, and custom ML models, enabling you to make smarter decisions, improve efficiency, and deliver intelligent user experiences.

        </p>

        {/* Sub-heading */}
        <h3 className="mt-10 text-xl font-medium">
          Relevant projects and case studies
        </h3>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((card) => (
            <div
              key={card}
              className="bg-gray-100 rounded-xl h-56 flex items-end justify-center p-6"
            >
              <button className="border border-gray-500 text-gray-700 px-6 py-1 rounded-full hover:bg-gray-200 transition">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>


    <div className="bg-[#f7f6e2] flex justify-center py-12 px-6">
      <div className="bg-[#0d3d91] rounded-xl p-10 max-w-6xl w-full text-white text-center">
        {/* Heading */}
        <h2 className="text-2xl font-semibold">Managed Services</h2>

        {/* Description */}
        <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed">
         We provide end-to-end IT support and infrastructure management so you can focus on your core business. Our services include application modernization, cloud migration, system monitoring, and security management, ensuring your operations remain stable, secure, and future-ready.

        </p>

        {/* Sub-heading */}
        <h3 className="mt-10 text-xl font-medium">
          Relevant projects and case studies
        </h3>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((card) => (
            <div
              key={card}
              className="bg-gray-100 rounded-xl h-56 flex items-end justify-center p-6"
            >
              <button className="border border-gray-500 text-gray-700 px-6 py-1 rounded-full hover:bg-gray-200 transition">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="bg-[#f7f6e2] flex justify-center py-12 px-6">
      <div className="bg-[#0d3d91] rounded-xl p-10 max-w-6xl w-full text-white text-center">
        {/* Heading */}
        <h2 className="text-2xl font-semibold">Testing & Quality Assurance</h2>

        {/* Description */}
        <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed">
         Your users expect reliability, and so do we. Our QA specialists use both manual and automated testing methods to identify issues before they become problems. From functionality and performance testing to security audits, we ensure your product is flawless before launch.

        </p>

        {/* Sub-heading */}
        <h3 className="mt-10 text-xl font-medium">
          Relevant projects and case studies
        </h3>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((card) => (
            <div
              key={card}
              className="bg-gray-100 rounded-xl h-56 flex items-end justify-center p-6"
            >
              <button className="border border-gray-500 text-gray-700 px-6 py-1 rounded-full hover:bg-gray-200 transition">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
      

       <div className="bg-[#f7f6e2] text-center py-16 px-6">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Ready to start your new project?
      </h2>

      {/* Subtext */}
      <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-lg">
        Let’s transform your new ideas into powerful software solutions. Get a
        free consultation and tailored quote for your project.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex justify-center gap-4">
        <button className="bg-[#0d3d91] text-white px-6 py-2 rounded-md hover:bg-[#0b347a] transition">
          Get my free Quote
        </button>
        <button className="bg-[#0d3d91] text-white px-6 py-2 rounded-md hover:bg-[#0b347a] transition">
          Let’s build together
        </button>
      </div>
    </div>

    </div>
<Footer2/>

    </>
  )
}

export default ServicesDashboard