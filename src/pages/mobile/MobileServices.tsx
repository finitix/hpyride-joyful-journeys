import { ArrowLeft, Car, KeyRound, ShoppingBag, Users2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import rideSharingImg from "@/assets/service-ridesharing.jpg";
import rentalImg from "@/assets/service-rental.jpg";
import preOwnedImg from "@/assets/service-preowned.jpg";
import poolingImg from "@/assets/service-pooling.jpg";
import MobileFooter from "@/components/mobile/MobileFooter";
import BottomNav from "@/components/mobile/BottomNav";

const MobileServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Car,
      title: "Ride Sharing",
      image: rideSharingImg,
      color: "from-[hsl(258,69%,35%)] to-[hsl(330,81%,60%)]",
      points: [
        "Share rides",
        "Book seats",
        "Long-distance trips",
        "Daily commute options",
      ],
    },
    {
      icon: KeyRound,
      title: "Rental Cars",
      image: rentalImg,
      color: "from-[hsl(330,81%,60%)] to-[hsl(351,89%,60%)]",
      points: [
        "Self-drive cars",
        "Chauffeur-drive rentals",
        "Hourly / Daily / Weekly",
      ],
    },
    {
      icon: ShoppingBag,
      title: "Pre-Owned Cars",
      image: preOwnedImg,
      color: "from-[hsl(351,89%,60%)] to-[hsl(258,69%,35%)]",
      points: [
        "Browse verified used cars",
        "List your car",
        "Secure and simple",
      ],
    },
    {
      icon: Users2,
      title: "Driver Pool",
      image: poolingImg,
      color: "from-[hsl(258,69%,35%)] to-[hsl(330,81%,60%)]",
      points: [
        "Hire drivers",
        "Become a driver",
        "Earn with flexible timings",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-50 px-4 h-16 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold">Our Services</h1>
      </header>

      {/* Content */}
      <div className="px-6 py-8 space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold gradient-text">Our Services</h2>
          <p className="text-muted-foreground">Complete mobility solutions for everyone</p>
        </div>

        {/* Service Cards */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card border border-border rounded-3xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
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
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                
                <div className="space-y-2">
                  {service.points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <MobileFooter />

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default MobileServices;
