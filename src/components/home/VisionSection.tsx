import { Route, Handshake, Globe } from "lucide-react";
import connectedImg from "@/assets/vision-connected.jpg";
import communityImg from "@/assets/vision-community.jpg";
import sustainableImg from "@/assets/vision-sustainable.jpg";

const VisionSection = () => {
  const visionPoints = [
    {
      icon: Route,
      title: "Connected Rides",
      description: "Smart matching algorithms connect riders and drivers for seamless journeys.",
      image: connectedImg,
    },
    {
      icon: Handshake,
      title: "Community Impact",
      description: "Every ride strengthens our community and supports local initiatives.",
      image: communityImg,
    },
    {
      icon: Globe,
      title: "Sustainable Future",
      description: "Shared mobility reduces carbon footprint for a greener tomorrow.",
      image: sustainableImg,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Vision Statement */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Our Vision — <span className="gradient-text">Driving India Forward</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4">
            At <span className="font-semibold text-primary">HpyRide.Com</span>, we believe mobility should be
            joyful, safe, and accessible for everyone. Our goal is to connect riders and drivers through
            trust, innovation, and empathy.
          </p>
        </div>

        {/* Vision Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {visionPoints.map((point, index) => (
            <div key={point.title} className="group relative">
              {/* Card */}
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={point.image}
                    alt={point.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(258,69%,35%)] via-[hsl(330,81%,60%)] to-[hsl(351,89%,60%)] flex items-center justify-center">
                      <point.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-center mb-2 md:mb-3 text-foreground">
                    {point.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground text-center leading-relaxed">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom gradient line animation */}
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto px-4">
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-accent to-transparent rounded-full opacity-30 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
