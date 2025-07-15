import { Trophy, Award, Star, Medal } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const KeyAchievements = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [achievementsRef, achievementsInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const achievements = [
    {
      title: "Reliance Foundation Undergraduate Scholar",
      description: "Awarded a scholarship worth INR 2,00,000 for academic excellence.",
      icon: Trophy,
      category: "Scholarship"
    },
    {
      title: "Secretary | MIBCS KKWIEER",
      description: "Led and organized numerous club activities and tech events to foster collaboration among members.",
      icon: Star,
      category: "Leadership"
    },
    {
      title: "2nd Rank at Inspire Maharashtra 2024",
      description: "Secured second position at PREC Loni",
      icon: Medal,
      category: "Competition"
    },
    {
      title: "Top Performer at Tech Pragyan 2025",
      description: "Outstanding performance at Amrutvahini College of Engineering, Sangamner",
      icon: Award,
      category: "Competition"
    },
    {
      title: "Finalist at Dipex-2025",
      description: "Reached finals at COEP, Pune",
      icon: Award,
      category: "Competition"
    },
    {
      title: "Finalist at Odoo x MSU Footprints",
      description: "Finalist at MSU, Vadodara",
      icon: Award,
      category: "Competition"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={titleRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Key Achievements
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Recognition and accomplishments that reflect my dedication to excellence and leadership in technology.
            </p>
          </div>

          <div 
            ref={achievementsRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className={`group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-700 hover:scale-105 transform border border-gray-700 ${
                  achievementsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ 
                  transitionDelay: achievementsInView ? `${index * 100}ms` : '0ms'
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mr-4">
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide">
                    {achievement.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;
