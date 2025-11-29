import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Linkedin, Instagram, Youtube } from "lucide-react";
import { useIsMobile } from "@/hooks/use-is-mobile";

const Contact = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  useEffect(() => {
    if (isMobile) {
      navigate("/mobile");
    }
  }, [isMobile, navigate]);

  if (isMobile) {
    return null;
  }
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🚀",
      description: "We'll get back to you within 24 hours. Thank you for reaching out!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "#", username: "@hpyride.com" },
    { icon: Instagram, label: "Instagram", href: "#", username: "@hpyride.com" },
    { icon: Youtube, label: "YouTube", href: "#", username: "@hpyride.com" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Let's Get in Touch <span className="gradient-text">🚗</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We'd love to hear from you. Reach out for partnerships, feedback, or queries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-xl">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="rounded-xl resize-none"
                    />
                  </div>

                  <Button type="submit" variant="gradient" size="lg" className="w-full">
                    <MessageSquare className="mr-2 w-5 h-5" />
                    Send Message
                  </Button>

                  <p className="text-sm text-center text-muted-foreground mt-4">
                    Response time: within 24 hours ⚡
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {/* Email */}
              <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[hsl(258,69%,35%)] to-[hsl(330,81%,60%)] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Email Us</h3>
                    <p className="text-muted-foreground mb-2">
                      Drop us a line anytime, we're here to help
                    </p>
                    <a
                      href="mailto:support@hpyride.com"
                      className="text-primary hover:gradient-text font-medium transition-all duration-200"
                    >
                      support@hpyride.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Connect on Social Media</h3>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-gradient-to-r hover:from-[hsl(258,69%,35%)] hover:via-[hsl(330,81%,60%)] hover:to-[hsl(351,89%,60%)] hover:text-white transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white group-hover:bg-white/20 flex items-center justify-center transition-colors">
                        <social.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <div className="font-medium">{social.label}</div>
                        <div className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors">
                          {social.username}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-br from-[hsl(258,69%,35%)] via-[hsl(330,81%,60%)] to-[hsl(351,89%,60%)] rounded-3xl p-8 text-white shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Support Hours</h3>
                <div className="space-y-2 text-white/90">
                  <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p>Saturday: 10:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm text-white/80">All times are in Indian Standard Time (IST)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
