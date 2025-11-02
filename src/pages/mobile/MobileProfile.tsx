import MobileLayout from "@/components/mobile/MobileLayout";
import { Button } from "@/components/ui/button";
import {
  User,
  Bell,
  CreditCard,
  MapPin,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
  Shield,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const MobileProfile = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: User,
      title: "Personal Info",
      subtitle: "Update your details",
      path: "/mobile/profile/edit",
    },
    {
      icon: MapPin,
      title: "Saved Addresses",
      subtitle: "Manage your locations",
      path: "/mobile/profile/addresses",
    },
    {
      icon: CreditCard,
      title: "Payment Methods",
      subtitle: "Cards, UPI, Wallet",
      path: "/mobile/profile/payments",
    },
    {
      icon: Bell,
      title: "Notifications",
      subtitle: "Manage alerts",
      path: "/mobile/profile/notifications",
    },
    {
      icon: Shield,
      title: "Safety Center",
      subtitle: "Emergency contacts",
      path: "/mobile/profile/safety",
    },
    {
      icon: Settings,
      title: "Settings",
      subtitle: "App preferences",
      path: "/mobile/profile/settings",
    },
    {
      icon: HelpCircle,
      title: "Help & Support",
      subtitle: "FAQs and contact us",
      path: "/mobile/support",
    },
  ];

  return (
    <MobileLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-gradient-to-br from-[hsl(258,69%,35%)] to-[hsl(330,81%,60%)] text-white px-6 pt-12 pb-12 rounded-b-[2rem]">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold">Guest User</h1>
              <p className="text-white/80 text-sm">Not logged in</p>
            </div>
          </div>
        </div>

        {/* Login CTA */}
        <div className="px-4 -mt-6 pb-6">
          <Button
            onClick={() => navigate("/mobile/login")}
            variant="gradient"
            className="w-full h-14 rounded-2xl text-lg shadow-xl"
          >
            Login or Sign Up
          </Button>
        </div>

        {/* Menu Items */}
        <div className="px-4 space-y-2 pb-24">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className="w-full bg-card rounded-2xl p-4 border border-border hover:border-primary transition-all flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.subtitle}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          ))}

          {/* Logout */}
          <button className="w-full bg-destructive/10 rounded-2xl p-4 border border-destructive/20 flex items-center gap-4 mt-6">
            <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center">
              <LogOut className="w-6 h-6 text-destructive" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-semibold text-destructive">Logout</h3>
            </div>
          </button>
        </div>

        {/* App Version */}
        <div className="text-center text-xs text-muted-foreground pb-8">
          Version 1.0.0 • Coming Soon
        </div>
      </div>
    </MobileLayout>
  );
};

export default MobileProfile;
