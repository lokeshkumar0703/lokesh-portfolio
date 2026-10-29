import { Card, CardContent } from "@/components/ui/card";
import { BriefcaseBusiness, GraduationCap, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">Introduction</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed text-justify">
            I'm a software developer focused on full-stack and mobile application development. I work
            with React, React Native, Node.js, Express, and MongoDB, and have experience integrating REST APIs
            and managing application state with Redux. I also explore applied deep learning and computer
            vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          <Card className="shadow-soft hover:shadow-glow transition-all duration-300 border-2">
            <CardContent className="p-8">
              <div className="mb-4">
                <GraduationCap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Education</h3>
              </div>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-semibold text-foreground">MCA (Master of Computer Applications)</h4>
                  <p className="text-muted-foreground">Thiagarajar College of Engineering, Madurai</p>
                  <p className="text-sm text-primary">2024–2026 • GPA: 7.93/10</p>
                </li>
                <li>
                  <h4 className="font-semibold text-foreground">B.Sc. Computer Science</h4>
                  <p className="text-muted-foreground">Thiagarajar College of Arts and Science</p>
                  <p className="text-sm text-primary">2021–2024 • GPA: 8.36/10</p>
                </li>
                <li>
                  <h4 className="font-semibold text-foreground">HSC & SSLC</h4>
                  <p className="text-muted-foreground">St. Michael Matriculation Hr. Sec. School, Madurai</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-soft hover:shadow-glow transition-all duration-300 border-2">
            <CardContent className="p-8">
              <div className="mb-4">
                <BriefcaseBusiness className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Experience</h3>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Software Developer Intern</h4>
                <p className="text-muted-foreground">BSEtec • Madurai, Tamil Nadu</p>
                <p className="text-sm text-primary mb-3">Dec 2025 – Apr 2026</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Built a React Native application with Redux, integrated third-party APIs, and developed
                  responsive screens and navigation flows across device sizes.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft hover:shadow-glow transition-all duration-300 border-2 md:col-span-2 md:w-1/2 md:justify-self-center">
            <CardContent className="p-8">
              <div className="mb-4">
                <Lightbulb className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-4">Areas of Interest</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Software Development</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>MERN Stack Development</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Mobile App Development</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>UI/UX Design</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Data Analytics</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
