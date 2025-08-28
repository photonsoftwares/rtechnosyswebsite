import React from 'react';
import Footer2 from '../Footer2';

const TechnologiesDashboard = () => {
  return (
    <>
     <section className="bg-[#FAFAEB] font-serif py-16">
      <div className="max-w-6xl mx-auto mb-0 px-6 text-center">
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
      <div className="mt-12 bg-[#002D72] text-white rounded-2xl px-6 mb-12 sm:px-10 lg:px-20 py-10">
      {/* Main grid: 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">

        {/* Column 1 - Web Development */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Web Development</h3>
          <ul className="space-y-2 text-sm list-disc list-inside">
            <li>Angular JS Development</li>
            <li>Node JS Development</li>
            <li>React JS Development</li>
            <li>Django Development</li>
            <li>Vue.js Development</li>
            <li>Python Development</li>
            <li>Ruby on Rails Development</li>
            <li>Laravel Development</li>
            <li>Full Stack Development</li>
            <li>.Net Development</li>
          </ul>
        </div>

        {/* Column 2 - Managed Services + AI & ML */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Managed Services</h3>
          <ul className="space-y-2 text-sm list-disc list-inside mb-8">
            <li>Application Management and Modernization</li>
            <li>Software Product Engineering</li>
            <li>Software outsourcing company</li>
            <li>IT Consulting Services</li>
            <li>IT Staff Augmentation</li>
          </ul>

          <h3 className="text-lg font-semibold mb-4">AI & ML</h3>
          <ul className="space-y-2 text-sm list-disc list-inside">
            <li>LLM Development</li>
            <li>Lovable Development</li>
            <li>AI Agent Development</li>
          </ul>
        </div>

        {/* Column 3 - Mobile + Other */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Mobile</h3>
          <ul className="space-y-2 text-sm list-disc list-inside mb-8">
            <li>Android Development</li>
            <li>iOS Development</li>
            <li>React Native Development</li>
            <li>Flutter Development</li>
            <li>Cross-platform Development</li>
            <li>Java Development</li>
          </ul>

          <h3 className="text-lg font-semibold mb-4">Other</h3>
          <ul className="space-y-2 text-sm list-disc list-inside">
            <li>Testing and Assurance</li>
            <li>Design Services</li>
            <li>SaaS Development</li>
            <li>Workflow Developers</li>
          </ul>
        </div>
      </div>
    </div>
       
   
      </div>
      
    </section>
    <Footer2/>
    </>
  );
};

export default TechnologiesDashboard;