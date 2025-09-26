import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { useState, useEffect, useMemo } from "react";
import HomeMobileMenu from "@/components/HomeMobileMenu";
import { Link } from "react-scroll";
import { scroller } from "react-scroll";

const HomeHeader = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  // Section IDs that correspond to the Home page sections
  const sections = useMemo(
    () => [
      { id: "hero", label: "Home" },
      { id: "journey", label: "AI Journey" },
      { id: "services", label: "Services" },
      { id: "testimonials", label: "Testimonials" },
      { id: "about", label: "About" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Find the current section based on scroll position
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-1 md:py-2">
          {/* Logo */}
          <Link to="hero" className="flex items-center cursor-pointer">
            <img
              src={logo}
              alt="GrowonsmediaAI"
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transition-all duration-300 hover:scale-105 drop-shadow-lg hover:drop-shadow-xl"
            />
          </Link>

          {/* Navigation Links */}
          {/* <nav className="hidden lg:flex items-center space-x-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  activeSection === section.id
                    ? 'text-ai-primary bg-ai-primary/10 shadow-lg'
                    : 'text-muted-foreground hover:text-ai-primary hover:bg-ai-primary/5'
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav> */}

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button 
              className="hidden sm:flex border border-white/40 text-sm sm:text-base px-4 sm:px-8 py-1.5 sm:py-2 rounded-full"
              variant="outline"
              onClick={() => scrollToSection('contact')}
            >
              Launch Your Vision
            </Button>

            {/* Mobile Menu */}
            <HomeMobileMenu
              activeSection={activeSection}
              scrollToSection={scrollToSection}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
