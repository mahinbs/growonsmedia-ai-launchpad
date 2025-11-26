import { useEffect, useState, useRef } from "react";
import {
  Users,
  FolderOpen,
  Calendar,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { scroller } from "react-scroll";
import brand1 from "../assets/brandlogos/1.png";
import brand2 from "../assets/brandlogos/2.png";
import brand3 from "../assets/brandlogos/3.png";
import brand4 from "../assets/brandlogos/4.png";
import brand5 from "../assets/brandlogos/5.png";
import brand6 from "../assets/brandlogos/6.png";
import brand7 from "../assets/brandlogos/7.png";
import brand8 from "../assets/brandlogos/8.png";
import brand9 from "../assets/brandlogos/9.png";
import brand10 from "../assets/brandlogos/10.png";
import pulkitGuptaPhoto from "../assets/pulkitgupta.jpg";
import pulkitJainPhoto from "../assets/pulkitjain.jpeg";

const TrustSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    years: 0,
  });
  const countersRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Counter animation
  useEffect(() => {
    if (!isVisible) return;

    const finalValues = {
      clients: 150,
      projects: 500,
      years: 4,
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const animateCounter = (key: keyof typeof finalValues) => {
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const newValue = Math.floor(finalValues[key] * progress);

        setCounters((prev) => ({
          ...prev,
          [key]: newValue,
        }));

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounters((prev) => ({
            ...prev,
            [key]: finalValues[key],
          }));
        }
      }, stepDuration);

      return interval;
    };

    const intervals = {
      clients: animateCounter("clients"),
      projects: animateCounter("projects"),
      years: animateCounter("years"),
    };

    return () => {
      Object.values(intervals).forEach(clearInterval);
    };
  }, [isVisible]);

  const clientLogos = [
    { name: "Brand 1", image: brand1 },
    { name: "Brand 2", image: brand2 },
    { name: "Brand 3", image: brand3 },
    { name: "Brand 4", image: brand4 },
    { name: "Brand 5", image: brand5 },
    { name: "Brand 6", image: brand6 },
    { name: "Brand 7", image: brand7 },
    { name: "Brand 8", image: brand8 },
    { name: "Brand 9", image: brand9 },
    { name: "Brand 10", image: brand10 },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/company/growonsmedia-ai/",
      name: "LinkedIn",
    },
    { icon: Instagram, url: "https://www.instagram.com/growonsmedia.ai/", name: "Instagram" },
    { icon: Facebook, url: "https://www.facebook.com/profile.php?id=61581731460077", name: "Facebook" },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Animated Counters */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl mb-8 sm:mb-12 px-4">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>

          <div
            ref={countersRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4"
          >
            <div className="text-center fade-in p-4 sm:p-0">
              <div className="text-3xl sm:text-5xl font-bold gradient-text mb-2">
                {counters.clients}+
              </div>
              <div className="flex items-center justify-center mb-2 flex-wrap">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-ai-primary mr-2" />
                <span className="text-base sm:text-lg font-semibold">
                  Happy Clients
                </span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">
                Businesses transformed with AI
              </p>
            </div>

            <div className="text-center fade-in-delay-1 p-4 sm:p-0">
              <div className="text-3xl sm:text-5xl font-bold gradient-text mb-2">
                {counters.projects}+
              </div>
              <div className="flex items-center justify-center mb-2 flex-wrap">
                <FolderOpen className="w-5 h-5 sm:w-6 sm:h-6 text-ai-primary mr-2" />
                <span className="text-base sm:text-lg font-semibold">
                  Projects Completed
                </span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">
                Successful AI implementations
              </p>
            </div>

            <div className="text-center fade-in-delay-2 p-4 sm:p-0">
              <div className="text-3xl sm:text-5xl font-bold gradient-text mb-2">
                {counters.years}+
              </div>
              <div className="flex items-center justify-center mb-2 flex-wrap">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-ai-primary mr-2" />
                <span className="text-base sm:text-lg font-semibold">
                  Years of Experience
                </span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">
                Leading AI innovation
              </p>
            </div>
          </div>
        </div>

        {/* Client Logos Carousel */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 text-white">
            Trusted by Amazing Companies
          </h3>
          <div className="relative overflow-hidden rounded-lg">
            <div className="flex space-x-6 sm:space-x-8 animate-scroll">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-center"
                >
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="h-8 sm:h-12 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 px-4">
          <div className="service-card text-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 sm:mb-6 overflow-hidden border-2 border-ai-primary/30">
              <img
                src={pulkitGuptaPhoto}
                alt="Pulkit Gupta - Co-founder & CEO"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Pulkit Gupta</h3>
            <p className="text-ai-primary font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Co-founder & CEO
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Visionary leader with 10+ years in AI and business transformation.
              Passionate about helping businesses embrace the future of AI
              technology.
            </p>
          </div>

          <div className="service-card text-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 sm:mb-6 overflow-hidden border-2 border-ai-primary/30">
              <img
                src={pulkitJainPhoto}
                alt="Pulkit Jain - Founder & CMO"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Pulkit Jain</h3>
            <p className="text-ai-primary font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Founder & CMO
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Strategic marketing leader specializing in AI-driven growth and
              brand development. Expert in digital transformation and customer
              engagement through innovative AI solutions.
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center px-4">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
            Connect With Us
          </h3>
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                className="w-12 h-12 sm:w-16 sm:h-16 bg-ai-glow rounded-full flex items-center justify-center hover:bg-ai-primary hover:text-white transition-all duration-300 hover:scale-110 touch-manipulation"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5 sm:w-8 sm:h-8" />
              </a>
            ))}
          </div>

          <Button
            className="btn-hero text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            onClick={() =>
              scroller.scrollTo("contact", {
                duration: 1000,
                delay: 0,
                smooth: "easeInOutQuart",
                offset: -80, // Account for fixed header height
              })
            }
          >
            Start Your AI Journey Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
