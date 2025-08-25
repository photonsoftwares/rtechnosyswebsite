import React from "react";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import Footer2 from "../Footer2";
import { Mail } from "lucide-react";

const InsightsGuides = () => {
  const categories = ["Guides and Tutorials", "Industry News", "Case Studies", "Tips and Tricks"];

  const articles = [
    {
      title: "How to create an image to text converter using Python?",
      category: "Case Studies",
      date: "Aug 7, 2025",
      readTime: "6 minute Read",
    },
    {
      title: "How to create an image to text converter using Python?",
      category: "Case Studies",
      date: "Aug 7, 2025",
      readTime: "6 minute Read",
    },
    {
      title: "How to create an image to text converter using Python?",
      category: "Case Studies",
      date: "Aug 7, 2025",
      readTime: "6 minute Read",
    },
    {
      title: "How to create an image to text converter using Python?",
      category: "Case Studies",
      date: "Aug 7, 2025",
      readTime: "6 minute Read",
    },
    {
      title: "How to create an image to text converter using Python?",
      category: "Case Studies",
      date: "Aug 7, 2025",
      readTime: "6 minute Read",
    },
    {
      title: "How to create an image to text converter using Python?",
      category: "Case Studies",
      date: "Aug 7, 2025",
      readTime: "6 minute Read",
    },
  ];

  return (
    <>
    <div className="bg-[#F9F9E8] font-serif max-w-full py-12 px-6 lg:px-20">
      {/* Heading Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Explore our latest Insights & Guides
        </h2>
        <p className="mt-3 text-gray-700 text-sm md:text-base">
          Discover expert articles, industry trends and practical guides to help you succeed.
          From technical tutorials to business strategies, we share knowledge that matters to your growth.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {categories.map((cat, i) => (
          <button
            key={i}
            className="px-4 py-2 text-sm font-medium rounded-full border text-white border-gray-300 bg-[#002D72] hover:bg-blue-700"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Subscribe Section */}
     <div className="bg-[#0A3B91] text-white rounded-2xl px-6 py-5 md:px-12 text-center mt-11 max-w-4xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-4">Never miss an update</h2>
      <p className="text-sm text-gray-200 mb-6">
        Unlock access to expert guides and stay ahead with the latest industry
        trends, right in your inbox.
      </p>

      {/* Input with icon on right */}
      <div className="relative max-w-md mx-auto">
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-full border border-gray-300 pl-4 pr-10 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>

      {/* Subscribe Button */}
      <button className="mt-4 bg-blue-300 text-[#0A3B91] px-6 py-2 rounded-xl font-medium hover:bg-blue-400 transition">
        Subscribe
      </button>

      {/* Footer text */}
      <p className="text-xs text-gray-300 mt-4">
        You can unsubscribe at any time. Read our{" "}
        <a href="#" className="underline">
          privacy policy
        </a>
        .
      </p>
    </div>
      {/* Articles Grid */}
      <div className="mt-12">
  {/* Articles Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {articles.map((article, index) => (
      <div key={index} className="bg-[#002D72] w-80 m-auto text-white rounded-xl shadow-md overflow-hidden">
        {/* Placeholder for Image */}
        <div className="h-60 w-full flex justify-center items-center bg-[#002D72]">
  <div className="w-64 h-52 bg-gray-400"></div> 
</div>

        {/* Content */}
        <div className="p-4">
          <h4 className="text-sm font-semibold">{article.title}</h4>
          <span className="inline-block mt-2 bg-white text-[#002D72] text-xs px-3 py-1 rounded-full font-medium">
            {article.category}
          </span>
          <div className="flex justify-between items-center text-xs mt-3">
            <span>{article.readTime}</span>
            <span>{article.date}</span>
          </div>
          <a
            href="#"
            className="mt-3 inline-block text-xs font-semibold hover:underline"
          >
            Read More →
          </a>
        </div>
      </div>
    ))}
  </div>

  {/* Load More Button */}
  <div className="flex justify-center mt-8">
    <button className="py-2 px-6 rounded-2xl bg-blue-300 hover:bg-blue-400">
      Load more
    </button>
  </div>
</div>

      <div className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Ready to transform your business?
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Got an idea you're excited about? We'd love to hear it. Share your project details with us, and we'll send you a tailored plan and cost estimate, completely free. Whether it's a website, app, or design project, our team will help turn your vision into reality.
        </p>
      </div>

      {/* Main Form container */}
      <div className="flex justify-center items-center px-4 mb-20">
        <div className="bg-blue-900 text-white rounded-lg shadow-xl p-8 max-w-4xl w-full">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Full Name and Email Address */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full p-3 bg-blue-900 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="emailAddress" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="emailAddress"
                className="w-full p-3 bg-blue-900 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                placeholder="Enter your full name"
              />
            </div>

            {/* Phone Number and Project Type */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="w-full p-3 bg-blue-900 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium mb-1">
                Project Type
              </label>
              <select
                id="projectType"
                className="w-full p-3 bg-blue-900 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-8"
              >
                <option value="" disabled>Select project type</option>
                <option value="website">Website</option>
                <option value="app">App</option>
                <option value="design">Design Project</option>
              </select>
            </div>

            {/* Budget Range */}
            <div className="md:col-span-2">
              <label htmlFor="budgetRange" className="block text-sm font-medium mb-1">
                Budget Range
              </label>
              <select
                id="budgetRange"
                className="w-full p-3 bg-blue-900 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-8"
              >
                <option value="" disabled>Select project type</option>
                <option value="<5k">$1k - $5k</option>
                <option value="5-10k">$5k - $10k</option>
                <option value=">10k">$10k+</option>
              </select>
            </div>

            {/* Project Details */}
            <div className="md:col-span-2">
              <label htmlFor="projectDetails" className="block text-sm font-medium mb-1">
                Project Details
              </label>
              <textarea
                id="projectDetails"
                rows="5"
                className="w-full p-3 bg-blue-900 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 resize-none"
                placeholder="Tell us about your project, goals, timeline and any specific requirements..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center mt-4">
              <button
                type="submit"
                className="bg-[#F9F9E8] text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-colors"
              >
                Get my free Quote
              </button>
            </div>
          </form>
          <p className="text-center text-sm text-gray-300 mt-6">
            We will respond within 48 hours with your personalised quote and project roadmap.
          </p>
        </div>
      </div>

      {/* Footer */}
    
    </div>
    <Footer2/>
    </>
  );
};

export default InsightsGuides;
