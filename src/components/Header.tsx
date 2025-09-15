import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/MobileMenu";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        {/* Main navigation */}
        <div className="flex items-center justify-between py-3 md:py-4">
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="GrowonsmediaAI" 
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transition-all duration-300 hover:scale-105 drop-shadow-lg hover:drop-shadow-xl"
            />
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`hover:text-ai-primary transition-colors ${isActive('/') ? 'text-ai-primary font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/ai-journey" 
              className={`hover:text-ai-primary transition-colors ${isActive('/ai-journey') ? 'text-ai-primary font-semibold' : ''}`}
            >
              AI Journey
            </Link>
            <Link 
              to="/services" 
              className={`hover:text-ai-primary transition-colors ${isActive('/services') ? 'text-ai-primary font-semibold' : ''}`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-ai-primary transition-colors ${isActive('/about') ? 'text-ai-primary font-semibold' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`hover:text-ai-primary transition-colors ${isActive('/contact') ? 'text-ai-primary font-semibold' : ''}`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/contact">
              <Button className="hidden sm:flex btn-hero text-sm sm:text-base px-4 sm:px-8 py-1.5 sm:py-2">
                Launch Your Vision
              </Button>
            </Link>
            
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;