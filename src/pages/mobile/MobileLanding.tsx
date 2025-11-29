import { Button } from "@/components/ui/button";
import { Menu, Download, ArrowRight, Car, KeyRound, ShoppingBag, Users2, Shield, Zap, CreditCard, MapPin, CheckCircle, Clock, HeadphonesIcon, UserCheck, Smartphone, Navigation, Wallet, Star, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import rideSharingImg from "@/assets/service-ridesharing.jpg";
import rentalImg from "@/assets/service-rental.jpg";
import preOwnedImg from "@/assets/service-preowned.jpg";
import poolingImg from "@/assets/service-pooling.jpg";
import MobileFooter from "@/components/mobile/MobileFooter";
import BottomNav from "@/components/mobile/BottomNav";

const MobileLanding = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Car,
      title: "Ride Sharing",
      description: "Book or offer rides instantly with safe and verified users.",
      image: rideSharingImg,
      color: "from-[hsl(258,69%,35%)] to-[hsl(330,81%,60%)]",
    },
    {
      icon: KeyRound,
      title: "Rental Cars",
      description: "Hourly, daily, weekly and outstation rentals at the best prices.",
      image: rentalImg,
      color: "from-[hsl(330,81%,60%)] to-[hsl(351,89%,60%)]",
    },
    {
      icon: ShoppingBag,
      title: "Pre-Owned Cars",
      description: "Buy or sell certified pre-loved cars with complete transparency.",
      image: preOwnedImg,
      color: "from-[hsl(351,89%,60%)] to-[hsl(258,69%,35%)]",
    },
    {
      icon: Users2,
      title: "Driver Pool",
      description: "Hire professional drivers or become one for extra income.",
      image: poolingImg,
      color: "from-[hsl(258,69%,35%)] to-[hsl(330,81%,60%)]",
    },
  ];

  const whyChoose = [
    { icon: CreditCard, text: "Transparent pricing" },
    { icon: Zap, text: "Fast matching" },
    { icon: HeadphonesIcon, text: "24×7 support" },
    { icon: UserCheck, text: "Verified users" },
    { icon: Shield, text: "Secure payments" },
    { icon: MapPin, text: "Built for India" },
    { icon: Navigation, text: "Live tracking" },
    { icon: Smartphone, text: "Smart suggestions" },
    { icon: Car, text: "Eco-friendly travel" },
  ];

  const features = [
    { title: "Unified App", description: "One app for all mobility needs." },
    { title: "Instant Booking", description: "Fast & accurate ride matching." },
    { title: "Smart Maps", description: "Advanced routing with live traffic." },
    { title: "Auto-Suggestions", description: "Type anything, instantly get Indian addresses." },
    { title: "Seamless Payments", description: "UPI / Wallet / Cards / Cash." },
    { title: "Driver Mode", description: "Switch anytime, earn by offering rides." },
    { title: "Verified Profiles", description: "Every user verified for safety." },
    { title: "Real-Time Tracking", description: "Track rides live with precision." },
  ];

  const journeySteps = [
    { number: "1", title: "Signup or Login", icon: UserCheck },
    { number: "2", title: "Choose Service", subtitle: "Ride / Rent / Buy / Drive", icon: Smartphone },
    { number: "3", title: "Enter Details", subtitle: "Locations or Requirements", icon: MapPin },
    { number: "4", title: "View Matches", subtitle: "or Vehicles", icon: Car },
    { number: "5", title: "Book / Offer", subtitle: "Chat / Track", icon: CheckCircle },
    { number: "6", title: "Rate & Complete", icon: Star },
  ];

  const testimonials = [
    { text: "Smoothest ride-sharing experience!", author: "Priya M." },
    { text: "Affordable rentals with great support.", author: "Rahul K." },
    { text: "Driver pool helped me hire a driver instantly.", author: "Amit S." },
  ];

  const faqs = [
    {
      question: "What is HPYRIDE?",
      answer: "HPYRIDE is India's unified mobility platform where you can book rides, rent cars, buy/sell pre-owned vehicles, and hire drivers — all in one app.",
    },
    {
      question: "Is it safe?",
      answer: "Yes! All users and drivers are verified, and we provide real-time tracking, secure payments, and 24/7 support for every journey.",
    },
    {
      question: "How do I offer a ride?",
      answer: "Simply switch to Driver Mode in the app, set your route and preferences, and start accepting ride requests from verified users.",
    },
    {
      question: "How do rentals work?",
      answer: "Choose your vehicle, select rental duration (hourly/daily/weekly), book instantly, and pick up from designated locations across India.",
    },
    {
      question: "How do I hire drivers?",
      answer: "Go to Driver Pool, enter your requirements, view available drivers, and book instantly or schedule for later.",
    },
    {
      question: "How do I buy a used car?",
      answer: "Browse verified pre-owned cars in our marketplace, check detailed reports, schedule test drives, and complete secure transactions through the app.",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-50 px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold gradient-text">HpyRide.com</h1>
        <button className="p-2">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Hero Section */}
      <section className="px-6 pt-8 pb-12">
        <div className="space-y-6 text-center">
          <h2 className="text-4xl font-bold leading-tight">
            India's Unified <br />
            <span className="gradient-text">Mobility Platform.</span>
          </h2>
          
          <p className="text-muted-foreground text-xl">
            Ride • Rent • Buy • Drive — all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="space-y-3 pt-4">
            <Button 
              variant="gradient" 
              className="w-full h-12 text-base rounded-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              Download App
            </Button>
            <Button 
              variant="outline" 
              className="w-full h-12 text-base rounded-xl"
              onClick={() => navigate("/mobile/about")}
            >
              Know More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* What is HPYRIDE */}
      <section className="px-6 py-12 bg-secondary/30">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-center">What is HPYRIDE?</h3>
          <p className="text-muted-foreground text-center leading-relaxed">
            HPYRIDE is a single mobility ecosystem where users can book rides, rent cars, buy/sell pre-owned vehicles, hire drivers, or even offer rides — all in one unified app built for India.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center gradient-text">Our Services</h3>
          
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-card border border-border rounded-2xl overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-32">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <div className="absolute bottom-3 left-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <h4 className="text-lg font-bold">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose HPYRIDE */}
      <section className="px-6 py-12 bg-secondary/30">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center gradient-text">Why Choose HPYRIDE?</h3>
          
          <div className="grid grid-cols-2 gap-3">
            {whyChoose.map((item, index) => (
              <div
                key={item.text}
                className="bg-card border border-border rounded-xl p-4 flex flex-col items-center text-center gap-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="px-6 py-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center gradient-text">Key Features</h3>
          
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card border border-border rounded-xl p-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <h4 className="font-bold text-foreground">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Journey */}
      <section className="px-6 py-12 bg-secondary/30">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center gradient-text">User Journey</h3>
          
          <div className="relative space-y-4">
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />
            
            {journeySteps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex gap-4 items-start animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1 bg-card border border-border rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-primary">Step {step.number}</span>
                  </div>
                  <h4 className="font-bold">{step.title}</h4>
                  {step.subtitle && (
                    <p className="text-sm text-muted-foreground">{step.subtitle}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center gradient-text">What Users Say</h3>
          
          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-5 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Quote className="w-8 h-8 text-primary/40 mb-2" />
                <p className="text-foreground italic mb-3">{testimonial.text}</p>
                <p className="text-sm text-muted-foreground font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-12 bg-secondary/30">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center gradient-text">Frequently Asked Questions</h3>
          
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-4 py-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <MobileFooter />

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default MobileLanding;
