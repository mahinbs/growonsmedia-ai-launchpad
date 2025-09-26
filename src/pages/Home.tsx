import HeroSection from "@/components/HeroSection";
import AIJourneySection from "@/components/AIJourneySection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustSection from "@/components/TrustSection";
import ContactSection from "@/components/ContactSection";
import HomeHeader from "@/components/HomeHeader";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HomeHeader />
      <HeroSection />
      <AIJourneySection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <TrustSection />
      <ContactSection />
    </div>
  );
};

export default Home;