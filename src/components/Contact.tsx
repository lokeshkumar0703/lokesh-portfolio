import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-soft border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
              <CardDescription>Fill out the form and I'll get back to you soon</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-2"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-2"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="border-2"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 shadow-glow">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="shadow-soft border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:lokeshkumar93605@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>lokeshkumar93605@gmail.com</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/lokesh-kumar-s0803"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>linkedin.com/in/lokesh-kumar-s0803</span>
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Github className="h-5 w-5" />
                    <span>+91 93605 16987</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Location</h3>
                <p className="text-muted-foreground">
                  1/827, Ayyappan Nagar<br />
                  New Natham Road, Thiruppalai<br />
                  Madurai – 625014<br />
                  Tamil Nadu, India
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-2 bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Professional Objective</h3>
                <p className="text-muted-foreground mb-4">
                  To secure a challenging position in a reputed organization that utilizes my technical,
                  analytical, and problem-solving skills in software development and IT services.
                </p>
                <Button
                  className="bg-accent hover:bg-accent/90 shadow-glow w-full"
                  onClick={() => window.open("/resume.pdf", "_blank")}
                >
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
