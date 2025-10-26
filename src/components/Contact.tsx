import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Phone } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS credentials
      const serviceId = 'service_78wpo3o';
      const templateId = 'template_zi9jide';
      const autoReplyTemplateId = 'template_bv6uu37';
      const publicKey = 'xsLJm394b3671GULf';

      // Send email to you
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      // Try to send auto-reply, but don't fail if it doesn't work
      try {
        await emailjs.send(
          serviceId,
          autoReplyTemplateId,
          {
            to_name: formData.name,
            reply_to: formData.email,
            message: formData.message,
          },
          publicKey
        );
      } catch (autoReplyError) {
        console.log('Auto-reply failed, but main email sent:', autoReplyError);
      }

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Email send error:', error);
      toast.error("Failed to send message. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-card/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-primary font-semibold mb-2">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Contact Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <Card className="shadow-soft border-2">
          <CardHeader className="px-4 sm:px-6">
            <CardTitle className="text-xl sm:text-2xl">Send a Message</CardTitle>
            <CardDescription className="text-sm sm:text-base">Fill out the form and I'll get back to you soon</CardDescription>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
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
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 shadow-glow" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
      </div>
    </section>
  );
};

export default Contact;
