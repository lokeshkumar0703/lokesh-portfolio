import { Card, CardContent } from "@/components/ui/card";
import { Award, Trophy } from "lucide-react";

const certifications = [
  { name: "SQL Basics", provider: "SoloLearn" },
  { name: "C Programming Basics", provider: "Great Learning" },
  { name: "Python for Beginners", provider: "Microsoft" },
  { name: "Data Analytics with Python", provider: "NPTEL (IIT Roorkee)" },
  { name: "Front End Web Developer", provider: "Infosys Springboard" },
];

const achievements = [
  {
    title: "First Prize - Logo and Web Designing",
    event: "Sizzlers 2k25, MCA Event at Fatima College",
    icon: Trophy,
  },
  {
    title: "MCA All India Meet 2025",
    event: "Participated in technical and non-technical events at NIT Trichy",
    icon: Award,
  },
];

const Achievements = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <div className="mb-8">
              <p className="text-primary font-semibold mb-2">Credentials</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="shadow-soft border-2 hover:shadow-glow transition-all">
                  <CardContent className="p-4 flex items-start gap-3">
                    <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert.provider}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="mb-8">
              <p className="text-accent font-semibold mb-2">Recognition</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="shadow-soft border-2 hover:shadow-glow transition-all bg-gradient-to-br from-primary/5 to-accent/5"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <achievement.icon className="h-8 w-8 text-accent flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-lg text-foreground mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-muted-foreground">{achievement.event}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Hobbies */}
            <div className="mt-8">
              <Card className="shadow-soft border-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Hobbies & Interests</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      <span>Speed Cubing (solving Rubik's Cube under 1.20 min)</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      <span>Playing Cricket & Football</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      <span>Watching Movies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
