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
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Animated Counters */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center fade-in">
              <div className="counter mb-2">{counters.clients}+</div>
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-ai-primary mr-2" />
                <span className="text-lg font-semibold">Happy Clients</span>
              </div>
              <p className="text-muted-foreground">Businesses transformed with AI</p>
            </div>
            
            <div className="text-center fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="counter mb-2">{counters.projects}+</div>
              <div className="flex items-center justify-center mb-2">
                <FolderOpen className="w-6 h-6 text-ai-primary mr-2" />
                <span className="text-lg font-semibold">Projects Completed</span>
              </div>
              <p className="text-muted-foreground">Successful AI implementations</p>
            </div>
            
            <div className="text-center fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="counter mb-2">{counters.years}+</div>
              <div className="flex items-center justify-center mb-2">
                <Calendar className="w-6 h-6 text-ai-primary mr-2" />
                <span className="text-lg font-semibold">Years of Experience</span>
              </div>
              <p className="text-muted-foreground">Leading AI innovation</p>
            </div>
          </div>
        </div>

        {/* Client Logos Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Trusted by Amazing Companies</h3>
          <div className="relative overflow-hidden">
            <div className="flex animate-pulse space-x-8 justify-center">
              {clientLogos.map((logo, index) => (
                <div key={index} className="flex-shrink-0 bg-card border border-card-border rounded-lg px-6 py-4">
                  <div className="text-lg font-semibold text-muted-foreground">{logo}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="service-card text-center">
            <div className="w-32 h-32 bg-ai-glow rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl font-bold text-ai-primary">CEO</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Founder & CEO</h3>
            <p className="text-ai-primary font-semibold mb-4">AI Innovation Leader</p>
            <p className="text-muted-foreground">
              Visionary leader with 10+ years in AI and business transformation. 
              Passionate about helping businesses embrace the future of AI technology.
            </p>
          </div>
          
          <div className="service-card text-center">
            <div className="w-32 h-32 bg-ai-glow rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl font-bold text-ai-primary">CTO</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Co-Founder & CTO</h3>
            <p className="text-ai-primary font-semibold mb-4">Technical Excellence</p>
            <p className="text-muted-foreground">
              Expert developer and architect specializing in AI implementation and scalable solutions. 
              Drives technical innovation and ensures delivery excellence.
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Connect With Us</h3>
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                className="w-16 h-16 bg-ai-glow rounded-full flex items-center justify-center hover:bg-ai-primary hover:text-white transition-all duration-300 hover:scale-110"
                aria-label={social.name}
              >
                <social.icon className="w-8 h-8" />
              </a>
            ))}
          </div>
          
          <Button 
            className="btn-hero"
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