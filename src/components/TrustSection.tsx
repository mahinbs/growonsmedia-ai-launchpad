import { useEffect, useState } from "react";
import { Users, FolderOpen, Calendar, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const TrustSection = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    years: 0
  });

  const finalValues = {
    clients: 150,
    projects: 500,
    years: 5
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = {
      clients: setInterval(() => {
        setCounters(prev => {
          const increment = finalValues.clients / steps;
          const newValue = Math.min(prev.clients + increment, finalValues.clients);
          if (newValue >= finalValues.clients) {
            clearInterval(intervals.clients);
            return { ...prev, clients: finalValues.clients };
          }
          return { ...prev, clients: Math.floor(newValue) };
        });
      }, stepDuration),

      projects: setInterval(() => {
        setCounters(prev => {
          const increment = finalValues.projects / steps;
          const newValue = Math.min(prev.projects + increment, finalValues.projects);
          if (newValue >= finalValues.projects) {
            clearInterval(intervals.projects);
            return { ...prev, projects: finalValues.projects };
          }
          return { ...prev, projects: Math.floor(newValue) };
        });
      }, stepDuration),

      years: setInterval(() => {
        setCounters(prev => {
          const increment = finalValues.years / steps;
          const newValue = Math.min(prev.years + increment, finalValues.years);
          if (newValue >= finalValues.years) {
            clearInterval(intervals.years);
            return { ...prev, years: finalValues.years };
          }
          return { ...prev, years: Math.floor(newValue) };
        });
      }, stepDuration)
    };

    return () => {
      Object.values(intervals).forEach(clearInterval);
    };
  }, []);

  const clientLogos = [
    "TechCorp", "InnovateLab", "DataFlow", "CloudMax", "AI Solutions", 
    "NextGen", "DigitalEdge", "SmartFlow", "FutureTech", "ProActive"
  ];

  const socialLinks = [
    { icon: Linkedin, url: "#", name: "LinkedIn" },
    { icon: Twitter, url: "#", name: "Twitter" },
    { icon: Instagram, url: "#", name: "Instagram" },
    { icon: Facebook, url: "#", name: "Facebook" }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Animated Counters */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 sm:mb-12 px-4">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4">
            <div className="text-center fade-in p-4 sm:p-0">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{counters.clients}+</div>
              <div className="flex items-center justify-center mb-2 flex-wrap">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-ai-primary mr-2" />
                <span className="text-base sm:text-lg font-semibold">Happy Clients</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">Businesses transformed with AI</p>
            </div>
            
            <div className="text-center fade-in-delay-1 p-4 sm:p-0">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{counters.projects}+</div>
              <div className="flex items-center justify-center mb-2 flex-wrap">
                <FolderOpen className="w-5 h-5 sm:w-6 sm:h-6 text-ai-primary mr-2" />
                <span className="text-base sm:text-lg font-semibold">Projects Completed</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">Successful AI implementations</p>
            </div>
            
            <div className="text-center fade-in-delay-2 p-4 sm:p-0">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{counters.years}+</div>
              <div className="flex items-center justify-center mb-2 flex-wrap">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-ai-primary mr-2" />
                <span className="text-base sm:text-lg font-semibold">Years of Experience</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">Leading AI innovation</p>
            </div>
          </div>
        </div>

        {/* Client Logos Carousel */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-8">Trusted by Amazing Companies</h3>
          <div className="relative overflow-hidden rounded-lg">
            <div className="flex space-x-6 sm:space-x-8 animate-scroll">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 bg-card border border-card-border rounded-lg px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                  <div className="text-sm sm:text-lg font-semibold text-muted-foreground">{logo}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 px-4">
          <div className="service-card text-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-ai-glow rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
              <span className="text-xl sm:text-2xl font-bold text-ai-primary">CEO</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Founder & CEO</h3>
            <p className="text-ai-primary font-semibold mb-3 sm:mb-4 text-sm sm:text-base">AI Innovation Leader</p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Visionary leader with 10+ years in AI and business transformation. 
              Passionate about helping businesses embrace the future of AI technology.
            </p>
          </div>
          
          <div className="service-card text-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-ai-glow rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
              <span className="text-xl sm:text-2xl font-bold text-ai-primary">CTO</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Co-Founder & CTO</h3>
            <p className="text-ai-primary font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Technical Excellence</p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Expert developer and architect specializing in AI implementation and scalable solutions. 
              Drives technical innovation and ensures delivery excellence.
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center px-4">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Connect With Us</h3>
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                className="w-12 h-12 sm:w-16 sm:h-16 bg-ai-glow rounded-full flex items-center justify-center hover:bg-ai-primary hover:text-white transition-all duration-300 hover:scale-110 touch-manipulation"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5 sm:w-8 sm:h-8" />
              </a>
            ))}
          </div>
          
          <Button 
            className="btn-hero text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your AI Journey Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;