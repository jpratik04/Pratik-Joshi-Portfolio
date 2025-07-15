
import { Linkedin, Mail, Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:pratik.joshi012@gmail.com';
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/pratik-joshi-699301256/', '_blank');
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Pratik_Joshi_Resume.pdf';
    link.click();
  };

  const navigationItems = [
    { name: 'About', id: 'about' },
    { name: 'Education', id: 'education' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Navigation Menu */}
      <div className="absolute top-6 right-6 z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-full border-gray-600 bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800 text-gray-300 hover:text-white transition-all duration-300"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        
        {isMenuOpen && (
          <div className="absolute top-14 right-0 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg p-4 min-w-[180px] shadow-xl">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Reduced brightness background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs - reduced opacity */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/10 via-purple-500/15 to-indigo-500/10 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-purple-500/12 via-pink-500/18 to-blue-500/12 rounded-full blur-2xl animate-[float_12s_ease-in-out_infinite_2s]"></div>
        <div className="absolute bottom-32 left-32 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/8 via-blue-500/12 to-purple-500/8 rounded-full blur-3xl animate-[float_15s_ease-in-out_infinite_4s]"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-cyan-500/10 via-blue-500/15 to-indigo-500/10 rounded-full blur-2xl animate-[float_10s_ease-in-out_infinite_6s]"></div>
        
        {/* Medium floating circles - reduced opacity */}
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-gradient-to-br from-blue-400/8 via-purple-400/12 to-transparent rounded-full blur-xl animate-[float_6s_ease-in-out_infinite_1s]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-br from-purple-400/10 via-pink-400/15 to-transparent rounded-full blur-lg animate-[float_9s_ease-in-out_infinite_3s]"></div>
        <div className="absolute top-1/2 right-1/6 w-32 h-32 bg-gradient-to-br from-cyan-400/12 via-blue-400/18 to-transparent rounded-full blur-lg animate-[float_7s_ease-in-out_infinite_2s]"></div>
        
        {/* Small floating dots - reduced opacity */}
        <div className="absolute top-1/4 left-1/6 w-6 h-6 bg-blue-400/30 rounded-full blur-sm animate-[float_5s_ease-in-out_infinite_1s]"></div>
        <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-purple-400/35 rounded-full blur-sm animate-[float_7s_ease-in-out_infinite_3s]"></div>
        <div className="absolute bottom-1/4 left-1/2 w-8 h-8 bg-indigo-400/25 rounded-full blur-sm animate-[float_6s_ease-in-out_infinite_2s]"></div>
        <div className="absolute top-3/4 left-1/3 w-5 h-5 bg-cyan-400/32 rounded-full blur-sm animate-[float_8s_ease-in-out_infinite_4s]"></div>
        <div className="absolute top-1/6 right-1/2 w-3 h-3 bg-pink-400/38 rounded-full blur-sm animate-[float_4s_ease-in-out_infinite]"></div>
        
        {/* Subtle gradient overlays - reduced opacity */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/5 via-purple-900/8 to-indigo-900/5"></div>
        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-gray-900/15 via-gray-900/5 to-transparent"></div>
        <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-gray-900/10 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Hi, I'm Pratik
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium">
              Aspiring UI/UX Designer & Frontend Developer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Crafting beautiful, responsive web experiences with a passion for clean design and innovative technology. 
              Currently building AI-integrated applications that make a difference.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleLinkedInClick}
              className="rounded-full hover:scale-110 transition-transform border-blue-600 bg-blue-600/10 hover:bg-blue-600 hover:border-blue-500 text-blue-400 hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleEmailClick}
              className="rounded-full hover:scale-110 transition-transform border-blue-600 bg-blue-600/10 hover:bg-blue-600 hover:border-blue-500 text-blue-400 hover:text-white"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Explore My Work
            </Button>
            <Button 
              onClick={handleDownloadResume}
              variant="outline"
              className="border-blue-600 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
