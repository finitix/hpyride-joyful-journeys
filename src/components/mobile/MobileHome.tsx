import { Button } from "@/components/ui/button";
import { Car, KeyRound, Users2, MapPin, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import rideSharingImg from "@/assets/service-ridesharing.jpg";
import rentalImg from "@/assets/service-rental.jpg";
import poolingImg from "@/assets/service-pooling.jpg";

const MobileHome = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Car,
      title: "Ride Sharing",
      subtitle: "Quick daily commute",
      description: "Find or offer rides instantly",
      image: rideSharingImg,
      color: "from-[hsl(258,69%,35%)] to-[hsl(330,81%,60%)]",
      path: "/mobile/ride",
    },
    {
      icon: KeyRound,
      title: "Rent a Car",
      subtitle: "Self-drive freedom",
      description: "Choose from verified vehicles",
      image: rentalImg,
      color: "from-[hsl(330,81%,60%)] to-[hsl(351,89%,60%)]",
      path: "/mobile/rent",
    },
    {
      icon: Users2,
      title: "Drive Together",
      subtitle: "Long distance carpool",
      description: "Share intercity journeys",
      image: poolingImg,
      color: "from-[hsl(351,89%,60%)] to-[hsl(258,69%,35%)]",
      path: "/mobile/pool",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-[hsl(258,69%,35%)] via-[hsl(330,81%,60%)] to-[hsl(351,89%,60%)] text-white px-6 pt-12 pb-24 rounded-b-[2rem]">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">HpyRide</h1>
          <p className="text-white/90 text-lg">
            India's All-in-One Mobility Platform
          </p>
          
          {/* Search Bar Placeholder */}
          <div className="mt-6 bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3">
            <MapPin className="w-5 h-5 text-white/80" />
            <input
              type="text"
              placeholder="Where do you want to go?"
              className="flex-1 bg-transparent text-white placeholder:text-white/70 outline-none"
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="px-4 -mt-16 space-y-4 pb-6">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative h-48">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Icon Badge */}
              <div className="absolute top-4 left-4">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Coming Soon Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-white/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-medium">
                  Coming Soon
                </span>
              </div>
            </div>

            <div className="p-5 space-y-3">
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-accent font-medium">
                  {service.subtitle}
                </p>
              </div>
              
              <p className="text-muted-foreground">
                {service.description}
              </p>

              <Button
                onClick={() => navigate(service.path)}
                variant="gradient-outline"
                className="w-full rounded-xl h-11"
              >
                Explore
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="px-6 py-8 bg-secondary/30">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold gradient-text">10K+</div>
            <div className="text-xs text-muted-foreground mt-1">
              Users Waiting
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold gradient-text">4</div>
            <div className="text-xs text-muted-foreground mt-1">
              Cities Ready
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold gradient-text">100%</div>
            <div className="text-xs text-muted-foreground mt-1">Safe Rides</div>
          </div>
        </div>
      </div>

      {/* Floating Book Now Button */}
      <Button
        onClick={() => navigate("/mobile/book")}
        variant="gradient"
        className="fixed bottom-20 right-4 h-14 px-6 rounded-full shadow-2xl z-40"
      >
        Book Now
      </Button>
    </div>
  );
};

export default MobileHome;
