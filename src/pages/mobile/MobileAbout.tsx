import { ArrowLeft, Shield, Users, Heart, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileFooter from "@/components/mobile/MobileFooter";
import BottomNav from "@/components/mobile/BottomNav";

const MobileAbout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-50 px-4 h-16 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold">About HpyRide</h1>
      </header>

      {/* Content */}
      <div className="px-6 py-8 space-y-8">
        {/* Title */}
        <div className="space-y-3">
          <h2 className="text-3xl font-bold gradient-text">About HPYRIDE</h2>
          <p className="text-muted-foreground text-lg">
            HPYRIDE is a simple, modern, and transparent travel platform built for India. 
            We help people share rides, rent cars, buy/sell pre-owned cars, or hire drivers 
            — all inside one single app.
          </p>
        </div>

        {/* Why We Exist */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold">Why We Exist</h3>
          <p className="text-muted-foreground">
            To make everyday travel affordable, convenient, and community-driven.
          </p>
        </div>

        {/* What We Offer */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold">What We Offer</h3>
          <p className="text-muted-foreground">
            A unified travel ecosystem designed for real Indian users and real Indian roads.
          </p>
        </div>

        {/* Our Promise */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">Our Promise</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground">Safety-first design</h4>
                <p className="text-sm text-muted-foreground">Every feature built with your safety in mind</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground">Verified profiles</h4>
                <p className="text-sm text-muted-foreground">All users and drivers go through verification</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground">Real-time tracking</h4>
                <p className="text-sm text-muted-foreground">Track every journey with live updates</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground">Reliable support</h4>
                <p className="text-sm text-muted-foreground">24/7 help when you need it most</p>
              </div>
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

export default MobileAbout;
