import { Button } from "@/components/ui/button";
import { Menu, Download, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-illustration.jpg";
import MobileFooter from "@/components/mobile/MobileFooter";
import BottomNav from "@/components/mobile/BottomNav";

const MobileLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50 px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold gradient-text">HpyRide.com</h1>
        <button className="p-2">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Hero Section */}
      <section className="pt-24 px-6 pb-12">
        <div className="space-y-6 text-center">
          <h2 className="text-4xl font-bold leading-tight">
            Move Smarter. <br />
            <span className="gradient-text">Travel Together.</span>
          </h2>
          
          <p className="text-muted-foreground text-lg">
            India's unified platform for Ride Sharing, Rental Cars, Pre-Owned Cars & Driver Pooling.
          </p>

          {/* CTA Buttons */}
          <div className="space-y-3 pt-4">
            <Button 
              variant="gradient" 
              className="w-full h-12 text-base rounded-xl"
              onClick={() => navigate("/mobile/about")}
            >
              <Download className="w-5 h-5 mr-2" />
              Download App
            </Button>
            <Button 
              variant="outline" 
              className="w-full h-12 text-base rounded-xl"
              onClick={() => navigate("/mobile/about")}
            >
              <LogIn className="w-5 h-5 mr-2" />
              Sign In / Sign Up
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative mt-8 rounded-2xl overflow-hidden">
            <img 
              src={heroImage} 
              alt="Travel together" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Quick Highlights */}
          <div className="grid grid-cols-1 gap-4 mt-8">
            <div className="bg-card border border-border rounded-xl p-4 flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div className="text-left">
                <h3 className="font-semibold text-foreground">Made for India</h3>
                <p className="text-sm text-muted-foreground">Built for Indian roads and journeys</p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-4 flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div className="text-left">
                <h3 className="font-semibold text-foreground">Built for Every Journey</h3>
                <p className="text-sm text-muted-foreground">From daily commute to long trips</p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-4 flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div className="text-left">
                <h3 className="font-semibold text-foreground">Fast, Safe, Transparent</h3>
                <p className="text-sm text-muted-foreground">Verified users and real-time tracking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <MobileFooter />

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default MobileLanding;
