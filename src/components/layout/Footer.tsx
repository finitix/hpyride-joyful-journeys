import { Link } from "react-router-dom";
import { Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Logo & Description */}
          <div className="space-y-3 md:space-y-4 text-center md:text-left">
            <Link to="/" className="inline-block">
              <span className="text-xl md:text-2xl font-bold gradient-text">HpyRide</span>
              <span className="text-xl md:text-2xl font-light text-foreground">.Com</span>
            </Link>
            <p className="text-xs md:text-sm text-muted-foreground max-w-xs mx-auto md:mx-0">
              India's All-in-One Mobility Platform for safe, affordable, and joyful travel.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xs md:text-sm font-semibold text-foreground mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 md:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <h3 className="text-xs md:text-sm font-semibold text-foreground mb-3 md:mb-4">Connect With Us</h3>
            <div className="flex space-x-3 md:space-x-4 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-gradient-to-r hover:from-[hsl(258,69%,35%)] hover:via-[hsl(330,81%,60%)] hover:to-[hsl(351,89%,60%)] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={16} className="md:w-[18px] md:h-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-border">
          <div className="relative h-0.5 md:h-1 w-full bg-gradient-to-r from-[hsl(258,69%,35%)] via-[hsl(330,81%,60%)] to-[hsl(351,89%,60%)] rounded-full mb-4 md:mb-6 opacity-50" />
          <p className="text-center text-xs md:text-sm text-muted-foreground">
            © {currentYear} HpyRide.Com — Your journey, our happiness.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
