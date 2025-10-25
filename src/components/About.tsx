import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">Introduction</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            I'm a passionate Full-Stack Developer with expertise in building modern web applications.
            I love transforming ideas into elegant solutions using cutting-edge technologies.
            With a strong foundation in both frontend and backend development, I create
            seamless digital experiences that users love.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="shadow-soft hover:shadow-glow transition-all duration-300 border-2">
            <CardContent className="p-8">
              <div className="mb-4">
                <GraduationCap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Education</h3>
              </div>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-semibold text-foreground">Bachelor's in Computer Science</h4>
                  <p className="text-muted-foreground">University Name, Year</p>
                </li>
                <li>
                  <h4 className="font-semibold text-foreground">Certifications</h4>
                  <p className="text-muted-foreground">Various online courses & certifications</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-soft hover:shadow-glow transition-all duration-300 border-2">
            <CardContent className="p-8">
              <div className="mb-4">
                <Lightbulb className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-4">Areas of Interest</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Full-Stack Development</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>UI/UX Design</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Cloud Architecture</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Open Source Contributions</span>
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
