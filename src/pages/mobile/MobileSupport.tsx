import MobileLayout from "@/components/mobile/MobileLayout";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Phone,
  Mail,
  ChevronDown,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MobileSupport = () => {
  const navigate = useNavigate();
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I book a ride?",
      answer:
        "Once we launch, you'll be able to book rides through our app by entering your pickup and drop-off locations. We're coming soon!",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We'll support all major payment methods including UPI, cards, wallets, and cash.",
    },
    {
      question: "Is my safety guaranteed?",
      answer:
        "Yes! All drivers and vehicles will be verified. We'll have 24/7 support and emergency features.",
    },
    {
      question: "Can I rent a car for multiple days?",
      answer:
        "Absolutely! Our car rental service will support hourly, daily, and weekly rentals.",
    },
    {
      question: "How does carpooling work?",
      answer:
        "You can share rides with others going in the same direction, splitting costs and reducing your carbon footprint.",
    },
  ];

  return (
    <MobileLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-gradient-to-br from-[hsl(258,69%,35%)] to-[hsl(330,81%,60%)] text-white px-6 pt-12 pb-8 rounded-b-[2rem]">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 flex items-center gap-2 text-white/90"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <h1 className="text-2xl font-bold mb-2">Help & Support</h1>
          <p className="text-white/80">We're here to help you</p>
        </div>

        {/* Quick Contact */}
        <div className="px-4 -mt-4 space-y-3 pb-6">
          <div className="bg-card rounded-2xl p-4 border border-border">
            <h3 className="font-semibold mb-3 text-foreground">Contact Us</h3>
            <div className="grid grid-cols-3 gap-3">
              <button className="flex flex-col items-center gap-2 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-medium text-foreground">
                  Call
                </span>
              </button>
              <button className="flex flex-col items-center gap-2 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-accent" />
                </div>
                <span className="text-xs font-medium text-foreground">
                  Chat
                </span>
              </button>
              <button className="flex flex-col items-center gap-2 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-medium text-foreground">
                  Email
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="px-4 pb-24">
          <h2 className="text-lg font-semibold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedFAQ(expandedFAQ === index ? null : index)
                  }
                  className="w-full p-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                      expandedFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFAQ === index && (
                  <div className="px-4 pb-4 text-sm text-muted-foreground border-t border-border pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="bg-secondary/30 rounded-2xl p-6 text-center mt-8">
            <h3 className="font-semibold text-foreground mb-2">
              Full Support Coming Soon
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Once we launch, we'll have 24/7 support available for all your
              queries
            </p>
            <Button variant="gradient-outline" className="rounded-xl">
              Get Notified
            </Button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default MobileSupport;
