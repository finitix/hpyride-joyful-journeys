import { ArrowLeft, Search, MapPin, CheckCircle, Smile } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileFooter from "@/components/mobile/MobileFooter";
import BottomNav from "@/components/mobile/BottomNav";

const MobileHowItWorks = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: Search,
      number: "1",
      title: "Choose Your Service",
      description: "Ride, rent, buy/sell, or hire drivers.",
      color: "from-[hsl(258,69%,35%)] to-[hsl(330,81%,60%)]",
    },
    {
      icon: MapPin,
      number: "2",
      title: "Enter Trip / Car Details",
      description: "Search locations with auto-suggestions.",
      color: "from-[hsl(330,81%,60%)] to-[hsl(351,89%,60%)]",
    },
    {
      icon: CheckCircle,
      number: "3",
      title: "Confirm & Track",
      description: "Get live tracking, pricing, and safety info.",
      color: "from-[hsl(351,89%,60%)] to-[hsl(258,69%,35%)]",
    },
    {
      icon: Smile,
      number: "4",
      title: "Ride & Enjoy",
      description: "Fast, reliable, and transparent journeys.",
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
        <h1 className="text-lg font-semibold">How It Works</h1>
      </header>

      {/* Content */}
      <div className="px-6 py-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold gradient-text">How It Works</h2>
          <p className="text-muted-foreground">Simple steps to start your journey</p>
        </div>

        {/* Steps */}
        <div className="relative space-y-6">
          {/* Connecting Line */}
          <div className="absolute left-7 top-16 bottom-16 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex gap-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Number Circle */}
              <div className={`relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <step.icon className="w-7 h-7 text-white" />
              </div>

              {/* Step Content */}
              <div className="flex-1 bg-card border border-border rounded-2xl p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-primary">Step {step.number}</span>
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6 text-center space-y-3">
          <h3 className="text-xl font-bold">Ready to Get Started?</h3>
          <p className="text-muted-foreground">Download the app and start your journey today</p>
        </div>
      </div>

      {/* Footer */}
      <MobileFooter />

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default MobileHowItWorks;
