import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/config/contact";
import { MapPin, Clock, Mail, Phone, MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const Contact = () => {
  const location = useLocation();
  
  const handleWhatsAppClick = () => {
    openWhatsApp("Hi! I'm interested in your AI services. Can you help me?");
  };

  const handleEmailClick = () => {
    window.open(`mailto:${CONTACT_INFO.email}`, '_blank');
  };

  useEffect(() => {
    // Handle pre-selected service from navigation state
    if (location.state?.preSelectedService) {
      window.dispatchEvent(new CustomEvent('preSelectService', { 
        detail: { serviceTitle: location.state.preSelectedService } 
      }));
    }
  }, [location.state]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 pt-32 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to transform your business with AI? Let's start the conversation. Our team is here to answer your questions and help you find the perfect AI solution.
            </p>
            <Button 
              className="btn-hero text-base"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Multiple Ways to <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose your preferred method to reach out. We're available 24/7 to assist you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="service-card text-center fade-in-delay-1">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">WhatsApp</h3>
              <p className="text-muted-foreground mb-4">
                Get instant responses to your queries on WhatsApp.
              </p>
              <Button 
                variant="outline" 
                onClick={handleWhatsAppClick}
                className="w-full"
              >
                Chat Now
              </Button>
            </div>

            <div className="service-card text-center fade-in-delay-2">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <p className="text-muted-foreground mb-4">
                Send us detailed queries at {CONTACT_INFO.email}
              </p>
              <Button 
                variant="outline" 
                onClick={handleEmailClick}
                className="w-full"
              >
                Send Email
              </Button>
            </div>

            <div className="service-card text-center fade-in-delay-3">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Phone</h3>
              <p className="text-muted-foreground mb-4">
                Call us directly for immediate assistance.
              </p>
              <Button 
                variant="outline" 
                onClick={handleWhatsAppClick}
                className="w-full"
              >
                +91 9625978823
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <ContactSection />

      {/* Office Locations */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Offices</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Visit us at our global offices or schedule a virtual meeting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="service-card fade-in-delay-1">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">India Headquarters</h3>
                  <p className="text-muted-foreground">
                    {CONTACT_INFO.offices.india.address}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-ai-primary mt-1 flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    <div>{CONTACT_INFO.businessHours.weekdays}</div>
                    <div>{CONTACT_INFO.businessHours.saturday}</div>
                    <div>{CONTACT_INFO.businessHours.sunday}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-card fade-in-delay-2">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">USA Office</h3>
                  <p className="text-muted-foreground">
                    {CONTACT_INFO.offices.usa.address}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-ai-primary mt-1 flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    <div>Monday - Friday: 9:00 AM - 5:00 PM EST</div>
                    <div>Saturday: 10:00 AM - 2:00 PM EST</div>
                    <div>Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Quick answers to common questions about our AI services and process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6 fade-in-delay-1">
              <div>
                <h3 className="text-lg font-semibold mb-2">How quickly can you deliver AI solutions?</h3>
                <p className="text-muted-foreground">
                  Project timelines vary based on complexity, but most solutions are delivered within 2-12 weeks. We provide detailed timelines during our consultation.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Do you provide ongoing support?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer 24/7 monitoring and support to ensure your AI solutions continue performing optimally after deployment.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">What industries do you serve?</h3>
                <p className="text-muted-foreground">
                  We serve diverse industries including healthcare, finance, e-commerce, manufacturing, education, and more.
                </p>
              </div>
            </div>

            <div className="space-y-6 fade-in-delay-2">
              <div>
                <h3 className="text-lg font-semibold mb-2">How do you ensure data security?</h3>
                <p className="text-muted-foreground">
                  We follow enterprise-grade security protocols and compliance standards to protect your data throughout the development process.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Can you integrate with existing systems?</h3>
                <p className="text-muted-foreground">
                  Absolutely. Our solutions are designed to seamlessly integrate with your existing infrastructure and workflows.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">What's included in the consultation?</h3>
                <p className="text-muted-foreground">
                  Our free consultation includes needs assessment, solution recommendations, timeline estimates, and transparent pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Don't wait – every day without AI is a missed opportunity. Let's discuss how we can transform your business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                className="text-base px-8 py-4"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us Now
              </Button>
              <Button 
                variant="outline" 
                className="text-base px-8 py-4 border-white text-white hover:bg-white hover:text-ai-primary [&_svg]:text-white hover:[&_svg]:text-ai-primary"
                onClick={handleEmailClick}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;