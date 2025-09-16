import React from "react";
import { FaArrowRight, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="w-screen py-16 bg-white">
      {/* Top Section */}
      <div className="text-center mb-12">
        <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
          Contact Us
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
          Get In Touch With <span className="italic text-gray-700">Us Today</span>
        </h2>
      </div>

      {/* Main Content */}
      <div className="w-screen mx-auto flex flex-col md:flex-row gap-8 px-6">
        {/* Contact Form (70%) */}
        <div className="w-full md:w-[70%] bg-gradient-to-b from-black via-gray-900 to-purple-900 p-8 rounded-2xl shadow-lg">
          <h3 className="text-white text-xl font-semibold mt-10 mb-6">
            Send Your Message
          </h3>

          <form className="space-y-4">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Phone"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <select className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>UI/UX Design</option>
                <option>Cloud Services</option>
              </select>
            </div>

            {/* Message */}
            <textarea
              rows="6"
              placeholder="Write Your Message..."
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>

            {/* Submit Button */}
            <button className="mt-4 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition">
              Get Started <FaArrowRight />
            </button>
          </form>
        </div>

        {/* Contact Info (30%) */}
        <div className="w-full md:w-[30%] bg-blue-600 text-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
          <p className="text-gray-100 mb-6">
            Get In Touch And Experience The Rtechnosys Difference.
          </p>

          <div className="space-y-6 mt-32">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-600">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="font-semibold">Call Us</h4>
                <p className="text-gray-100">+91 84000 63557</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-600">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-semibold">Send Email</h4>
                <p className="text-gray-100">Rtechnosyslab@Gmail.Com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 px-3 flex items-center justify-center rounded-full bg-white text-blue-600">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-100">
                  Rtechnosys Lab LLP - The Hub IT Park, Rajnagar EXTN Ghaziabad
                  NCR Delhi India, Uttar Pradesh, 201001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
