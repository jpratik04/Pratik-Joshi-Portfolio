
import { Badge } from "@/components/ui/badge";
import { useInView } from "@/hooks/useInView";

const Skills = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [cardsRef, cardsInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "TailwindCSS", "Next.js", "Vite"],
      color: "bg-blue-900/50 text-blue-300 border-blue-700"
    },
    {
      title: "Design Tools",
      skills: ["Figma", "Adobe XD", "Framer", "Photoshop", "Illustrator"],
      color: "bg-purple-900/50 text-purple-300 border-purple-700"
    },
    {
      title: "Backend & Tools",
      skills: ["Node.js", "Git", "GitHub", "Responsive Design", "RESTful APIs", "AI Integration"],
      color: "bg-indigo-900/50 text-indigo-300 border-indigo-700"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-800 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={titleRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, responsive web applications and beautiful user experiences.
            </p>
          </div>

          <div 
            ref={cardsRef}
            className="grid md:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-700 hover:scale-105 transform border border-gray-700 ${
                  cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ 
                  transitionDelay: cardsInView ? `${index * 200}ms` : '0ms'
                }}
              >
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      className={`${category.color} hover:scale-105 transition-transform px-3 py-1 text-sm font-medium`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
