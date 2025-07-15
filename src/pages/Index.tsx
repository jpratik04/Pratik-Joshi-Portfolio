
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import KeyAchievements from "@/components/KeyAchievements";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <KeyAchievements />
      <Contact />
    </div>
  );
};

export default Index;
