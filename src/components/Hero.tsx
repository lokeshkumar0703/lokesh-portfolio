import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import profileImg from "@/assets/lokesh-profile.jpg";

const Hero = () => {
  const handleResumeDownload = () => {
    window.open(`${import.meta.env.BASE_URL}resume.pdf`, "_blank", "noopener,noreferrer");
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
        <div className="mb-8 inline-block">
          <img
            src={profileImg}
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover object-center shadow-glow border-4 border-primary/20"
            style={{ objectPosition: 'center center' }}
          />
        </div>

        <div className="mb-4">
          <p className="text-lg md:text-xl text-muted-foreground mb-2">
            Hi, I'm <span className="text-primary font-semibold">Lokesh Kumar S</span> 👋
          </p>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Software Developer &
          <br />
          <span className="text-gradient">Full-Stack and Mobile Applications</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          I build responsive web and mobile applications with React, React Native, Node.js, and MongoDB.
          I also work on applied deep learning and computer vision projects.
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
