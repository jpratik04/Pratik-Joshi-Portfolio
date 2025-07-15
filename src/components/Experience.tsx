
import { Calendar, MapPin } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Experience = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [contentRef, contentInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const experiences = [
    {
      title: "Aspiring UI/UX Design Intern",
      company: "Ceeras IT Services", 
      location: "Remote",
      period: "2022 - 2023",
      description: "Created user-centered designs for web and mobile applications. Conducted user research and usability testing to inform design decisions. Worked closely with development teams to ensure seamless implementation of design concepts and maintained consistency across multiple projects."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-800 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div 
            ref={titleRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              My professional journey in design and development, building skills and creating impactful digital experiences.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 to-purple-400 hidden sm:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.title}
                  ref={contentRef}
                  className={`relative pl-8 md:pl-24 transition-all duration-1000 delay-300 ${
                    contentInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-6 top-0 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-gray-800 shadow-lg hidden sm:block"></div>

                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 space-y-4 md:space-y-0">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-base md:text-lg font-semibold text-blue-400 mb-2">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center text-gray-400">
                          <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
