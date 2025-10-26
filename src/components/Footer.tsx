import { Mail, Linkedin, Phone, MapPin, Instagram, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Me</h3>
            <div className="space-y-3">
              <a
                href="mailto:lokeshkumar93605@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="break-all">lokeshkumar93605@gmail.com</span>
              </a>
              <a
                href="tel:+919360516987"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 93605 16987</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Madurai, Tamil Nadu</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href="https://linkedin.com/in/lokesh-kumar-s0803"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Linkedin className="h-4 w-4 flex-shrink-0" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/itslokesh15?igsh=aHZ2dTczeXI2NGw="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Instagram className="h-4 w-4 flex-shrink-0" />
                <span>Instagram</span>
              </a>
              <a
                href="https://t.me/Lokesh003"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Send className="h-4 w-4 flex-shrink-0" />
                <span>Telegram</span>
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <p className="text-muted-foreground text-sm">
              MCA student at Thiagarajar College of Engineering, passionate about full-stack development and creating innovative solutions.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Lokesh Kumar S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
