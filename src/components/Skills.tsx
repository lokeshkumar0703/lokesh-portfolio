import { Card, CardContent } from "@/components/ui/card";

const skillsData = [
  { name: "Python", level: 85 },
  { name: "Java", level: 80 },
  { name: "C Programming", level: 75 },
  { name: "SQL", level: 80 },
  { name: "HTML & CSS", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "MERN Stack", level: 70 },
  { name: "Flutter", level: 75 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">What I Do</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillsData.map((skill) => (
            <Card key={skill.name} className="shadow-soft border-2">
              <CardContent className="p-6">
                <div className="flex justify-between mb-3">
                  <span className="font-semibold text-foreground">{skill.name}</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Python",
              "Java",
              "C",
              "SQL",
              "HTML",
              "CSS",
              "JavaScript",
              "MERN Stack",
              "Flutter",
              "Firebase",
              "Figma",
              "Postman",
              "VS Code",
              "Git",
            ].map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-card border-2 border-border rounded-full font-medium hover:border-primary hover:shadow-soft transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
