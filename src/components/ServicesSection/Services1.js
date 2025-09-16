import React from "react";

const services = [
  {
    img: "services1.png",
    title: "Point Of Sale Enterprises Solution Development And Deployment",
    desc: "Seamless POS Systems With Deployment & Support To Simplify Retail Operations, Sales Tracking, And Billing.",
  },
  {
    img: "services2.png",
    title: "Loyalty And Gift Card Solution Development And Deployment",
    desc: "Boost Customer Engagement With Loyalty Programs And Digital Gift Cards, Customized For Your Business.",
  },
  {
    img: "services3.jpg",
    title: "E-Commerce & Delivery Platforms",
    desc: "Scalable E-Commerce Apps And Delivery Solutions Designed For High Performance And Customer Convenience.",
  },
  {
    img: "services4.jpg",
    title: "Web & Mobile App Development",
    desc: "Modern, User-Friendly, And Scalable Apps For Businesses Across Industries – Powered By The Latest Tech.",
  },
  {
    img: "services5.jpg",
    title: "Manpower Outsourcing",
    desc: "On-Demand IT Experts, Developers, And Support Teams To Strengthen Your Workforce And Achieve Faster Results.",
  },
  {
    img: "services6.png",
    title: "ERP Development & Integration",
    desc: "Custom ERP Solutions That Streamline Workflows, Improve Productivity, And Connect All Your Business Operations.",
  },
];

export default function Services1() {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Unleash The Full Potential Of{" "}
          <span className="text-black">Your</span>
        </h2>
        <p className="italic text-gray-600 text-lg mt-2">
          Business With <span className="font-semibold">Rtechnosys</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-xl transition"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
