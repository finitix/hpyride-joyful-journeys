import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Shield, Leaf, Users, Route, TrendingUp, Heart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-is-mobile";

const Vision = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  useEffect(() => {
    if (isMobile) {
      navigate("/mobile");
    }
  }, [isMobile, navigate]);

  if (isMobile) {
    return null;
  }
  const visionPillars = [
    {
      icon: Shield,
      title: "Safety for Every Journey",
      description:
        "Real-time tracking, emergency support, and verified drivers ensure your peace of mind on every ride.",
      features: [
        "24/7 SOS button with instant response",
        "Live GPS tracking shared with loved ones",
        "Background-verified drivers and riders",
        "In-app emergency contacts",
      ],
      color: "from-[hsl(258,69%,35%)] to-[hsl(258,69%,50%)]",
    },
    {
      icon: Leaf,
      title: "Smart Sustainability",
      description:
        "Every shared ride reduces carbon emissions, traffic congestion, and our environmental footprint.",
      features: [
        "Reduce CO₂ emissions by carpooling",
        "Less traffic, cleaner air for cities",
        "Promote efficient vehicle utilization",
        "Carbon offset tracking for users",
      ],
      color: "from-[hsl(330,81%,60%)] to-[hsl(330,81%,70%)]",
    },
    {
      icon: Users,
      title: "Empowering Drivers",
      description:
        "Better income, fair ride models, and a supportive community for drivers across India.",
      features: [
        "Fair and transparent earnings model",
        "Flexible working hours",
        "Driver insurance and protection",
        "Community support and training",
      ],
      color: "from-[hsl(351,89%,60%)] to-[hsl(351,89%,70%)]",
    },
  ];

  const impactStats = [
    { icon: Route, value: "500K+", label: "Kilometers Saved", color: "text-primary" },
    { icon: TrendingUp, value: "30%", label: "Cost Reduction", color: "text-accent" },
    { icon: Heart, value: "100K+", label: "Happy Travelers", color: "text-[hsl(351,89%,60%)]" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Driven by <span className="gradient-text">Trust, Innovation, and Happiness</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At HpyRide.Com, we're not just building a platform — we're creating a movement that transforms how
              India moves, connects, and grows together.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Vision</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To build India's most trusted and joyful mobility ecosystem where every journey is safe, every
              ride is affordable, and every mile brings communities closer together.
            </p>
          </div>

          {/* Vision Pillars */}
          <div className="max-w-6xl mx-auto space-y-16">
            {visionPillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center transform hover:scale-110 transition-transform duration-300`}
                    >
                      <pillar.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{pillar.title}</h3>
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed">{pillar.description}</p>

                  <ul className="space-y-3">
                    {pillar.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="relative aspect-square max-w-md mx-auto">
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${pillar.color} opacity-10 animate-pulse`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <pillar.icon className="w-48 h-48 text-muted-foreground/20" />
                    </div>
                    {/* Floating decorative elements */}
                    <div
                      className={`absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br ${pillar.color} blur-2xl opacity-30 animate-float`}
                    />
                    <div
                      className={`absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-gradient-to-br ${pillar.color} blur-3xl opacity-20 animate-float`}
                      style={{ animationDelay: "1s" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Impact</span>
              </h2>
              <p className="text-lg text-muted-foreground">Making a difference, one ride at a time</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {impactStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <stat.icon className={`w-16 h-16 mx-auto mb-4 ${stat.color}`} />
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              To revolutionize Indian mobility by creating a trusted, affordable, and joyful transportation
              ecosystem that empowers communities, protects the environment, and brings happiness to every
              journey.
            </p>
            <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-[hsl(258,69%,35%)] via-[hsl(330,81%,60%)] to-[hsl(351,89%,60%)]">
              <div className="bg-card rounded-xl px-8 py-4">
                <p className="text-xl font-semibold gradient-text">
                  Your journey, our happiness — together we ride forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Vision;
