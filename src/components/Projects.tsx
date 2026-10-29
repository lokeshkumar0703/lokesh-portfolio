import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import fuelItImg from "@/assets/fuel-it-delivery.png";
import nikeImg from "@/assets/nike-product.png";
import portfolioImg from "@/assets/portfolio-live-site.png";
import lensmanImg from "@/assets/lensman-camera.jpg";
import beeBasketImg from "@/assets/the-bee-basket.png";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
  linkType?: "github" | "behance";
  status?: string;
  centerLast?: boolean;
};

const projects: Project[] = [
  {
    title: "Fuel-It: One-Stop Fueling Application",
    description:
      "A fuel delivery and management app for placing orders and helping vendors manage inventory and delivery schedules.",
    tech: ["Flutter", "Firebase", "Real-time Tracking"],
    image: fuelItImg,
    link: "https://github.com/Nploki",
    linkType: "github",
  },
  {
    title: "Lensman",
    description:
      "A photographer booking platform where clients can explore portfolios, manage profiles, and arrange photography sessions.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: lensmanImg,
    link: "https://github.com/lokeshkumar0703/Lensman",
    linkType: "github",
  },
  {
    title: "Nike Spinning Animation",
    description:
      "A Nike inspired spinning logo animation made in Figma, exploring motion, timing, and visual effects.",
    tech: ["Figma", "Animation", "UI Design"],
    image: nikeImg,
    link: "https://www.behance.net/gallery/206886513/Nike-Spinning-Animation-in-Figma/modules/1174753777",
    linkType: "behance",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio that brings projects, skills, and achievements together in one place.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    image: portfolioImg,
    link: "https://github.com/lokeshkumar0703/lokesh-portfolio",
    linkType: "github",
  },
  {
    title: "TheBeeBasket",
    description:
      "An online honey shop where customers can explore natural honey, forest honey, and honeycomb, choose a pack size, and order for delivery.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Express", "MongoDB", "Docker"],
    image: beeBasketImg,
    status: "In progress",
    centerLast: true,
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

        <div className="grid items-stretch gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card
              key={project.title}
              className={`group flex h-full flex-col overflow-hidden border-2 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 ${project.centerLast ? "md:col-span-2 md:w-3/4 md:justify-self-center" : ""}`}
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                {project.status && (
                  <span className="absolute left-4 top-4 rounded-full bg-background/95 px-3 py-1 text-xs font-semibold text-foreground shadow-sm">
                    {project.status}
                  </span>
                )}
              </div>
              <CardHeader className="flex-1 space-y-3">
                <CardTitle className="text-xl leading-snug transition-colors group-hover:text-primary">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 text-left text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-0">
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full font-semibold"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on {project.linkType === "github" ? "GitHub" : "Behance"}
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
