import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Users, Target, Award } from "lucide-react";
import { useIsMobile } from "@/hooks/use-is-mobile";

const About = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  useEffect(() => {
    if (isMobile) {
      navigate("/mobile/about");
    }
  }, [isMobile, navigate]);

  if (isMobile) {
    return null;
  }
  const team = [
    {
      name: "Rahul Sharma",
      role: "Founder & CEO",
      description: "10+ years in mobility and tech innovation.",
    },
    {
      name: "Priya Patel",
      role: "Head of Operations",
      description: "Expert in logistics and community building.",
    },
    {
      name: "Arjun Kumar",
      role: "Chief Technology Officer",
      description: "Leading our tech vision and product development.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              The Future of Indian Mobility <span className="gradient-text">Begins Here</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              HpyRide.Com is built to make daily travel safer, smarter, and more connected. We blend technology
              and trust to empower riders and drivers alike.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Who <span className="gradient-text">We Are</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <span className="font-semibold text-primary">HpyRide.Com</span> is built to make daily travel
                  safer, smarter, and more connected. We blend technology and trust to empower riders and
                  drivers alike.
                </p>
                <p>
                  Our platform is designed with the Indian traveler in mind — understanding local needs,
                  cultural nuances, and the importance of community-driven solutions.
                </p>
                <p>
                  We're not just building a ride-sharing app; we're creating a movement that transforms how
                  India moves.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <Users className="w-12 h-12 mb-4 text-accent" />
                <div className="text-3xl font-bold gradient-text mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Community Members</div>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 mt-8">
                <Target className="w-12 h-12 mb-4 text-primary" />
                <div className="text-3xl font-bold gradient-text mb-2">4</div>
                <div className="text-sm text-muted-foreground">Cities Coverage</div>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <Award className="w-12 h-12 mb-4 text-accent" />
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Safety Focused</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Story</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                Founded to solve India's mobility challenges, we aim to create a community-driven ecosystem
                for efficient transportation.
              </p>
              <p>
                Our journey began with a simple observation: millions of Indians struggle with expensive,
                unreliable, or unsafe transportation options daily. We knew there had to be a better way.
              </p>
              <p>
                By combining cutting-edge technology with deep local insights, we're building a platform that
                doesn't just connect riders and drivers — it builds trust, creates opportunities, and
                transforms communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Meet Our <span className="gradient-text">Team</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Passionate individuals driving change in Indian mobility
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center gradient-border animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Avatar placeholder with gradient */}
                  <div className="mx-auto mb-6 w-24 h-24 rounded-full bg-gradient-to-br from-[hsl(258,69%,35%)] via-[hsl(330,81%,60%)] to-[hsl(351,89%,60%)] flex items-center justify-center text-white text-3xl font-bold transform group-hover:scale-110 transition-transform duration-300">
                    {member.name.charAt(0)}
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:gradient-text transition-all duration-300">
                    {member.name}
                  </h3>
                  <div className="text-sm font-medium text-primary mb-3">{member.role}</div>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
