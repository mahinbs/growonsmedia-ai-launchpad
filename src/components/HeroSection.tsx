import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-ai-illustration.jpg";
import Typewriter from "typewriter-effect";
import { scroller } from "react-scroll";

const HeroSection = () => {
  // Handle smooth scroll to section using react-scroll
  const scrollToSection = (sectionId: string) => {
    scroller.scrollTo(sectionId, {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -80, // Account for fixed header height
    });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-hero pt-6 md:pt-8"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          {/* Main Hero Content */}
          <div className="space-y-6 fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] leading-tight">
              <span className="text-white">We are an AI</span>
              <br />
              <span className="text-ai-primary inline-block min-h-[1.2em] drop-shadow-glow italic">
                <Typewriter
                  options={{
                    strings: ["Development", "Marketing", "Education"],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 50,
                  }}
                />
              </span>
              <br />
              <span className="text-white">Company</span>
            </h1>

            <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              We are all of the above.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              className="btn-hero group w-full sm:w-auto"
              onClick={() => scrollToSection("contact")}
            >
              Launch Your Vision
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
