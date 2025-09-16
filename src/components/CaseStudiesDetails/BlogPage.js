import { FaCheckCircle } from "react-icons/fa";

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6 md:px-16">
      {/* Page Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
        Read Our Latest <span className="text-blue-600 italic">Blog & News</span>
      </h2>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-10 max-w-7xl mx-auto">
        {/* Left Content (70%) */}
        <div className="md:col-span-7 bg-white rounded-lg shadow p-6">
          {/* Blog Image */}
          <img
            src="Details3.png"
            alt="Blog Banner"
            className="rounded-lg h-96 w-[820px] mb-6"
          />

          {/* Blog Meta */}
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
            <span>09 May, 2025</span>
            <span className="text-blue-600 font-medium">POS Solutions</span>
          </div>

          {/* Blog Title */}
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            How Rtechnosys Helped A Restaurant Chain Digitize With WISE POS
          </h1>

          {/* Blog Description */}
          <p className="text-gray-700 mb-6">
            In Early 2024, A Fast-Growing Restaurant Chain In The Middle East
            Faced Multiple Operational Challenges...
          </p>

          {/* Section: The Challenge */}
          <h2 className="text-xl font-semibold mb-2">The Challenge</h2>
          <ul className="list-disc ml-6 text-gray-700 mb-6">
            <li>Long Wait Times For Billing & Order Processing.</li>
            <li>Manual Tracking Of Inventory Leading To Stockouts.</li>
            <li>Inefficient Loyalty Programs That Failed To Retain Customers.</li>
            <li>
              Lack Of Integration Between Dine-In, Takeaway, And Online Delivery Orders.
            </li>
          </ul>

          {/* Section: Solution */}
          <h2 className="text-xl font-semibold mb-4">
            The Solution: WISE POS By Rtechnosys
          </h2>
          <ul className="space-y-3 mb-6">
            {[
              "Cloud-Based POS – Accessible Across Devices, Enabling Faster Billing And Table Management.",
              "Integrated Loyalty & Gift Card System – Seamless Rewards For Repeat Customers.",
              "Real-Time Inventory Management – Alerts For Low Stock And Auto-Purchase Requests.",
              "Multi-Channel Order Sync – Dine-In, Takeaway, And Online Delivery Orders On One Dashboard.",
              "Detailed Analytics Dashboard – Sales Trends, Customer Insights, And Staff Performance Tracking.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <FaCheckCircle className="text-green-500 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Section: Results */}
          <h2 className="text-xl font-semibold mb-4">The Results</h2>
          <ul className="list-disc ml-6 text-gray-700 mb-6">
            <li>40% Faster Billing, Reduced Average Wait Time During Peak Hours.</li>
            <li>25% Increase In Customer Retention Thanks To Loyalty Integration.</li>
            <li>Real-Time Visibility + Management Could Track Sales And Inventory Across All Branches.</li>
            <li>
              Scalability – The POS Was Easily Extended To 5 More Outlets Without Downtime.
            </li>
          </ul>

          {/* Customer Quote */}
          <div className="bg-gray-100 p-4 rounded-md text-gray-700 italic">
            “WISE POS Transformed How We Run Our Restaurants. From Faster Billing To Loyal Repeat
            Customers, Rtechnosys Delivered Beyond Expectations.”
          </div>
        </div>

        {/* Right Sidebar (30%) */}
        <div className="md:col-span-3 space-y-8">
          {/* Latest News */}
         {/* Latest News */}
<div>
  <h3 className="text-lg font-semibold mb-4">Latest News</h3>
  <div className="space-y-6">
    {[1, 2].map((news, idx) => (
      <div key={idx} className="bg-white shadow rounded-md p-4">
        <p className="text-sm text-gray-500">09 May, 2025 · Business</p>
        <h4 className="text-gray-800 font-medium text-sm mt-1">
          {idx === 0
            ? "Build A Strong Financial Foundation For Your Business"
            : "5 Essential Tax Planning Tips Every Entrepreneur"}
        </h4>

        {/* Image comes BELOW title now */}
        <img
          src="Details1.png"
          alt="news"
          className="rounded-md w-full h-40 object-cover mt-3"
        />

        <button className="text-blue-600 text-sm mt-3">Read Details ➜</button>
      </div>
    ))}
  </div>
</div>


          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="space-y-3">
              {Array(6)
                .fill("Business")
                .map((cat, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between text-gray-700 border-b pb-2"
                  >
                    <span>{cat}</span>
                    <span>[28]</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
