import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import WhyHpyRide from "@/components/home/WhyHpyRide";
import ServicesSection from "@/components/home/ServicesSection";
import VisionSection from "@/components/home/VisionSection";
import CTASection from "@/components/home/CTASection";
import ComingSoonDialog from "@/components/home/ComingSoonDialog";

const Home = () => {
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
