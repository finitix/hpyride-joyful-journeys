import { ReactNode } from "react";
import BottomNav from "./BottomNav";
import { useIsMobile } from "@/hooks/use-is-mobile";

interface MobileLayoutProps {
  children: ReactNode;
  showBottomNav?: boolean;
}

const MobileLayout = ({ children, showBottomNav = true }: MobileLayoutProps) => {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-background pb-16">
      <main className="pb-safe">{children}</main>
      {showBottomNav && <BottomNav />}
    </div>
  );
};

export default MobileLayout;
