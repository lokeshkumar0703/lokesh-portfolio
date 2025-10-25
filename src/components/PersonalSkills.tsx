import { Card, CardContent } from "@/components/ui/card";

const personalSkills = [
  "Problem Solver",
  "Critical Thinker",
  "Logical Thinking",
  "Team Management",
  "Adaptable",
  "Quick Learner",
];

const PersonalSkills = () => {
  return (
    <section className="py-12 px-6 bg-card/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <p className="text-accent font-semibold mb-2">Soft Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold">Personal Strengths</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {personalSkills.map((skill, index) => (
            <Card
              key={index}
              className="shadow-soft border-2 hover:shadow-glow hover:border-primary transition-all duration-300"
            >
              <CardContent className="p-4 text-center">
                <p className="font-semibold text-foreground">{skill}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalSkills;
