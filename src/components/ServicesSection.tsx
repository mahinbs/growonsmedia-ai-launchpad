import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { servicesData, ServiceData } from "@/data/servicesData";
import ServiceDetailModal from "./ServiceDetailModal";

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (service: ServiceData) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleGetQuote = (serviceTitle: string) => {
    // Scroll to contact section and pre-select service
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Dispatch custom event to pre-select service in contact form
      window.dispatchEvent(new CustomEvent('preSelectService', { 
        detail: { serviceTitle } 
      }));
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">AI-Powered</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From web applications to AI automation, we deliver comprehensive solutions 
            that transform your business with cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="mb-6">
                <div className="w-16 h-16 bg-ai-glow rounded-2xl flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-ai-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-ai-primary">Technologies Used</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2 text-ai-primary">Key Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-ai-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleViewDetails(service)}
                  >
                    View Details
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-ai-primary hover:bg-ai-secondary"
                    onClick={() => handleGetQuote(service.title)}
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-hero" onClick={() => handleGetQuote("General Inquiry")}>
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