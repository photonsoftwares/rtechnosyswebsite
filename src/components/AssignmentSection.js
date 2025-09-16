import React from 'react'

const AssignmentSection = () => {
  return (
    <>
   <section className="relative w-full h-[400px] flex items-center rounded-2xl mt-11 mb-11">
  {/* Background Image (Left Side) */}
  <div className="absolute inset-0">
    <img
      src="/assignment1.jpg" // replace with your background image
      alt="QR Menu"
      className="w-full h-full object-fill"
    />
    <div className="absolute inset-0 bg-white/70"></div>
  </div>

  {/* Content Section */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div></div> {/* Empty left column to keep text on right */}

    <div className="text-gray-800 space-y-4 md:pl-20"> 
      {/* Added pl-20 to push more right */}
      <h2 className="text-2xl font-bold">
        Marhaba – Smart QR Menu & Engagement Platform
      </h2>
      <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
        <li>
          A complete digital menu and customer engagement solution for
          restaurants, cafés, and food outlets.
        </li>
        <li>
          Features: QR-based ordering, multi-payment options, promotions &
          offers, WhatsApp feedback, real-time analytics.
        </li>
      </ul>

      <h3 className="font-semibold text-base mt-4">Why Choose Marhaba?</h3>
      <p className="text-sm text-gray-700">
        Faster Ordering, Better Customer Experience, And More Repeat
        Business.
      </p>

      <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
        Explore Marhaba →
      </button>
    </div>
  </div>
</section>



   <section className="relative w-full h-[450px] flex items-center overflow-hidden rounded-2xl mb-11">
      {/* Background Image (Right Side) */}
      <div className="absolute inset-0">
        <img
          src="/assignment2.png" // replace with your background image
          alt="Wise POS"
          className="w-full h-full object-fill"
        />
        {/* Gradient overlay from left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-transparent"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column (Text Content) */}
        <div className="text-gray-800 space-y-4">
         
          <h2 className="text-3xl font-bold">
            WISE POS – Restaurant Point Of Sale
          </h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-1">
            <li>
              A robust POS system designed specifically for restaurants and food
              chains.
            </li>
            <li>
              Features: Order & billing management, kitchen display integration,
              inventory control, table management, reports & analytics.
            </li>
          </ul>

          <h3 className="font-semibold text-base mt-4">
            Why Choose WISE POS?
          </h3>
          <p className="text-gray-700 font-medium">
            Smooth Operations, Reduced Errors, And Full Control Of Your
            Restaurant Business.
          </p>

          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition flex items-center gap-2">
            Explore WISE POS
            <span className="text-lg">↗</span>
          </button>
        </div>

        {/* Right Column Empty to keep image visible */}
        <div></div>
      </div>
    </section>
    </>
  )
}

export default AssignmentSection