import React from 'react';
import Footer2 from '../Footer2';

const TechnologiesDashboard = () => {
  return (
     <section className="bg-[#FAFAEB] font-serif py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800">
          Technologies we excel in
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          We leverage the latest technologies and frameworks to deliver
          high-performance, scalable, and secure solutions tailored to your
          needs. From web and mobile development to AI and enterprise software,
          our expertise spans across diverse technology stacks that bring your
          vision to life.
        </p>

        {/* Card */}
       <div className="mt-12 bg-[#002D72] text-white rounded-2xl px-6 sm:px-10 lg:px-28 py-8 text-left">
  {/* Two columns from md+, single column on mobile */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    
    {/* Web Development */}
    <div>
      <h3 className="text-lg font-semibold mb-4 text-center md:text-left">Web Development</h3>

      {/* Subgrid: 1 col on mobile, 2 cols from sm+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <ul className="space-y-2 text-sm list-disc list-inside">
          <li>Angular JS Development</li>
          <li>Node JS Development</li>
          <li>React JS Development</li>
          <li>Django Development</li>
          <li>Vue.js Development</li>
          <li>Python Development</li>
        </ul>
        <ul className="space-y-2 text-sm ml-10 list-disc list-inside">
          <li>Ruby on Rails Development</li>
          <li>Laravel Development</li>
          <li>Full Stack Development</li>
          <li>.Net Development</li>
        </ul>
      </div>
    </div>

    {/* Mobile */}
    <div className='ml-32'>
      <h3 className="text-lg font-semibold  mb-4 text-center md:text-left">Mobile</h3>
      <ul className="space-y-2 text-sm list-disc list-inside">
        <li>Android Development</li>
        <li>iOS Development</li>
        <li>React Native Development</li>
        <li>Flutter Development</li>
        <li>Cross-platform Development</li>
        <li>Java Development</li>
      </ul>
    </div>
  </div>

          {/* AI & ML */}
          <div className='grid grid-cols-3 m-6'>
          <div>
            <h3 className="text-lg font-semibold mb-4">AI & ML</h3>
            <ul className="space-y-2 text-sm">
              <li>• LLM Development</li>
              <li>• Lovable Development</li>
              <li>• AI Agent Development</li>
            </ul>
          </div>

          {/* Managed Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Managed Services</h3>
            <ul className="space-y-2 text-sm">
              <li>• Application Management and Modernization</li>
              <li>• Software Product Engineering</li>
              <li>• Software outsourcing company</li>
              <li>• IT Consulting Services</li>
              <li>• IT Staff Augmentation</li>
            </ul>
          </div>

          {/* Other */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Other</h3>
            <ul className="space-y-2 text-sm">
              <li>• Testing and Assurance</li>
              <li>• Design Services</li>
              <li>• SaaS Development</li>
              <li>• Workflow Developers</li>
            </ul>
          </div>
          </div>
        </div>
         <div className="bg-[#FAFAEB] min-h-screen font-sans py-16 px-4">
      {/* Header section - "Awards and Recognition" */}
      <div className="text-center py-8 font-serif ">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Awards and Recognition
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Over the years, our dedication to delivering innovative and high-quality solutions has earned us recognition from leading industry platforms and trusted partners.
        </p>
      </div>

      {/* Grid for awards/logos */}
      <div className="flex justify-center items-center mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 max-w-6xl w-full">
          {/* Card 1 */}
          <div className="bg-gray-300 w-full h-48 rounded-lg shadow-lg flex items-center justify-center">
            {/* You can place an image or logo here */}
          </div>
          {/* Card 2 */}
          <div className="bg-gray-300 w-full h-48 rounded-lg shadow-lg flex items-center justify-center">
            {/* You can place an image or logo here */}
          </div>
          {/* Card 3 */}
          <div className="bg-gray-300 w-full h-48 rounded-lg shadow-lg flex items-center justify-center">
            {/* You can place an image or logo here */}
          </div>
          {/* Card 4 */}
          <div className="bg-gray-300 w-full h-48 rounded-lg  shadow-lg flex items-center justify-center">
            {/* You can place an image or logo here */}
          </div>
          {/* Card 5 */}
          <div className="bg-gray-300 w-full h-48 rounded-lg shadow-lg flex items-center justify-center">
            {/* You can place an image or logo here */}
          </div>
          {/* Card 6 */}
          <div className="bg-gray-300 w-full h-48 rounded-lg shadow-lg flex items-center justify-center">
            {/* You can place an image or logo here */}
          </div>
          {/* Card 7 */}
          <div className="bg-gray-300 w-full h-48 rounded-lg shadow-lg flex items-center justify-center">
            {/* You can place an image or logo here */}
          </div>
          {/* Card 8 */}
          <div className="bg-gray-300 w-full h-48 rounded-lg shadow-lg flex items-center justify-center">
            {/* You can place an image or logo here */}
          </div>
        </div>
      </div>
    </div>
   
      </div>
      <Footer2/>
    </section>
  );
};

export default TechnologiesDashboard;