
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Download } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Contact = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [contentRef, contentInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const handleEmailClick = () => {
    window.location.href = 'mailto:pratik.joshi012@gmail.com';
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Pratik_Joshi_Resume.pdf';
    link.click();
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div 
            ref={titleRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Work Together
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? I'd love to hear from you. 
              Let's create something amazing together!
            </p>
          </div>

          <div 
            ref={contentRef}
            className={`transition-all duration-1000 delay-300 ${
              contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            {/* Contact Info */}
            <div className="text-center space-y-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Get In Touch
                </h3>
                <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                  I'm always open to discussing new opportunities, creative projects, 
                  or just having a chat about design and technology. Feel free to reach out!
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center border border-blue-700">
                    <Mail className="h-8 w-8 text-blue-400" />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-white mb-2">Email</h4>
                    <p className="text-gray-300">pratik.joshi012@gmail.com</p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-purple-900/50 rounded-full flex items-center justify-center border border-purple-700">
                    <Phone className="h-8 w-8 text-purple-400" />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-white mb-2">Phone</h4>
                    <p className="text-gray-300">+91 98600 26363</p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-indigo-900/50 rounded-full flex items-center justify-center border border-indigo-700">
                    <MapPin className="h-8 w-8 text-indigo-400" />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-white mb-2">Location</h4>
                    <p className="text-gray-300">Nashik, Maharashtra</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={handleEmailClick}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Send Email
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
