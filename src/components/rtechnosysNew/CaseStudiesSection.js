import { ArrowRight, BookOpen, Calendar } from 'lucide-react'
import React from 'react'
import { useNavigate } from "react-router-dom";

const CaseStudiesSection = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/case-studies-details"); 
  };

  return (
     <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
         <h2 className="text-xl text-center sm:text-4xl font-semibold text-gray-900 mt-2">
              Read Our Latest <span className="text-xl sm:text-4xl font-playfair font-base text-gray-900 mt-2">Blog and News</span>
            </h2>
        <div className="flex justify-between items-center mb-12">
          <div>
           
           
          </div>
        
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-blue-900" />
                  <span>09 May, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  <span>Business</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                What To Emphasize When You Are Designing Promotional
              </h3>
              <a
                href="#"
                className="flex items-center gap-1 text-blue-600 font-medium mt-4 hover:underline" onClick={handleNavigate}
              >
                <span>Read Details</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <img
              src="blogimg.png"
              alt="Business team in a meeting"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-blue-900" />
                  <span>09 May, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  <span>Business</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                What To Emphasize When You Are Designing Promotional
              </h3>
              <a
                href="#"
                className="flex items-center gap-1 text-blue-600 font-medium mt-4 hover:underline" onClick={handleNavigate}
              >
                <span>Read Details</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <img
              src="blogimg.png"
              alt="Business team in a meeting"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-blue-900" />
                  <span>09 May, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  <span>Business</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                What To Emphasize When You Are Designing Promotional
              </h3>
              <a
                href="#"
                className="flex items-center gap-1 text-blue-600 font-medium mt-4 hover:underline" onClick={handleNavigate}
              >
                <span>Read Details</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <img
              src="blogimg.png"
              alt="Business team in a meeting"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-blue-900" />
                  <span>09 May, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  <span>Business</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                What To Emphasize When You Are Designing Promotional
              </h3>
              <a
                href="#"
                className="flex items-center gap-1 text-blue-600 font-medium mt-4 hover:underline" onClick={handleNavigate}
              >
                <span>Read Details</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <img
              src="blogimg.png"
              alt="Business team in a meeting"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-blue-900" />
                  <span>09 May, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  <span>Business</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                What To Emphasize When You Are Designing Promotional
              </h3>
              <a
                href="#"
                className="flex items-center gap-1 text-blue-600 font-medium mt-4 hover:underline" onClick={handleNavigate}
              >
                <span>Read Details</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <img
              src="blogimg.png"
              alt="Business team in a meeting"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-blue-900" />
                  <span>09 May, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  <span>Business</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                What To Emphasize When You Are Designing Promotional
              </h3>
              <a
                href="#"
                className="flex items-center gap-1 text-blue-600 font-medium mt-4 hover:underline" onClick={handleNavigate}
              >
                <span>Read Details</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <img
              src="blogimg.png"
              alt="Business team in a meeting"
              className="w-full h-auto object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default CaseStudiesSection