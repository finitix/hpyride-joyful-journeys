import MobileLayout from "@/components/mobile/MobileLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar, Shield, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import rentalImg from "@/assets/service-rental.jpg";

const MobileRent = () => {
  const navigate = useNavigate();

  const vehicles = [
    {
      name: "Sedan",
      price: "₹499/day",
      features: ["AC", "5 Seater", "Fuel Included"],
    },
    {
      name: "SUV",
      price: "₹799/day",
      features: ["AC", "7 Seater", "GPS"],
    },
    {
      name: "Hatchback",
      price: "₹399/day",
      features: ["AC", "4 Seater", "Easy Drive"],
    },
  ];

  return (
    <MobileLayout showBottomNav={false}>
      <div className="min-h-screen bg-background pb-6">
        {/* Hero Image */}
        <div className="relative h-64">
          <img
            src={rentalImg}
            alt="Car Rental"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <button
            onClick={() => navigate("/")}
            className="absolute top-6 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <div className="absolute bottom-6 left-4 right-4">
            <h1 className="text-3xl font-bold text-white mb-2">Rent a Car</h1>
            <p className="text-white/90">Self-drive freedom</p>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 mt-6 space-y-6">
          {/* Quick Info */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-card rounded-xl p-3 border border-border text-center">
              <Shield className="w-6 h-6 text-primary mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Verified Cars</p>
            </div>
            <div className="bg-card rounded-xl p-3 border border-border text-center">
              <Calendar className="w-6 h-6 text-primary mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Flexible Plans</p>
            </div>
            <div className="bg-card rounded-xl p-3 border border-border text-center">
              <Star className="w-6 h-6 text-primary mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Best Prices</p>
            </div>
          </div>

          {/* Vehicle List */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              Available Vehicles
            </h2>
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-5 border border-border"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">
                      {vehicle.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Starting from
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold gradient-text">
                      {vehicle.price}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {vehicle.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-secondary rounded-full text-xs text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Button
                  variant="gradient-outline"
                  className="w-full rounded-xl"
                >
                  View Details
                </Button>
              </div>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="bg-secondary/30 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">🚙</div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Launching Soon!
            </h3>
            <p className="text-muted-foreground mb-4">
              Our fleet of verified vehicles is being prepared. Be the first to
              know when we launch!
            </p>
            <Button variant="gradient" className="w-full rounded-xl h-12">
              Get Early Access
            </Button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default MobileRent;
