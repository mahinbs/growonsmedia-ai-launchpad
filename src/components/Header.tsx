import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/MobileMenu";
import logo from "@/assets/logo.png";

const Header = () => {
  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Growonsmedia" 
              className="h-8 sm:h-10 w-auto transition-all duration-300 hover:scale-105"
            />
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