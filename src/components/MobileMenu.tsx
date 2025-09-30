import { useState, useEffect } from "react";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import logo from "@/assets/logo.png";
import { openWhatsApp, getFormattedWhatsAppNumber } from "@/lib/whatsapp";
import { CONTACT_INFO } from "@/config/contact";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  // Disable background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      // Disable scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Re-enable scroll
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup function
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-3 rounded-md hover:bg-muted transition-colors relative min-h-[48px] min-w-[48px] flex items-center justify-center touch-manipulation bg-background/95 backdrop-blur-sm border border-border"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-foreground" />
        ) : (
          <Menu className="w-6 h-6 text-foreground" />
        )}
      </button>

      {/* Modern Drawer */}
      <Drawer
        open={isOpen}
        onClose={toggleMenu}
        direction="right"
        size="320px"
        className="lg:hidden"
        style={{
          backgroundColor: 'hsl(var(--card))',
          borderLeft: '1px solid hsl(var(--border))',
        }}
      >
        <div className="flex flex-col h-full bg-card">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border bg-card">
            <img 
              src={logo} 
              alt="GrowonsmediaAI" 
              className="h-10 sm:h-12 md:h-16 w-auto drop-shadow-lg transition-all duration-300"
            />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-muted transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-4 sm:px-6 py-6 sm:py-8 bg-card overflow-y-auto">
            <div className="space-y-4 sm:space-y-6">
              <Link
                to="/"
                onClick={handleNavClick}
                className={`w-full text-left text-lg font-medium hover:text-ai-primary transition-colors py-3 px-2 rounded-lg min-h-[48px] flex items-center touch-manipulation ${isActive('/') ? 'text-ai-primary font-semibold bg-ai-primary/10' : 'text-foreground'}`}
              >
                Home
              </Link>
              <Link
                to="/ai-journey"
                onClick={handleNavClick}
                className={`w-full text-left text-lg font-medium hover:text-ai-primary transition-colors py-3 px-2 rounded-lg min-h-[48px] flex items-center touch-manipulation ${isActive('/ai-journey') ? 'text-ai-primary font-semibold bg-ai-primary/10' : 'text-foreground'}`}
              >
                AI Journey
              </Link>
              <Link
                to="/services"
                onClick={handleNavClick}
                className={`w-full text-left text-lg font-medium hover:text-ai-primary transition-colors py-3 px-2 rounded-lg min-h-[48px] flex items-center touch-manipulation ${isActive('/services') ? 'text-ai-primary font-semibold bg-ai-primary/10' : 'text-foreground'}`}
              >
                Services
              </Link>
              <Link
                to="/about"
                onClick={handleNavClick}
                className={`w-full text-left text-lg font-medium hover:text-ai-primary transition-colors py-3 px-2 rounded-lg min-h-[48px] flex items-center touch-manipulation ${isActive('/about') ? 'text-ai-primary font-semibold bg-ai-primary/10' : 'text-foreground'}`}
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={handleNavClick}
                className={`w-full text-left text-lg font-medium hover:text-ai-primary transition-colors py-3 px-2 rounded-lg min-h-[48px] flex items-center touch-manipulation ${isActive('/contact') ? 'text-ai-primary font-semibold bg-ai-primary/10' : 'text-foreground'}`}
              >
                Contact
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border space-y-3 sm:space-y-4 bg-card">
              <div className="text-sm text-muted-foreground mb-3 sm:mb-4 font-medium">Get in touch</div>
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center space-x-3 text-sm hover:text-ai-primary transition-colors py-2 px-2 rounded-lg min-h-[44px] touch-manipulation"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">{CONTACT_INFO.email}</span>
              </a>
              <button
                onClick={() => openWhatsApp("Hi! I'm interested in your AI services from mobile.")}
                className="flex items-center space-x-3 text-sm hover:text-ai-primary transition-colors cursor-pointer w-full text-left py-2 px-2 rounded-lg min-h-[44px] touch-manipulation"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{getFormattedWhatsAppNumber()}</span>
              </button>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>India HQ & USA Office</span>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="p-4 sm:p-6 border-t border-border bg-card">
            <Link to="/contact" onClick={handleNavClick}>
              <Button className="w-full btn-hero min-h-[52px] shadow-lg">
                Launch Your Vision
              </Button>
            </Link>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MobileMenu;