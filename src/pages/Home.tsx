import HeroSection from "@/components/HeroSection";
import AIJourneySection from "@/components/AIJourneySection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import ContactSection from "@/components/ContactSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AIJourneySection />
      <ServicesSection />
      <TrustSection />
      <ContactSection />
    </div>
  );
};

export default Home;