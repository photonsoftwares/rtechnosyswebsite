import React, { useState } from "react";
import Footer2 from "../Footer2";

export default function ContactForm() {
    const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How quickly can I get started?',
      answer: 'Our onboarding process is designed to be quick and efficient. Once you sign up, you can typically get started within a few hours, depending on the complexity of your needs.'
    },
    {
      question: 'What support options are available?',
      answer: 'We offer a range of support options, including email support, a knowledge base, and live chat during business hours. For enterprise clients, dedicated support is available.'
    },
    {
      question: 'Can I schedule a demo?',
      answer: 'Yes, you can schedule a free demo with one of our specialists. The demo will give you a personalized walkthrough of our platform and answer any questions you may have.'
    },
    {
      question: 'Do you offer custom integrations?',
      answer: 'We can build custom integrations for your business. Please contact our sales team to discuss your specific requirements and get a tailored solution.'
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F9F9E8] font-serif py-16 px-4">
      {/* Top Heading */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-gray-800">
          We’d love to hear from you
        </h2>
        <p className="mt-2 text-gray-700">
          Got a question, an idea, or need a hand? Our friendly team is ready to help.
          Whether you’re exploring our services, seeking technical support, or
          planning your next project, we’re only a message away.
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-[#0D3B8C] text-white rounded-2xl p-8 max-w-4xl mx-auto">
        <h3 className="text-center text-xl font-semibold mb-6">
          Send us a Message
        </h3>

        <form className="space-y-6">
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-3 py-2 rounded-md border border-gray-300 bg-[#0D3B8C] text-gray-900 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-md border border-gray-300 bg-[#0D3B8C] text-gray-900 focus:outline-none"
              />
            </div>
          </div>

          {/* Phone + Subject */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full px-3 py-2 rounded-md border border-gray-300 bg-[#0D3B8C] text-gray-900 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-2">Subject</label>
              <input
                type="text"
                placeholder="Type your subject"
                className="w-full px-3 py-2 rounded-md border border-gray-300 bg-[#0D3B8C] text-gray-900 focus:outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2">Message</label>
            <textarea
              placeholder="Tell us how can we help you..."
              rows="4"
              className="w-full px-3 py-2 rounded-md border border-gray-300 bg-[#0D3B8C] text-gray-900 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-white text-[#0D3B8C] font-semibold rounded-md shadow-md hover:bg-gray-100"
            >
              Send Message
            </button>
          </div>

          {/* Footer Note */}
          <p className="text-center text-sm text-gray-200 mt-2">
            We typically respond within 48 hours during business days
          </p>
        </form>
      </div>
       <div className="bg-[#F9F9E8] min-h-screen font-sans py-16">
      {/* Contact and Office Hours section */}
      <div className="flex flex-col md:flex-row justify-center gap-8 mb-16 px-4">
        {/* Get in touch card */}
        <div className="bg-blue-900 text-white rounded-lg shadow-xl p-8 max-w-sm w-full">
          <h2 className="text-xl font-semibold mb-6 text-center">Get in touch</h2>
          <div className="flex items-center mb-4">
            <div className="text-xl mr-4">📞</div> {/* Placeholder for phone icon */}
            <div>
              <p>+91 84000 65557, +91 98261 70926</p>
              <p className="text-sm text-gray-300">Weekdays, 9 AM - 7 PM IST</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="text-xl mr-4">✉️</div> {/* Placeholder for email icon */}
            <p>rtechnosyslab@gmail.com</p>
          </div>
          <div className="flex items-center">
            <div className="text-xl mr-4">💬</div> {/* Placeholder for chat icon */}
            <div>
              <p>+91 84000 65557</p>
              <p className="text-sm text-gray-300">Quick support chat</p>
            </div>
          </div>
        </div>

        {/* Office hours card */}
        <div className="bg-blue-900 text-white rounded-lg shadow-xl p-8 max-w-sm w-full">
          <h2 className="text-xl font-semibold mb-6 text-center">Office hours</h2>
          <div className="flex justify-between mb-2">
            <p>Monday - Friday</p>
            <p>9:00 AM - 7:00 PM</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Saturday</p>
            <p>10:00 AM - 4:00 PM</p>
          </div>
          <div className="flex justify-between mb-4">
            <p>Sunday</p>
            <p>Closed</p>
          </div>
          <p className="text-center text-sm text-gray-400 mt-4">
            All times are in Indian Standard Time (IST)
          </p>
        </div>
      </div>

      {/* FAQ section */}
      <div className="max-w-4xl font-serif mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Frequently Asked Question</h2>
          <p className="text-lg text-gray-600">
            Find quick answers to common questions. Still can't see what you need? Just drop us a message above.
          </p>
        </div>

        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-6 bg-blue-900 text-white rounded-lg flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span>
                <svg
                  className={`w-6 h-6 transition-transform transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 bg-gray-200 text-gray-700 rounded-b-lg">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer2/>
    </div>

  );
}
