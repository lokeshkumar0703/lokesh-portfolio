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
          <p className="text-lg text-muted-foreground leading-relaxed text-justify">
            I'm a dedicated MCA student at Thiagarajar College of Engineering, Madurai, with a strong
            foundation in computer science and software development. My journey began with a B.Sc. in
            Computer Science where I achieved 8.36 CGPA, and I'm currently maintaining a 7.92 CGPA in my
            Master's program. I'm passionate about utilizing my technical, analytical, and problem-solving
            skills to create innovative solutions while continuously learning and growing professionally.
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
                  <p className="text-sm text-primary">Anna University • 2026 • CGPA: 7.92</p>
                </li>
                <li>
                  <h4 className="font-semibold text-foreground">B.Sc. Computer Science</h4>
                  <p className="text-muted-foreground">Thiagarajar College of Arts and Science</p>
                  <p className="text-sm text-primary">Madurai Kamaraj University • 2024 • CGPA: 8.36</p>
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

        <div className="text-center mb-12">
          <p className="text-accent font-semibold mb-2">Beyond Work</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Hobbies & Interests</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <Card className="shadow-soft border-2 hover:shadow-glow hover:border-primary transition-all duration-300">
            <CardContent className="p-6 text-center">
              <p className="font-semibold text-foreground">Playing Cricket</p>
            </CardContent>
          </Card>
          <Card className="shadow-soft border-2 hover:shadow-glow hover:border-primary transition-all duration-300">
            <CardContent className="p-6 text-center">
              <p className="font-semibold text-foreground">Listening to Music</p>
            </CardContent>
          </Card>
          <Card className="shadow-soft border-2 hover:shadow-glow hover:border-primary transition-all duration-300">
            <CardContent className="p-6 text-center">
              <p className="font-semibold text-foreground">Watching Movies</p>
            </CardContent>
          </Card>
          <Card className="shadow-soft border-2 hover:shadow-glow hover:border-primary transition-all duration-300">
            <CardContent className="p-6 text-center">
              <p className="font-semibold text-foreground">Traveling</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
