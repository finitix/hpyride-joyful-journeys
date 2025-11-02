import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import WhyHpyRide from "@/components/home/WhyHpyRide";
import ServicesSection from "@/components/home/ServicesSection";
import VisionSection from "@/components/home/VisionSection";
import CTASection from "@/components/home/CTASection";
import ComingSoonDialog from "@/components/home/ComingSoonDialog";
import MobileHome from "@/components/mobile/MobileHome";
import { useIsMobile } from "@/hooks/use-is-mobile";

const Home = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  useEffect(() => {
    if (isMobile) {
      const onboardingCompleted = localStorage.getItem("onboarding_completed");
      if (!onboardingCompleted) {
        navigate("/mobile/onboarding");
      }
    }
  }, [isMobile, navigate]);

  if (isMobile) {
    return <MobileHome />;
  }

  return (
    <Layout>
      <ComingSoonDialog />
      <HeroSection />
      <WhyHpyRide />
      <ServicesSection />
      <VisionSection />
      <CTASection />
    </Layout>
  );
};

export default Home;
