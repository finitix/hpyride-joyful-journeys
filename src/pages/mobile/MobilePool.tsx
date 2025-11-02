import MobileLayout from "@/components/mobile/MobileLayout";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Users,
  MapPin,
  Clock,
  DollarSign,
  Leaf,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import poolingImg from "@/assets/service-pooling.jpg";

const MobilePool = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: DollarSign,
      title: "Save Money",
      description: "Share costs and save up to 70%",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Reduce carbon footprint together",
    },
    {
      icon: Users,
      title: "Meet People",
      description: "Make friends on long journeys",
    },
    {
      icon: Clock,
      title: "Flexible Times",
      description: "Plan trips your way",
    },
  ];

  return (
    <MobileLayout showBottomNav={false}>
      <div className="min-h-screen bg-background pb-6">
        {/* Hero Image */}
        <div className="relative h-64">
          <img
            src={poolingImg}
            alt="Drive Together"
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
            <h1 className="text-3xl font-bold text-white mb-2">
              Drive Together
            </h1>
            <p className="text-white/90">Long distance carpooling</p>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 mt-6 space-y-6">
          {/* Benefits */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              Why Carpool?
            </h2>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-5 border border-border flex gap-4"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(351,89%,60%)] to-[hsl(258,69%,35%)] flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Popular Routes */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              Popular Routes
            </h2>
            <div className="space-y-3">
              {[
                "Delhi → Jaipur",
                "Mumbai → Pune",
                "Bangalore → Chennai",
              ].map((route, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-4 border border-border flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">{route}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Coming Soon
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* How it Works */}
          <div className="bg-gradient-to-br from-[hsl(351,89%,60%)]/10 to-[hsl(258,69%,35%)]/10 rounded-2xl p-6 space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              How it Works
            </h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">1</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    Post or Find a Ride
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Offer your empty seats or find available rides
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">2</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Connect & Plan</p>
                  <p className="text-sm text-muted-foreground">
                    Chat with verified users and finalize details
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">3</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Travel Together</p>
                  <p className="text-sm text-muted-foreground">
                    Share the journey, costs, and make memories
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Notice */}
          <div className="bg-secondary/30 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">🚗💨</div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Launching Soon!
            </h3>
            <p className="text-muted-foreground mb-4">
              Join our community of travelers and start saving on long distance
              journeys. Be notified when we launch!
            </p>
            <Button variant="gradient" className="w-full rounded-xl h-12">
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default MobilePool;
