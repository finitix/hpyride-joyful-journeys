import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Car, KeyRound, Users2, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      icon: Car,
      title: "Ride Sharing Made Easy",
      description: "Find or offer rides with trusted users in your community. Safe, affordable, and eco-friendly.",
      color: "from-[hsl(258,69%,35%)] to-[hsl(330,81%,60%)]",
    },
    {
      icon: KeyRound,
      title: "Rent Verified Vehicles",
      description: "Choose from a wide range of verified cars. Rent hourly, daily, or weekly for your convenience.",
      color: "from-[hsl(330,81%,60%)] to-[hsl(351,89%,60%)]",
    },
    {
      icon: Users2,
      title: "Drive Together",
      description: "Collaborate with long-haul drivers for intercity journeys. Share costs and make new friends.",
      color: "from-[hsl(351,89%,60%)] to-[hsl(258,69%,35%)]",
    },
  ];

  const handleSkip = () => {
    localStorage.setItem("onboarding_completed", "true");
    navigate("/");
  };

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      handleSkip();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30 flex flex-col">
      {/* Skip Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={handleSkip}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`text-center space-y-8 transition-all duration-500 ${
              currentSlide === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 absolute"
            }`}
          >
            {/* Icon */}
            <div className="flex justify-center">
              <div
                className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${slide.color} flex items-center justify-center shadow-2xl`}
              >
                <slide.icon className="w-16 h-16 text-white" />
              </div>
            </div>

            {/* Text */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                {slide.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-sm mx-auto leading-relaxed">
                {slide.description}
              </p>
            </div>
          </div>
        ))}

        {/* Dots Indicator */}
        <div className="flex gap-2 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="p-6 space-y-3">
        <Button
          onClick={handleNext}
          variant="gradient"
          size="lg"
          className="w-full text-lg h-14 rounded-2xl"
        >
          {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
        </Button>
        {currentSlide < slides.length - 1 && (
          <button
            onClick={handleSkip}
            className="w-full text-center text-muted-foreground text-sm py-2"
          >
            Skip
          </button>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
