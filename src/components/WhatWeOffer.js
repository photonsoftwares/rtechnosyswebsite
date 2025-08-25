
import tabImage from "../assets/tab.png";
import cloudImage from "../assets/cloud.png";

const WhatWeOffer = () => {
  return (
    <section className="bg-[#15478C] py-16 px-4">
      {/* Title */}
      <h2 className="text-center text-white text-3xl font-semibold mb-10">
        What we offer
      </h2>

      {/* Cards Container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md p-8 text-center flex flex-col items-center hover:scale-105">
          <div className="bg-[#15478C] w-14 h-14 rounded-full flex items-center justify-center mb-6">
            <img src={tabImage} alt="Web Development" className="w-6 h-6 object-contain" />
          </div>
          <h3 className="text-lg text-gray-700 font-normal font-serif mb-2">
            Web Development
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Custom websites and web applications built with modern technologies
          </p>
          <ul className="text-gray-700 text-sm space-y-1 mb-6 text-left">
            <li className="list-disc ml-4">Fast, secure architecture</li>
            <li className="list-disc ml-4">SEO-friendly setup</li>
            <li className="list-disc ml-4">Cross-platform compatibility</li>
            <li className="list-disc ml-4">Seamless UI/UX</li>
          </ul>
          <button className="border border-gray-400 rounded-lg px-4 py-2 text-sm hover:bg-gray-100 transition">
            Learn more
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md p-8 text-center flex flex-col items-center hover:scale-105">
          <div className="bg-[#15478C] w-14 h-14 rounded-full flex items-center justify-center mb-6">
            <img src={cloudImage} alt="Cloud Solutions" className="w-6 h-6 object-contain" />
          </div>
          <h3 className="text-lg text-gray-700 font-normal font-serif mb-2">
            Cloud Solutions
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Scalable cloud infrastructure and migration services to modernize your business operations
          </p>
          <ul className="text-gray-700 text-sm space-y-1 mb-6 text-left">
            <li className="list-disc ml-4">AWS & Azure integration</li>
            <li className="list-disc ml-4">CI/CD pipelines</li>
            <li className="list-disc ml-4">Data backup & security</li>
            <li className="list-disc ml-4">Serverless deployments</li>
          </ul>
          <button className="border border-gray-400 rounded-lg px-4 py-2 text-sm hover:bg-gray-100 transition">
            Learn more
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md p-8 text-center flex flex-col items-center hover:scale-105">
          <div className="bg-[#15478C] w-14 h-14 rounded-full flex items-center justify-center mb-6">
            <p className="text-white text-center">100%</p>
          </div>
          <h3 className="text-lg text-gray-700 font-normal font-serif mb-2">
            Quality Assurance
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Comprehensive testing services to ensure your software meets the highest quality standards
          </p>
          <ul className="text-gray-700 text-sm space-y-1 mb-6 text-left">
            <li className="list-disc ml-4">Manual & automated testing</li>
            <li className="list-disc ml-4">Performance optimization</li>
            <li className="list-disc ml-4">Security compliance checks</li>
            <li className="list-disc ml-4">Continuous testing integration</li>
          </ul>
          <button className="border border-gray-400 rounded-lg px-4 py-2 text-sm hover:bg-gray-100 transition">
            Learn more
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhatWeOffer;
