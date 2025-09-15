import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";
import { openWhatsApp, getFormattedWhatsAppNumber } from "@/lib/whatsapp";
import { CONTACT_INFO } from "@/config/contact";

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
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <img 
              src={logo} 
              alt="GrowonsmediaAI" 
              className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto mb-3 sm:mb-4 drop-shadow-2xl hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300"
            />
            <p className="text-background/70 mb-4 sm:mb-6 max-w-md text-sm sm:text-base leading-relaxed">
              Transform your business into AI-first with our cutting-edge solutions. 
              We help companies launch their vision with AI-powered innovation.
            </p>
            
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-ai-primary flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-background/70 hover:text-ai-primary transition-colors text-sm sm:text-base break-all">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-ai-primary flex-shrink-0" />
                <button 
                  onClick={() => openWhatsApp("Hi! I'm interested in your AI services.")}
                  className="text-background/70 hover:text-ai-primary transition-colors cursor-pointer text-sm sm:text-base touch-manipulation min-h-[44px] flex items-center"
                >
                  {getFormattedWhatsAppNumber()}
                </button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-ai-primary text-sm sm:text-base">Services</h4>
            <ul className="space-y-1 sm:space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-background/70 hover:text-ai-primary transition-colors text-xs sm:text-sm touch-manipulation block py-1">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-ai-primary text-sm sm:text-base">Company</h4>
            <ul className="space-y-1 sm:space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-background/70 hover:text-ai-primary transition-colors text-xs sm:text-sm touch-manipulation block py-1">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Office Addresses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 p-4 sm:p-6 bg-background/5 rounded-2xl">
          <div className="flex items-start space-x-3">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-ai-primary mt-1 flex-shrink-0" />
            <div>
              <h5 className="font-semibold mb-1 text-ai-primary text-sm sm:text-base">India Headquarters</h5>
              <p className="text-background/70 text-xs sm:text-sm leading-relaxed">
                995/208-A, 2-G, Gali No.12, Kailash Nagar,<br />
                Gandhi Nagar, Delhi 110031, India
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-ai-primary mt-1 flex-shrink-0" />
            <div>
              <h5 className="font-semibold mb-1 text-ai-primary text-sm sm:text-base">USA Office</h5>
              <p className="text-background/70 text-xs sm:text-sm leading-relaxed">
                271 W Short St, Suite 410,<br />
                Lexington, Kentucky (KY)-40507, USA
              </p>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-background/20 gap-4">
          <div className="flex space-x-3 sm:space-x-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-background/10 rounded-full flex items-center justify-center hover:bg-ai-primary transition-colors touch-manipulation"
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            ))}
          </div>
          
          <div className="text-center sm:text-right">
            <p className="text-background/70 text-xs sm:text-sm">
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