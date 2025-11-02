import MobileLayout from "@/components/mobile/MobileLayout";
import { Tag, Gift, Clock, ChevronRight } from "lucide-react";

const MobileOffers = () => {
  const offers = [
    {
      title: "First Ride Free",
      description: "Get 100% off on your first ride up to ₹200",
      code: "FIRST100",
      validity: "Valid till Dec 31, 2025",
      color: "from-[hsl(258,69%,35%)] to-[hsl(330,81%,60%)]",
    },
    {
      title: "50% Off Car Rental",
      description: "Book any car and get 50% discount",
      code: "RENT50",
      validity: "Valid for new users",
      color: "from-[hsl(330,81%,60%)] to-[hsl(351,89%,60%)]",
    },
    {
      title: "Refer & Earn ₹500",
      description: "Invite friends and earn rewards",
      code: "REFER500",
      validity: "No expiry",
      color: "from-[hsl(351,89%,60%)] to-[hsl(258,69%,35%)]",
    },
  ];

  return (
    <MobileLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-gradient-to-br from-[hsl(258,69%,35%)] to-[hsl(330,81%,60%)] text-white px-6 pt-12 pb-8 rounded-b-[2rem]">
          <div className="flex items-center gap-3 mb-2">
            <Gift className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Exclusive Offers</h1>
          </div>
          <p className="text-white/80">Save more on every journey</p>
        </div>

        {/* Offers List */}
        <div className="px-4 -mt-4 space-y-4 pb-24">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-md border border-border"
            >
              <div className={`h-2 bg-gradient-to-r ${offer.color}`} />
              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-foreground mb-1">
                      {offer.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {offer.description}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-dashed border-border">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-accent" />
                    <span className="font-mono font-semibold text-primary">
                      {offer.code}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {offer.validity}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Coming Soon Notice */}
          <div className="bg-secondary/30 rounded-2xl p-6 text-center mt-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[hsl(258,69%,35%)] to-[hsl(330,81%,60%)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              More Offers Coming Soon!
            </h3>
            <p className="text-sm text-muted-foreground">
              Stay tuned for amazing deals and discounts
            </p>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default MobileOffers;
