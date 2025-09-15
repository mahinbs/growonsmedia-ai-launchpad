import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    "Web Applications",
    "Mobile Applications", 
    "AI Automation",
    "AI Development",
    "Chatbot Development",
    "SaaS Solutions"
  ];

  const company = [
    "About Us",
    "Our Team", 
    "Careers",
    "Contact",
    "Blog",
    "Case Studies"
  ];

  const socialLinks = [
    { icon: Linkedin, url: "#", name: "LinkedIn" },
    { icon: Twitter, url: "#", name: "Twitter" },
    { icon: Instagram, url: "#", name: "Instagram" },
    { icon: Facebook, url: "#", name: "Facebook" }
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img 
              src={logo} 
              alt="Growonsmedia" 
              className="h-10 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-background/70 mb-6 max-w-md">
              Transform your business into AI-first with our cutting-edge solutions. 
              We help companies launch their vision with AI-powered innovation.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-ai-primary" />
                <a href="mailto:contact@growonsmedia.ai" className="text-background/70 hover:text-ai-primary transition-colors">
                  contact@growonsmedia.ai
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-ai-primary" />
                <a href="https://wa.me/919625978823" className="text-background/70 hover:text-ai-primary transition-colors">
                  +91 9625978823
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-ai-primary">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-background/70 hover:text-ai-primary transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-ai-primary">Company</h4>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-background/70 hover:text-ai-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Office Addresses */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 p-6 bg-background/5 rounded-2xl">
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-ai-primary mt-1" />
            <div>
              <h5 className="font-semibold mb-1 text-ai-primary">India Headquarters</h5>
              <p className="text-background/70 text-sm">
                995/208-A, 2-G, Gali No.12, Kailash Nagar,<br />
                Gandhi Nagar, Delhi 110031, India
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-ai-primary mt-1" />
            <div>
              <h5 className="font-semibold mb-1 text-ai-primary">USA Office</h5>
              <p className="text-background/70 text-sm">
                271 W Short St, Suite 410,<br />
                Lexington, Kentucky (KY)-40507, USA
              </p>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-background/20">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-ai-primary transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-background/70 text-sm">
              © {currentYear} Growonsmedia. All rights reserved.
            </p>
            <p className="text-background/50 text-xs mt-1">
              Launch Your Vision with AI-Powered Innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;