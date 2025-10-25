import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import profileImg from "@/assets/lokeshkumarphoto.jpg";

const Hero = () => {
  const handleResumeDownload = () => {
    // You can replace this with your actual resume file
    window.open("/resume.pdf", "_blank");
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center animate-in fade-in duration-700">
        <div className="mb-8 inline-block group">
          <img
            src={profileImg}
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover shadow-glow border-4 border-primary/20 transition-all duration-700 ease-out group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(0,150,255,0.6)] group-hover:border-primary/40 animate-in zoom-in"
            style={{ animationDuration: '1000ms' }}
          />
        </div>

        <div className="mb-4">
          <p className="text-lg md:text-xl text-muted-foreground mb-2">
            Hi, I'm <span className="text-primary font-semibold">Lokesh Kumar S</span> 👋
          </p>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          MCA Student &
          <br />
          <span className="text-gradient">Aspiring Full-Stack Developer</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Currently pursuing MCA at Thiagarajar College of Engineering, Madurai. Passionate about
          problem-solving, software development, and creating innovative solutions with modern technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 shadow-glow text-lg px-8"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
          <Button
            onClick={handleResumeDownload}
            size="lg"
            variant="outline"
            className="text-lg px-8 border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent"
          >
            <Download className="mr-2 h-5 w-5" />
            My Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
