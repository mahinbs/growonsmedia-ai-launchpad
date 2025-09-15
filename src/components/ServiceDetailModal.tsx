import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Clock, DollarSign, ArrowRight, X } from "lucide-react";
import { ServiceData } from "@/data/servicesData";

interface ServiceDetailModalProps {
  service: ServiceData | null;
  isOpen: boolean;
  onClose: () => void;
  onGetQuote: (serviceTitle: string) => void;
}

const ServiceDetailModal = ({ service, isOpen, onClose, onGetQuote }: ServiceDetailModalProps) => {
  if (!service) return null;

  const handleGetQuote = () => {
    onGetQuote(service.title);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute -top-2 -right-2"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-ai-glow rounded-2xl flex items-center justify-center">
              <service.icon className="w-8 h-8 text-ai-primary" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold">{service.title}</DialogTitle>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-8">
          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <Clock className="w-6 h-6 text-ai-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Timeline</p>
              <p className="font-semibold">{service.timeline}</p>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <DollarSign className="w-6 h-6 text-ai-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Starting From</p>
              <p className="font-semibold">{service.startingPrice}</p>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <CheckCircle className="w-6 h-6 text-ai-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Deliverables</p>
              <p className="font-semibold">{service.deliverables.length} Items</p>
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h3 className="text-xl font-bold mb-3">Overview</h3>
            <p className="text-muted-foreground leading-relaxed">{service.detailedDescription}</p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-bold mb-3">Technologies We Use</h3>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="bg-ai-primary/10 text-ai-primary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Process */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Process</h3>
            <div className="space-y-3">
              {service.process.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-ai-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h3 className="text-xl font-bold mb-4">What You'll Receive</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {service.deliverables.map((deliverable, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-ai-primary flex-shrink-0" />
                  <p className="text-muted-foreground">{deliverable}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study */}
          {service.caseStudy && (
            <div className="bg-gradient-to-r from-ai-primary/5 to-ai-secondary/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Success Story</h3>
              <h4 className="font-semibold text-ai-primary mb-2">{service.caseStudy.title}</h4>
              <p className="text-muted-foreground mb-4">{service.caseStudy.description}</p>
              <div className="grid md:grid-cols-3 gap-4">
                {service.caseStudy.results.map((result, index) => (
                  <div key={index} className="text-center">
                    <p className="font-bold text-ai-primary">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          <div>
            <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {service.faq.map((item, index) => (
                <div key={index} className="border-l-4 border-ai-primary/20 pl-4">
                  <h4 className="font-semibold mb-2">{item.question}</h4>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Call to Action */}
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold">Ready to Get Started?</h3>
            <p className="text-muted-foreground">
              Let's discuss your project and provide you with a customized solution.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
              <Button className="bg-ai-primary hover:bg-ai-secondary" onClick={handleGetQuote}>
                Get Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailModal;