import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { openWhatsApp, getFormattedWhatsAppNumber } from "@/lib/whatsapp";
import { CONTACT_INFO } from "@/config/contact";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: ""
    });
    
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Listen for service pre-selection from other components
  useEffect(() => {
    const handlePreSelectService = (event: CustomEvent) => {
      const { serviceTitle } = event.detail;
      const serviceMap: { [key: string]: string } = {
        "Web Applications": "web-app",
        "Mobile Applications": "mobile-app", 
        "AI Automation": "ai-automation",
        "AI Development": "ai-development",
        "Chatbot Development": "chatbot",
        "SaaS Solutions": "saas",
        "Blockchain Development": "blockchain",
        "AR / VR Development": "ar-vr",
        "IoT Development": "iot",
        "Game Development": "game",
        "AI Calling Agency": "ai-calling",
        "UI/UX Design": "ui-ux",
        "Data Analytics": "data-analytics",
        "Cloud Computing": "cloud"
      };
      
      const serviceValue = serviceMap[serviceTitle] || "other";
      setFormData(prev => ({ 
        ...prev, 
        service: serviceValue,
        message: serviceTitle !== "General Inquiry" 
          ? `I'm interested in ${serviceTitle} services. Please provide more information about pricing, timeline, and next steps.`
          : ""
      }));
    };

    window.addEventListener('preSelectService', handlePreSelectService as EventListener);
    return () => {
      window.removeEventListener('preSelectService', handlePreSelectService as EventListener);
    };
  }, []);

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 px-4">
            Ready to <span className="gradient-text">Launch Your Vision</span>?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Transform your business with AI-powered solutions. Get in touch with our experts 
            and start your journey to AI-first success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="service-card">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Get Your Free AI Consultation</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="service">Service Interested In</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-app">Web Applications</SelectItem>
                      <SelectItem value="mobile-app">Mobile Applications</SelectItem>
                      <SelectItem value="saas">SaaS Solutions</SelectItem>
                      <SelectItem value="blockchain">Blockchain Development</SelectItem>
                      <SelectItem value="ar-vr">AR / VR Development</SelectItem>
                      <SelectItem value="iot">IoT Development</SelectItem>
                      <SelectItem value="game">Game Development</SelectItem>
                      <SelectItem value="ai-automation">AI Automation</SelectItem>
                      <SelectItem value="ai-calling">AI Calling Agency</SelectItem>
                      <SelectItem value="ai-development">AI Development</SelectItem>
                      <SelectItem value="chatbot">Chatbot Development</SelectItem>
                      <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                      <SelectItem value="data-analytics">Data Analytics</SelectItem>
                      <SelectItem value="cloud">Cloud Computing</SelectItem>
                      <SelectItem value="other">Other Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="budget">Project Budget</Label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-10k">Under $10k</SelectItem>
                      <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                      <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                      <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                      <SelectItem value="over-100k">Over $100k</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="message">Project Details *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your project, goals, and how we can help transform your business with AI..."
                  rows={4}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="btn-hero w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending Message..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="service-card">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Get in Touch</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-ai-glow rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-ai-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm sm:text-base font-semibold mb-1">Email Us</h4>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm sm:text-base text-muted-foreground hover:text-ai-primary transition-colors break-all">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ai-glow rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-ai-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call or WhatsApp</h4>
                    <button 
                      onClick={() => openWhatsApp("Hi! I'm interested in your AI services. Can you provide more information?")}
                      className="text-muted-foreground hover:text-ai-primary transition-colors cursor-pointer"
                    >
                      {getFormattedWhatsAppNumber()}
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ai-glow rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-ai-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Our Offices</h4>
                    <div className="text-muted-foreground space-y-2">
                      <p><strong>India HQ:</strong><br />995/208-A, 2-G, Gali No.12, Kailash Nagar, Gandhi Nagar, Delhi 110031</p>
                      <p><strong>USA Office:</strong><br />271 W Short St, Suite 410, Lexington, Kentucky (KY)-40507</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ai-glow rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-ai-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <div className="text-muted-foreground">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-card text-center bg-gradient-primary text-white">
              <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
              <p className="mb-6 opacity-90">
                Our AI experts are standing by to discuss your project and provide immediate guidance.
              </p>
              <Button 
                className="bg-white text-ai-primary hover:bg-white/90"
                onClick={() => openWhatsApp("Hi! I need immediate help with my AI project. Are you available to chat?")}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;