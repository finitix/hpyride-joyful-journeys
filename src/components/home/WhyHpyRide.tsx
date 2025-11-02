import { Shield, DollarSign, Heart } from "lucide-react";

const WhyHpyRide = () => {
  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Real-time GPS tracking, SOS button, and verified drivers ensure your peace of mind every journey.",
      color: "from-[hsl(258,69%,35%)] to-[hsl(258,69%,45%)]",
    },
    {
      icon: DollarSign,
      title: "Affordable Rides",
      description: "Pay less, share more. Our community-driven model makes every ride economical and efficient.",
      color: "from-[hsl(330,81%,60%)] to-[hsl(330,81%,70%)]",
    },
    {
      icon: Heart,
      title: "Made for India",
      description: "Designed for every city, every route, every Indian. Built with local insights and care.",
      color: "from-[hsl(351,89%,60%)] to-[hsl(351,89%,70%)]",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Why Choose <span className="gradient-text">HpyRide.Com?</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Built for trust, designed for joy, and made for every Indian traveler.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon with gradient background */}
              <div className="relative mb-6">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div
                  className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                />
              </div>

              {/* Content */}
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-foreground group-hover:gradient-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{feature.description}</p>

              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHpyRide;
