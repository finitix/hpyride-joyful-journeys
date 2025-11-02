import MobileLayout from "@/components/mobile/MobileLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Clock, Users, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import rideSharingImg from "@/assets/service-ridesharing.jpg";

const MobileRide = () => {
  const navigate = useNavigate();

  const features = [
    { icon: MapPin, label: "Door-to-door pickup" },
    { icon: Clock, label: "Instant booking" },
    { icon: Users, label: "Verified riders" },
    { icon: DollarSign, label: "Affordable rates" },
  ];

  return (
    <MobileLayout showBottomNav={false}>
      <div className="min-h-screen bg-background pb-6">
        {/* Hero Image */}
        <div className="relative h-64">
          <img
            src={rideSharingImg}
            alt="Ride Sharing"
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
            <h1 className="text-3xl font-bold text-white mb-2">Ride Sharing</h1>
            <p className="text-white/90">Quick daily commute</p>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 mt-6 space-y-6">
          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-4 border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(258,69%,35%)] to-[hsl(330,81%,60%)] flex items-center justify-center mb-3">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium text-foreground">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="bg-card rounded-2xl p-6 border border-border space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              How it Works
            </h2>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold">1</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    Enter your destination
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Tell us where you want to go
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold">2</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Get matched</p>
                  <p className="text-sm text-muted-foreground">
                    We'll find verified riders going your way
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold">3</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    Enjoy your ride
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Safe, affordable travel with trusted riders
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Notice */}
          <div className="bg-secondary/30 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">🚗</div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Coming Soon!
            </h3>
            <p className="text-muted-foreground mb-4">
              We're working hard to bring you the best ride sharing experience.
              Get notified when we launch!
            </p>
            <Button variant="gradient" className="w-full rounded-xl h-12">
              Notify Me
            </Button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default MobileRide;
