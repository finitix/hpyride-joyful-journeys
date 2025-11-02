import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BottomNav from "@/components/mobile/BottomNav";
import { useIsMobile } from "@/hooks/use-is-mobile";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-grow pt-20 ${isMobile ? 'pb-16' : ''}`}>{children}</main>
      <Footer />
      {isMobile && <BottomNav />}
    </div>
  );
};

export default Layout;
