import { Home, Info, Briefcase, ShieldCheck, HelpCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-is-mobile";

const BottomNav = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  // Mobile-specific navigation
  const mobileNavItems = [
    { icon: Home, label: "Home", path: "/mobile" },
    { icon: Info, label: "About", path: "/mobile/about" },
    { icon: Briefcase, label: "Services", path: "/mobile/services" },
    { icon: ShieldCheck, label: "Safety", path: "/mobile/safety" },
    { icon: HelpCircle, label: "FAQs", path: "/mobile/faqs" },
  ];

  // Desktop navigation
  const desktopNavItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Info, label: "About", path: "/about" },
    { icon: Briefcase, label: "Services", path: "/services" },
  ];

  const navItems = isMobile ? mobileNavItems : desktopNavItems;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50 md:hidden">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center flex-1 py-2 rounded-lg transition-all ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <item.icon
                className={`w-6 h-6 mb-1 transition-transform ${
                  isActive ? "scale-110" : ""
                }`}
              />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
