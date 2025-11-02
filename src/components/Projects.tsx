import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import fuelItImg from "@/assets/fuel-it.jpg";
import nikeImg from "@/assets/nike-animation.jpg";
import portfolioImg from "@/assets/portfolio-website.jpg";
import lensmanImg from "@/assets/lensman.jpg";

const projects = [
  {
    title: "Fuel-It: One-Stop Fueling Application",
    description:
      "Multi-platform fuel delivery and management system with vendor and admin modules for managing orders, inventory, and delivery schedules.",
    tech: ["Flutter", "Firebase", "Real-time Tracking"],
    image: fuelItImg,
    link: "https://github.com/Nploki",
    linkType: "github",
  },
  {
    title: "Lensman",
    description:
      "Web-based platform connecting clients with professional photographers. Features portfolio browsing, booking management, and separate dashboards for clients, photographers, and admins.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: lensmanImg,
    link: "https://github.com/lokeshkumar0703/Lensman",
    linkType: "github",
  },
  {
    title: "Nike Spinning Animation",
    description:
      "Professional logo animation design using Figma with smooth transitions and visual effects. Showcases creative design and animation skills.",
    tech: ["Figma", "Animation", "UI Design"],
    image: nikeImg,
    link: "https://www.behance.net/gallery/206886513/Nike-Spinning-Animation-in-Figma/modules/1174753777",
    linkType: "behance",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website showcasing projects, skills, and achievements with beautiful animations and clean design.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    image: portfolioImg,
    link: "https://github.com/lokeshkumar0703/lokesh-portfolio",
    linkType: "github",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">My Work</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="shadow-soft hover:shadow-glow transition-all duration-300 border-2 group overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base text-justify">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group/btn"
                  asChild
                >
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    {project.linkType === "github" ? (
                      <>
                        <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        View on GitHub
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        View on Behance
                      </>
                    )}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
