import { ArrowLeft, Car, KeyRound, ShoppingBag, Users2, MapPin, Navigation, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileFooter from "@/components/mobile/MobileFooter";
import BottomNav from "@/components/mobile/BottomNav";

const MobileFeatures = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Car,
      title: "Ride Sharing",
      description: "Find or offer affordable rides across India with verified users.",
      color: "from-[hsl(258,69%,35%)] to-[hsl(330,81%,60%)]",
    },
    {
      icon: KeyRound,
      title: "Rental Cars",
      description: "Rent cars for hours, days, or weeks — quick booking, simple pricing.",
      color: "from-[hsl(330,81%,60%)] to-[hsl(351,89%,60%)]",
    },
    {
      icon: ShoppingBag,
      title: "Pre-Owned Cars",
      description: "Buy or sell trusted pre-owned vehicles with detailed verification.",
      color: "from-[hsl(351,89%,60%)] to-[hsl(258,69%,35%)]",
    },
    {
      icon: Users2,
      title: "Driver Pool",
      description: "Hire professional drivers or earn by driving when you want.",
      color: "from-[hsl(258,69%,35%)] to-[hsl(330,81%,60%)]",
    },
    {
      icon: MapPin,
      title: "Live Tracking",
      description: "Full route visibility and safety features built into the app.",
      color: "from-[hsl(330,81%,60%)] to-[hsl(351,89%,60%)]",
    },
    {
      icon: Navigation,
      title: "Smart Navigation",
      description: "Powered by OSM + OSRM routing for fast and accurate travel paths.",
      color: "from-[hsl(351,89%,60%)] to-[hsl(258,69%,35%)]",
    },
    {
      icon: Wallet,
      title: "Unified Wallet & Payments",
      description: "Secure payments for rides, rentals, and driver services.",
      color: "from-[hsl(258,69%,35%)] to-[hsl(330,81%,60%)]",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-50 px-4 h-16 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold">Key Features</h1>
      </header>

      {/* Content */}
      <div className="px-6 py-8 space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold gradient-text">Key Features</h2>
          <p className="text-muted-foreground">Everything you need for seamless travel</p>
        </div>

        {/* Feature Cards */}
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card border border-border rounded-2xl p-6 space-y-3 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
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

export default MobileFeatures;
