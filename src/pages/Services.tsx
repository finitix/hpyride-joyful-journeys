import Layout from "@/components/layout/Layout";
import { Car, KeyRound, ShoppingCart, Users2, Shield, Clock, DollarSign } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import rideSharingImg from "@/assets/service-ridesharing.jpg";
import rentalImg from "@/assets/service-rental.jpg";
import preOwnedImg from "@/assets/service-preowned.jpg";
import poolingImg from "@/assets/service-pooling.jpg";

const Services = () => {
  const services = [
    {
      id: "ride-sharing",
      icon: Car,
      title: "Ride Sharing",
      status: "Coming Soon",
      isActive: false,
      image: rideSharingImg,
      description:
        "Connect with verified riders and drivers in your community. Share your daily commute, save money, and reduce traffic congestion.",
      features: [
        { icon: Shield, text: "Verified drivers and riders" },
        { icon: Clock, text: "Real-time matching and tracking" },
        { icon: DollarSign, text: "Save up to 60% on travel costs" },
      ],
      color: "from-[hsl(258,69%,35%)] to-[hsl(330,81%,60%)]",
    },
    {
      id: "car-rental",
      icon: KeyRound,
      title: "Car Rental",
      status: "Coming Soon",
      isActive: false,
      image: rentalImg,
      description:
        "Rent verified cars by the hour or day. Perfect for weekend trips, special occasions, or when you need temporary wheels.",
      features: [
        { icon: Shield, text: "Fully verified and insured vehicles" },
        { icon: Clock, text: "Flexible hourly and daily rates" },
        { icon: DollarSign, text: "No hidden charges, transparent pricing" },
      ],
      color: "from-[hsl(330,81%,60%)] to-[hsl(351,89%,60%)]",
    },
    {
      id: "pre-owned",
      icon: ShoppingCart,
      title: "Pre-Owned Cars",
      status: "Coming Soon",
      isActive: false,
      image: preOwnedImg,
      description:
        "Buy or sell verified used cars with confidence. Our platform ensures quality, transparency, and fair pricing for all transactions.",
      features: [
        { icon: Shield, text: "Complete vehicle verification" },
        { icon: Clock, text: "Quick and hassle-free process" },
        { icon: DollarSign, text: "Fair market value guaranteed" },
      ],
      color: "from-[hsl(351,89%,60%)] to-[hsl(258,69%,35%)]",
    },
    {
      id: "driver-pooling",
      icon: Users2,
      title: "Driver Pooling",
      status: "Coming Soon",
      isActive: false,
      image: poolingImg,
      description:
        "Collaborate with professional long-haul drivers for intercity journeys. Safe, comfortable, and economical travel across India.",
      features: [
        { icon: Shield, text: "Professional verified drivers" },
        { icon: Clock, text: "Scheduled and on-demand trips" },
        { icon: DollarSign, text: "Affordable long-distance travel" },
      ],
      color: "from-[hsl(258,69%,35%)] to-[hsl(330,81%,60%)]",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              All Your Mobility Needs, <span className="gradient-text">One Platform</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From daily commutes to weekend getaways, HpyRide.Com has you covered with comprehensive mobility
              solutions designed for modern India.
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="ride-sharing" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 h-auto p-2 bg-secondary/50 rounded-2xl">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[hsl(258,69%,35%)] data-[state=active]:via-[hsl(330,81%,60%)] data-[state=active]:to-[hsl(351,89%,60%)] data-[state=active]:text-white rounded-xl py-4 text-sm font-medium transition-all"
                >
                  <service.icon className="w-4 h-4 mr-2" />
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="animate-fade-in">
                <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}
                        >
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                          <span className="inline-block mt-1 px-3 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground">
                            {service.status}
                          </span>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-lg leading-relaxed">{service.description}</p>

                      <div className="space-y-4">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                              <feature.icon className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-foreground">{feature.text}</span>
                          </div>
                        ))}
                      </div>

                      <div className="inline-flex items-center px-4 py-2 rounded-lg bg-secondary text-muted-foreground text-sm font-medium">
                        Coming Soon
                      </div>
                    </div>

                    {/* Right: Visual */}
                    <div className="relative">
                      <div className="aspect-square rounded-3xl overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
