import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function BlogSectionNew() {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/case-studies-details"); 
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Read Our Latest <span className="text-3xl sm:text-4xl font-poppins font-bold text-gray-900 mt-2">Blog and News</span>
            </h2>
          </div>
         <button className="mt-8 flex items-center gap-3 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition" onClick={handleNavigate}>
        view Details
        <span className="w-7 h-7 flex items-center justify-center -rotate-45 bg-white text-blue-600 rounded-full">
          ➜
        </span>
      </button>
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
        </div>
      </div>
    </section>
  );
}