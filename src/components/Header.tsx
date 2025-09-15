import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/MobileMenu";

const Header = () => {
  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        {/* Top contact bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center space-x-6">
            <a href="mailto:contact@growonsmedia.ai" className="flex items-center space-x-2 hover:text-ai-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span>contact@growonsmedia.ai</span>
            </a>
            <a href="https://wa.me/919625978823" className="flex items-center space-x-2 hover:text-ai-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 9625978823</span>
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>India HQ & USA Office</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-bold gradient-text">Growonsmedia</h1>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#hero" className="hover:text-ai-primary transition-colors">Home</a>
            <a href="#journey" className="hover:text-ai-primary transition-colors">AI Journey</a>
            <a href="#services" className="hover:text-ai-primary transition-colors">Services</a>
            <a href="#about" className="hover:text-ai-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-ai-primary transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              className="hidden sm:flex btn-hero text-sm sm:text-base px-4 sm:px-8 py-2 sm:py-4"
              onClick={handleContactClick}
            >
              Launch Your Vision
            </Button>
            
            <MobileMenu onContactClick={handleContactClick} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;