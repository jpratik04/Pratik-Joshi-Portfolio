import { Code, Palette, Zap } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const About = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [imageRef, imageInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [contentRef, contentInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [cardsRef, cardsInView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div
            ref={titleRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image Section */}
            <div
              ref={imageRef}
              className={`w-full lg:w-1/2 order-1 lg:order-1 transition-all duration-1000 delay-300 ${
                imageInView ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-20 scale-95'
              }`}
            >
              <div className="relative group">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105">
                  <img 
                    src="/profile.jpg" 
                    alt="Pratik Joshi" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 transition-opacity duration-300 group-hover:opacity-30"></div>
              </div>
            </div>

            {/* Content Section */}
            <div
              ref={contentRef}
              className={`w-full lg:w-1/2 order-2 lg:order-2 space-y-6 transition-all duration-1000 delay-500 ${
                contentInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
            >
              <div className="transform transition-all duration-500 hover:translate-y-[-2px]">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I'm a passionate aspiring UI/UX Designer and Frontend Web Developer with a love for creating 
                  clean, responsive web interfaces. My journey in tech is driven by curiosity and a 
                  desire to build meaningful digital experiences.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  When I'm not coding or designing, you'll find me exploring new technologies, 
                  contributing to open-source projects, or experimenting with the latest design trends. 
                  I believe great design is not just about how it looks, but how it works.
                </p>
              </div>

              {/* Card Icons */}
              <div
                ref={cardsRef}
                className={`grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 transition-all duration-1000 delay-700 ${
                  cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="text-center p-4 lg:p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
                  <Code className="h-6 w-6 lg:h-8 lg:w-8 text-blue-400 mx-auto mb-3 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="font-semibold text-white mb-2 text-sm lg:text-base">Developer</h3>
                  <p className="text-xs lg:text-sm text-gray-400">Clean, efficient code</p>
                </div>

                <div className="text-center p-4 lg:p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
                  <Palette className="h-6 w-6 lg:h-8 lg:w-8 text-purple-400 mx-auto mb-3 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="font-semibold text-white mb-2 text-sm lg:text-base">Designer</h3>
                  <p className="text-xs lg:text-sm text-gray-400">Beautiful interfaces</p>
                </div>

                <div className="text-center p-4 lg:p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
                  <Zap className="h-6 w-6 lg:h-8 lg:w-8 text-indigo-400 mx-auto mb-3 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="font-semibold text-white mb-2 text-sm lg:text-base">Innovator</h3>
                  <p className="text-xs lg:text-sm text-gray-400">AI-integrated apps</p>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default About;
