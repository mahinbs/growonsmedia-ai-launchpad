import { useState } from "react";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { openWhatsApp, getFormattedWhatsAppNumber } from "@/lib/whatsapp";
import { CONTACT_INFO } from "@/config/contact";

interface MobileMenuProps {
  onContactClick: () => void;
}

const MobileMenu = ({ onContactClick }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.getElementById(href.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    setIsOpen(false);
    onContactClick();
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors z-50 relative"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-foreground" />
        ) : (
          <Menu className="w-6 h-6 text-foreground" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Slide Panel */}
      <div className={`
        fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-card border-l border-border z-50 lg:hidden
        transform transition-transform duration-300 ease-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <img 
              src={logo} 
              alt="GrowonsmediaAI" 
              className="h-12 md:h-16 w-auto drop-shadow-lg transition-all duration-300"
            />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-8">
            <div className="space-y-6">
              <button
                onClick={() => handleNavClick('#hero')}
                className="block w-full text-left text-lg font-medium text-foreground hover:text-ai-primary transition-colors py-2"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('#journey')}
                className="block w-full text-left text-lg font-medium text-foreground hover:text-ai-primary transition-colors py-2"
              >
                AI Journey
              </button>
              <button
                onClick={() => handleNavClick('#services')}
                className="block w-full text-left text-lg font-medium text-foreground hover:text-ai-primary transition-colors py-2"
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick('#about')}
                className="block w-full text-left text-lg font-medium text-foreground hover:text-ai-primary transition-colors py-2"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('#contact')}
                className="block w-full text-left text-lg font-medium text-foreground hover:text-ai-primary transition-colors py-2"
              >
                Contact
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-border space-y-4">
              <div className="text-sm text-muted-foreground mb-4">Get in touch</div>
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center space-x-3 text-sm hover:text-ai-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{CONTACT_INFO.email}</span>
              </a>
              <button
                onClick={() => openWhatsApp("Hi! I'm interested in your AI services from mobile.")}
                className="flex items-center space-x-3 text-sm hover:text-ai-primary transition-colors cursor-pointer w-full text-left"
              >
                <Phone className="w-4 h-4" />
                <span>{getFormattedWhatsAppNumber()}</span>
              </button>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>India HQ & USA Office</span>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="p-6 border-t border-border">
            <Button 
              onClick={handleContactClick}
              className="w-full btn-hero"
            >
              Launch Your Vision
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;