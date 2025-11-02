import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Car } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success! 🎉",
        description: "You've been added to the waitlist. We'll notify you when we launch!",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Gradient background with wave animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(258,69%,35%)] via-[hsl(330,81%,60%)] to-[hsl(351,89%,60%)]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJhIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMjAgMjBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMC0yIDB6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] animate-pulse" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          {/* Animated car icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Car className="w-16 h-16 text-white animate-float" />
              <div className="absolute inset-0 blur-xl bg-white/50 animate-glow" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            We're Coming Soon!
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 px-4">
            Join thousands waiting for the future of Indian mobility.
          </p>

          {/* Email signup form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto mb-6 md:mb-8 px-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/95 border-white/20 text-foreground placeholder:text-muted-foreground h-12 rounded-xl shadow-lg focus:ring-2 focus:ring-white/50"
            />
            <Button
              type="submit"
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl"
            >
              Notify Me
            </Button>
          </form>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-white px-4">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold">10,000+</div>
              <div className="text-xs md:text-sm text-white/80">In Waitlist</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold">4 Cities</div>
              <div className="text-xs md:text-sm text-white/80">Launching First</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold">Q2 2025</div>
              <div className="text-xs md:text-sm text-white/80">Expected Launch</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
