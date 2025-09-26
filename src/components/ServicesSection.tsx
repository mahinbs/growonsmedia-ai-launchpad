import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { servicesData, ServiceData } from "@/data/servicesData";
import { scroller } from "react-scroll";
import { CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<ServiceData>(servicesData[0]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGetQuote = (serviceTitle: string) => {
    // Check if we're on the home page with contact section
    if (location.pathname === '/') {
      // Scroll to contact section on same page using react-scroll
      scroller.scrollTo('contact', {
        duration: 1000,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -80, // Account for fixed header height
      });
      
      // Dispatch custom event to pre-select service in contact form
      window.dispatchEvent(new CustomEvent('preSelectService', { 
        detail: { serviceTitle } 
      }));
    } else {
      // Navigate to contact page with state
      navigate('/contact', { 
        state: { preSelectedService: serviceTitle }
      });
    }
  };

  const handleViewDetails = (service: ServiceData) => {
    setActiveService(service);
  };

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16 fade-in px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl mb-4 sm:mb-6">
            Our <span className="gradient-text">AI-Powered</span> Services
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From web applications to AI automation, we deliver comprehensive solutions 
            that transform your business with cutting-edge technology.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[40%,1fr] gap-8 lg:gap-12">
          {/* Left Column - Services List */}
          <div className="space-y-2">
            {servicesData.map((service, index) => (
              <button
                key={index}
                onClick={() => handleViewDetails(service)}
                className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                  activeService.id === service.id
                    ? 'bg-ai-primary text-white shadow-lg'
                    : 'bg-card/30 text-muted-foreground hover:text-foreground hover:bg-card/50'
                }`}
              >
                <span className="text-lg font-medium">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Right Column - Service Details */}
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20 flex flex-col justify-center">
            {/* Service Icon */}
            <div className="flex justify-center mb-6">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${activeService.accentColor}20` }}
              >
                <activeService.icon 
                  className="w-8 h-8" 
                  style={{ color: activeService.accentColor }} 
                />
              </div>
            </div>

            {/* Service Description */}
            <div className="text-center mb-8">
              <p className="text-muted-foreground leading-relaxed">
                {activeService.detailedDescription}
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4" style={{ color: activeService.accentColor }}>
                Key Features
              </h4>
              <ul className="space-y-3">
                {activeService.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle 
                      className="w-5 h-5 mr-3 flex-shrink-0" 
                      style={{ color: activeService.accentColor }} 
                    />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4" style={{ color: activeService.accentColor }}>
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeService.technologies.map((tech, techIndex) => (
                  <Badge 
                    key={techIndex} 
                    variant="secondary" 
                    className="text-sm border-0"
                    style={{ 
                      backgroundColor: `${activeService.accentColor}20`,
                      color: activeService.accentColor
                    }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="flex justify-center">
              <Button 
                className="w-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ 
                  backgroundColor: activeService.accentColor,
                  boxShadow: `0 4px 15px ${activeService.accentColor}40`
                }}
                onClick={() => handleGetQuote(activeService.title)}
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;