import { ArrowLeft, Shield, UserCheck, Share2, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileFooter from "@/components/mobile/MobileFooter";
import BottomNav from "@/components/mobile/BottomNav";

const MobileSafety = () => {
  const navigate = useNavigate();

  const safetyFeatures = [
    {
      icon: UserCheck,
      title: "Verified users",
      description: "Every user and driver goes through thorough verification process",
      color: "from-[hsl(258,69%,35%)] to-[hsl(330,81%,60%)]",
    },
    {
      icon: Share2,
      title: "Live trip sharing",
      description: "Share your live location with friends and family instantly",
      color: "from-[hsl(330,81%,60%)] to-[hsl(351,89%,60%)]",
    },
    {
      icon: Phone,
      title: "Emergency support",
      description: "24/7 emergency assistance just a tap away",
      color: "from-[hsl(351,89%,60%)] to-[hsl(258,69%,35%)]",
    },
    {
      icon: Shield,
      title: "Real-time tracking",
      description: "Track every journey with live GPS and route monitoring",
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
        <h1 className="text-lg font-semibold">Safety</h1>
      </header>

      {/* Content */}
      <div className="px-6 py-8 space-y-8">
        {/* Title Section */}
        <div className="text-center space-y-4">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold gradient-text">Safety Matters Most</h2>
          <p className="text-muted-foreground text-lg">
            We combine technology and community trust to keep every journey safe.
          </p>
        </div>

        {/* Safety Features */}
        <div className="space-y-4">
          {safetyFeatures.map((feature, index) => (
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

        {/* Additional Info */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6 space-y-4">
          <h3 className="text-xl font-bold">Our Safety Commitment</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">
                All drivers undergo background checks and vehicle inspections
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">
                Insurance coverage for every ride shared through our platform
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">
                In-app safety features including SOS button and trip monitoring
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">
                Community-driven ratings and reviews for transparency
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <MobileFooter />

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default MobileSafety;
