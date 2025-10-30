import { Car, KeyRound, ShoppingCart, Users2 } from "lucide-react";
import rideSharingImg from "@/assets/service-ridesharing.jpg";
import rentalImg from "@/assets/service-rental.jpg";
import preOwnedImg from "@/assets/service-preowned.jpg";
import poolingImg from "@/assets/service-pooling.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Car,
      title: "Ride Sharing",
      description: "Find or offer rides with trusted users in your community.",
      status: "coming-soon",
      badge: "Coming Soon",
      color: "from-[hsl(258,69%,35%)] to-[hsl(330,81%,60%)]",
      image: rideSharingImg,
    },
    {
      icon: KeyRound,
      title: "Car Rental",
      description: "Rent verified cars hourly or daily for your convenience.",
      status: "coming-soon",
      badge: "Coming Soon",
      color: "from-[hsl(330,81%,60%)] to-[hsl(351,89%,60%)]",
      image: rentalImg,
    },
    {
      icon: ShoppingCart,
      title: "Pre-Owned Cars",
      description: "Buy or sell verified used cars easily and safely.",
      status: "coming-soon",
      badge: "Coming Soon",
      color: "from-[hsl(351,89%,60%)] to-[hsl(258,69%,35%)]",
      image: preOwnedImg,
    },
    {
      icon: Users2,
      title: "Driver Pooling",
      description: "Collaborate with long-haul drivers for intercity journeys.",
      status: "coming-soon",
      badge: "Coming Soon",
      color: "from-[hsl(258,69%,35%)] to-[hsl(330,81%,60%)]",
      image: poolingImg,
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
              className="relative group bg-card rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground">
                    {service.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.color}`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
