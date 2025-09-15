import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AIJourneySection from "@/components/AIJourneySection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AIJourneySection />
        <ServicesSection />
        <TrustSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
