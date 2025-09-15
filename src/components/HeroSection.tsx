import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-ai-illustration.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-hero pt-6 md:pt-8">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-ai-primary">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">AI-Powered Innovation</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                We are{" "}
                <span className="gradient-text">Growonsmedia</span>
                <br />
                <span className="text-ai-primary text-lg sm:text-xl md:text-2xl lg:text-3xl">AI Marketing • Education • Development</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Transform your business into AI-first with us. Launch Your Vision with cutting-edge AI solutions that drive growth and innovation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button 
                className="btn-hero group w-full sm:w-auto"
                onClick={() => navigate('/contact')}
              >
                Launch Your Vision
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                className="btn-outline-hero w-full sm:w-auto"
                onClick={() => navigate('/services')}
              >
                Explore Services
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative float">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="AI-powered innovation and development" 
                className="w-full h-auto rounded-2xl shadow-glow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ai-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;