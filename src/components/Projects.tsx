// src/components/Projects.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { prototype } from "events";

const Projects = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const projects = [
    {
      title: "COTS - Content Optimization through Thumbnail Selection",
      image: "/cots.jpg",
      description: "A multimodal AI video recommendation framework combining CNN-powered thumbnail analysis with NLP metadata processing. Evaluates thumbnail-metadata consistency, detects clickbait, and uses multimodal embeddings with a vector database to rank videos by relevance and authenticity.",
      tags: ["Multimodal AI", "CNN", "NLP", "Vector DB", "Embeddings", "Python"],
      // Add liveUrl, githubUrl, or image if your component uses them
      category: "AI / ML"
    },
    {
      title: "CultivAI",
      description:
        "CultivAI is an AI-based precision farming platform designed to help farmers make data-driven crop management decisions. It analyzes real-time and historical weather data to predict the next 15 days of weather, offering personalized recommendations on crop selection, planting schedules, irrigation, and soil management. ",
      image: "https://plus.unsplash.com/premium_photo-1664476493417-2c1fd048a638?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=869",
      tags: ["React", "AI Integration", "Data Visualization", "TypeScript"],
      github: "https://github.com/jpratik04/CultivAI.git",
      live: "#",
      prototype: "https://docs.google.com/document/d/1_xazAnz7JOimd4cr-vfCd65aCfPOYUpsS2UcNnaOmLA/edit?usp=sharing"
    },
    {
      title: "TradeWise – Skill Exchange, Simplified",
      description:
        "A peer-to-peer skill swapping platform that enables individuals to trade skills within a trusted community. Whether you're a Photoshop expert or learning Excel, TradeWise helps you find the right match — and trade your time and talent, no money involved.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "Community Platform", "Peer-to-Peer"],
      github: "https://github.com/jpratik04/tradewise",
      live: "#",
      prototype: "#",
    },
    {
      title: "Project Raseed",
      description:
        "Project Raseed is an AI-powered smart wallet app that simplifies personal finance management through intelligent receipt analysis and real-time spending insights. It leverages Google AI technologies like Gemini and Vertex AI Agent Builder to process multimodal data; including images, text, and transactions and generate meaningful financial insights for users.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tags: ["React", "AI/ML", "TailwindCSS", "Node.js"],
      github: "https://github.com/jpratik04/project-raseed",
      live: "#",
      prototype: "https://www.figma.com/design/JiN0GweDrxzH0WBfLbI500/Project-Raseed?node-id=0-1&t=3469p86q0vb2Ur3J-1",
    },
    {
      title: "Portfolio Website",
      description:
        "My portfolio website is a reflection of my journey as a UI/UX Designer and Frontend Web Developer, built to showcase my skills, design philosophy, and projects in a clean, minimal, and interactive way. Designed and developed from scratch, the site highlights my featured projects, skillset, and professional journey; all wrapped in a responsive, modern interface that adapts beautifully across devices.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      tags: ["React", "TailwindCSS", "Framer Motion", "Responsive Design"],
      github: "https://github.com/jpratik04/Pratik-Joshi-Portfolio.git",
      live: "#",
      prototype: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <div
            ref={titleRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A selection of my recent work, showcasing my passion for creating innovative solutions and
              beautiful user experiences.
            </p>
          </div>

          {/* Project Cards */}
          <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch auto-rows-fr">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`h-full flex flex-col group hover:shadow-2xl transition-all duration-300 shadow-lg bg-gray-900/50 backdrop-blur-sm border border-gray-700 ${
                  projectsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                style={{
                  transitionDelay: projectsInView ? `${index * 120}ms` : "0ms",
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300" />
                </div>

                {/* Header + Description */}
                <CardHeader className="pb-0">
                  <CardTitle className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                {/* Tags + Buttons */}
                <CardContent className="pt-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs font-medium rounded-full border border-blue-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3 mt-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button
                        size="sm"
                        className="w-full bg-transparent text-gray-300 border border-gray-700 hover:bg-gray-800 hover:text-white"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </a>

                    {/* Prototype button for projects that have one */}
                    {project.prototype ? (
                      <a href={project.prototype} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button
                          size="sm"
                          className="w-full bg-transparent text-purple-300 border border-purple-700 hover:bg-purple-800/20 hover:text-white"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Prototype
                        </Button>
                      </a>
                    ) : null}

                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
