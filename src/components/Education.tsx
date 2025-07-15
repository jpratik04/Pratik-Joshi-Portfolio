
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              My academic journey in technology and artificial intelligence.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 to-purple-400 hidden sm:block"></div>

            <div className="relative pl-8 md:pl-24">
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-6 top-0 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-gray-800 shadow-lg hidden sm:block"></div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 space-y-4 md:space-y-0">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-start flex-col sm:flex-row sm:items-center">
                      <GraduationCap className="h-5 w-5 md:h-6 md:w-6 mr-0 sm:mr-3 mb-2 sm:mb-0 text-blue-400 flex-shrink-0" />
                      <span>Bachelor of Technology</span>
                    </h3>
                    <p className="text-base md:text-lg font-semibold text-blue-400 mb-2">
                      4th Year (pursuing)
                    </p>
                    <p className="text-base md:text-lg text-gray-300 mb-2">
                      Artificial Intelligence & Data Science
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">Nov 2022 - Aug 2026</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4 space-y-2">
                  <p className="text-gray-300 text-sm md:text-base">
                    <span className="font-semibold text-white">Institution:</span> K. K. Wagh Institute of Engineering Education & Research
                  </p>
                  <div className="flex items-start text-gray-300 text-sm md:text-base">
                    <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Nashik, Maharashtra, India</span>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base">
                    <span className="font-semibold text-white">CGPA:</span> 6.99
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2 text-sm md:text-base">Specialization</h4>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    Currently pursuing a Bachelor's degree in Artificial Intelligence & Data Science, 
                    focusing on machine learning, data analysis, and AI applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
