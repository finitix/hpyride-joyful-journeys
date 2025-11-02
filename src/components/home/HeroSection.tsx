import { Button } from "@/components/ui/button";
import { Car, MapPin, Users } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background pt-20 md:pt-0">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Car className="text-accent/20 w-12 h-12" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "1s" }}>
          <MapPin className="text-primary/20 w-10 h-10" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: "2s" }}>
          <Users className="text-accent/20 w-14 h-14" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 animate-fade-in">
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Ride, Rent,</span>
                <br />
                <span className="text-foreground">and Drive Together</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Welcome to <span className="font-semibold text-primary">HpyRide.Com</span> — India's
                all-in-one mobility platform for safe, affordable, and joyful travel.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="gradient" size="lg" className="text-base">
                Get Early Access
              </Button>
              <Button variant="gradient-outline" size="lg" className="text-base">
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8 pt-4 lg:pt-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold gradient-text">10K+</div>
                <div className="text-xs lg:text-sm text-muted-foreground">Users Waiting</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold gradient-text">4</div>
                <div className="text-xs lg:text-sm text-muted-foreground">Cities Ready</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold gradient-text">100%</div>
                <div className="text-xs lg:text-sm text-muted-foreground">Safe Rides</div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative animate-scale-in hidden lg:block" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="People sharing rides in HpyRide platform"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[hsl(258,69%,35%)] via-[hsl(330,81%,60%)] to-[hsl(351,89%,60%)] flex items-center justify-center">
                  <Car className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Coming Soon</div>
                  <div className="text-xs text-muted-foreground">Book Your Ride</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
