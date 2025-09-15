import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { servicesData, ServiceData } from "@/data/servicesData";
import ServiceDetailModal from "./ServiceDetailModal";
import { DollarSign, Clock } from "lucide-react";

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleViewDetails = (service: ServiceData) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleGetQuote = (serviceTitle: string) => {
    // Check if we're on the home page with contact section
    const contactSection = document.getElementById('contact');
    if (contactSection && location.pathname === '/') {
      // Scroll to contact section on same page
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
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

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16 fade-in px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Our <span className="gradient-text">AI-Powered</span> Services
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From web applications to AI automation, we deliver comprehensive solutions 
            that transform your business with cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="relative bg-card/30 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-2xl fade-in group" 
              style={{ 
                animationDelay: `${index * 0.1}s`,
                borderColor: service.accentColor,
                borderWidth: '2px',
                boxShadow: `0 0 20px ${service.accentColor}15`
              }}
            >
              {/* Popular Badge */}
              {service.isPopular && (
                <div 
                  className="absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: service.accentColor }}
                >
                  Popular
                </div>
              )}

              {/* Pricing and Timeline */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-1 text-2xl font-bold" style={{ color: service.accentColor }}>
                  <DollarSign className="w-5 h-5" />
                  {service.startingPrice.replace('$', '')}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {service.timeline}
                </div>
              </div>

              {/* Service Icon and Title */}
              <div className="mb-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    backgroundColor: `${service.accentColor}20`,
                    border: `2px solid ${service.accentColor}40`
                  }}
                >
                  <service.icon className="w-8 h-8" style={{ color: service.accentColor }} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-sm mb-3" style={{ color: service.accentColor }}>Key Features</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div 
                        className="w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0"
                        style={{ backgroundColor: service.accentColor }}
                      ></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-1">
                  {service.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="text-xs border-0"
                      style={{ 
                        backgroundColor: `${service.accentColor}20`,
                        color: service.accentColor
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                  {service.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{service.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 sm:gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 border-2 transition-all duration-300 hover:scale-105 min-h-[44px] text-sm"
                  style={{ 
                    borderColor: service.accentColor,
                    color: service.accentColor
                  }}
                  onClick={() => handleViewDetails(service)}
                >
                  Details →
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg min-h-[44px] text-sm"
                  style={{ 
                    backgroundColor: service.accentColor,
                    boxShadow: `0 4px 15px ${service.accentColor}40`
                  }}
                  onClick={() => handleGetQuote(service.title)}
                >
                  Quote
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 px-4">
          <Button className="btn-hero w-full sm:w-auto" onClick={() => handleGetQuote("General Inquiry")}>
            Get Your Free AI Consultation
          </Button>
        </div>
      </div>

      <ServiceDetailModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onGetQuote={handleGetQuote}
      />
    </section>
  );
};

export default ServicesSection;