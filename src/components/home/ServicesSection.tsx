import { Car, KeyRound, ShoppingCart, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Car,
      title: "Ride Sharing",
      description: "Find or offer rides with trusted users in your community.",
      status: "active",
      badge: "Active Now",
      color: "from-[hsl(258,69%,35%)] to-[hsl(330,81%,60%)]",
    },
    {
      icon: KeyRound,
      title: "Car Rental",
      description: "Rent verified cars hourly or daily for your convenience.",
      status: "coming-soon",
      badge: "Coming Soon",
      color: "from-[hsl(330,81%,60%)] to-[hsl(351,89%,60%)]",
    },
    {
      icon: ShoppingCart,
      title: "Pre-Owned Cars",
      description: "Buy or sell verified used cars easily and safely.",
      status: "coming-soon",
      badge: "Coming Soon",
      color: "from-[hsl(351,89%,60%)] to-[hsl(258,69%,35%)]",
    },
    {
      icon: Users2,
      title: "Driver Pooling",
      description: "Collaborate with long-haul drivers for intercity journeys.",
      status: "coming-soon",
      badge: "Coming Soon",
      color: "from-[hsl(258,69%,35%)] to-[hsl(330,81%,60%)]",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Mobility Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for your daily commute and long journeys, all in one platform.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`relative group bg-card rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up ${
                service.status === "active"
                  ? "shadow-xl hover:shadow-2xl border-2 border-transparent hover:gradient-border"
                  : "shadow-md hover:shadow-lg opacity-75 hover:opacity-100"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Status Badge */}
              <div className="absolute top-6 right-6">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    service.status === "active"
                      ? "bg-gradient-to-r from-[hsl(258,69%,35%)] via-[hsl(330,81%,60%)] to-[hsl(351,89%,60%)] text-white animate-glow"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {service.badge}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-6">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center transform transition-all duration-300 ${
                    service.status === "active"
                      ? `bg-gradient-to-br ${service.color} group-hover:scale-110 group-hover:rotate-6`
                      : "bg-secondary group-hover:scale-105"
                  }`}
                >
                  <service.icon
                    className={`w-8 h-8 ${service.status === "active" ? "text-white" : "text-muted-foreground"}`}
                  />
                </div>
                {service.status === "active" && (
                  <div
                    className={`absolute top-[4.5rem] left-8 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                  />
                )}
              </div>

              {/* Content */}
              <h3
                className={`text-2xl font-semibold mb-3 transition-all duration-300 ${
                  service.status === "active" ? "gradient-text" : "text-foreground group-hover:text-primary"
                }`}
              >
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              {/* CTA Button */}
              {service.status === "active" && (
                <Button variant="gradient" className="w-full">
                  Book or Offer Ride
                </Button>
              )}

              {/* Decorative corner */}
              <div
                className={`absolute bottom-0 right-0 w-32 h-32 rounded-tl-full transition-opacity duration-300 ${
                  service.status === "active"
                    ? "bg-gradient-to-tl from-accent/10 to-transparent opacity-0 group-hover:opacity-100"
                    : "bg-secondary/50 opacity-0 group-hover:opacity-50"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
