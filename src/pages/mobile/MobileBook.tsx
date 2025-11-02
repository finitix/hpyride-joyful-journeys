import MobileLayout from "@/components/mobile/MobileLayout";
import { Button } from "@/components/ui/button";
import { Car, KeyRound, Users2, MapPin, Calendar, Clock } from "lucide-react";
import { useState } from "react";

const MobileBook = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: "ride",
      icon: Car,
      title: "Ride Share",
      color: "from-[hsl(258,69%,35%)] to-[hsl(330,81%,60%)]",
    },
    {
      id: "rent",
      icon: KeyRound,
      title: "Rent Car",
      color: "from-[hsl(330,81%,60%)] to-[hsl(351,89%,60%)]",
    },
    {
      id: "pool",
      icon: Users2,
      title: "Drive Together",
      color: "from-[hsl(351,89%,60%)] to-[hsl(258,69%,35%)]",
    },
  ];

  return (
    <MobileLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-gradient-to-br from-[hsl(258,69%,35%)] to-[hsl(330,81%,60%)] text-white px-6 pt-12 pb-8 rounded-b-[2rem]">
          <h1 className="text-2xl font-bold mb-2">Book Your Journey</h1>
          <p className="text-white/80">Choose your mobility option</p>
        </div>

        {/* Service Selection */}
        <div className="px-4 -mt-4 space-y-3 pb-6">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`w-full bg-card rounded-2xl p-5 border-2 transition-all ${
                selectedService === service.id
                  ? "border-primary shadow-lg"
                  : "border-border"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-foreground text-lg">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Booking Form */}
        {selectedService && (
          <div className="px-4 space-y-4 pb-24">
            <div className="bg-card rounded-2xl p-6 space-y-4">
              <h2 className="font-semibold text-lg">Trip Details</h2>

              {/* From Location */}
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Pick-up Location
                </label>
                <input
                  type="text"
                  placeholder="Enter pick-up location"
                  className="w-full px-4 py-3 bg-secondary/50 rounded-xl border border-border focus:outline-none focus:border-primary"
                />
              </div>

              {/* To Location */}
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Drop-off Location
                </label>
                <input
                  type="text"
                  placeholder="Enter drop-off location"
                  className="w-full px-4 py-3 bg-secondary/50 rounded-xl border border-border focus:outline-none focus:border-primary"
                />
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-secondary/50 rounded-xl border border-border focus:outline-none focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Time
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 bg-secondary/50 rounded-xl border border-border focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
            </div>

            <Button
              variant="gradient"
              className="w-full h-14 rounded-2xl text-lg"
            >
              Search Available Options
            </Button>
          </div>
        )}
      </div>
    </MobileLayout>
  );
};

export default MobileBook;
