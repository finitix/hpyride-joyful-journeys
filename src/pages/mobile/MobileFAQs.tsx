import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MobileFooter from "@/components/mobile/MobileFooter";
import BottomNav from "@/components/mobile/BottomNav";

const MobileFAQs = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "Is HPYRIDE free to use?",
      answer: "Yes, downloading and using the HPYRIDE app is completely free. We only charge a small service fee on completed bookings to maintain the platform and ensure quality service.",
    },
    {
      question: "How do I share a ride?",
      answer: "Simply open the app, select 'Ride Sharing', enter your pickup and drop-off locations, choose your preferred ride, and confirm. You can also offer rides by selecting 'Offer Ride' and setting your route details.",
    },
    {
      question: "Can I hire a driver anytime?",
      answer: "Yes! Our Driver Pool service is available 24/7. You can book a driver on-demand or schedule one in advance. All our drivers are verified and experienced professionals.",
    },
    {
      question: "How safe are shared rides?",
      answer: "Safety is our top priority. All users are verified, rides have live GPS tracking, you can share trip details with family/friends, and we have 24/7 emergency support. Every ride is insured and monitored.",
    },
    {
      question: "How do I list my car for sale?",
      answer: "Go to 'Pre-Owned Cars' section, click 'List Your Car', fill in your vehicle details, upload clear photos, and our team will verify the listing. Once approved, your car will be visible to potential buyers on our platform.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major payment methods including UPI, credit/debit cards, net banking, and wallet payments. You can also use our unified wallet for seamless transactions across all services.",
    },
    {
      question: "How do I cancel a booking?",
      answer: "You can cancel any booking from the 'My Rides' section in the app. Cancellation charges may apply based on when you cancel. Free cancellations are available within the first few minutes of booking.",
    },
    {
      question: "Are rental cars available in all cities?",
      answer: "We're currently available in major cities and expanding rapidly. Check the app to see if rental cars are available in your city. You can also sign up for updates when we launch in new locations.",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-50 px-4 h-16 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold">FAQs</h1>
      </header>

      {/* Content */}
      <div className="px-6 py-8 space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold gradient-text">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Find answers to common questions</p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-2xl px-6 py-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6 text-center space-y-3 mt-8">
          <h3 className="text-xl font-bold">Still have questions?</h3>
          <p className="text-muted-foreground">
            Our support team is here to help you 24/7
          </p>
          <a
            href="mailto:support@hpyride.com"
            className="inline-block text-primary font-semibold"
          >
            support@hpyride.com
          </a>
        </div>
      </div>

      {/* Footer */}
      <MobileFooter />

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default MobileFAQs;
