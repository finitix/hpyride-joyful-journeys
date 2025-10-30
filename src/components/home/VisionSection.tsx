import { Route, Handshake, Globe } from "lucide-react";

const VisionSection = () => {
  const visionPoints = [
    {
      icon: Route,
      title: "Connected Rides",
      description: "Smart matching algorithms connect riders and drivers for seamless journeys.",
    },
    {
      icon: Handshake,
      title: "Community Impact",
      description: "Every ride strengthens our community and supports local initiatives.",
    },
    {
      icon: Globe,
      title: "Sustainable Future",
      description: "Shared mobility reduces carbon footprint for a greener tomorrow.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Vision Statement */}
        <div className="text-center mb-16 animate-fade-in-up max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our Vision — <span className="gradient-text">Driving India Forward</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            At <span className="font-semibold text-primary">HpyRide</span>, we believe mobility should be
            joyful, safe, and accessible for everyone. Our goal is to connect riders and drivers through
            trust, innovation, and empathy.
          </p>
        </div>

        {/* Vision Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {visionPoints.map((point, index) => (
            <div
              key={point.title}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Card */}
              <div className="relative bg-card rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(258,69%,35%)] via-[hsl(330,81%,60%)] to-[hsl(351,89%,60%)] flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <point.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(258,69%,35%)] via-[hsl(330,81%,60%)] to-[hsl(351,89%,60%)] blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-center mb-3 text-foreground group-hover:gradient-text transition-all duration-300">
                  {point.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">{point.description}</p>

                {/* Connecting line (visible on desktop between cards) */}
                {index < visionPoints.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom gradient line animation */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-accent to-transparent rounded-full opacity-30 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
