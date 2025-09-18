import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Smartphone, Tablet, Monitor, Zap, Users, Database } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import appHeroImage from "@/assets/app-development-hero.jpg";
import appTechBg from "@/assets/app-tech-bg.jpg";

const AppDevelopment = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: Smartphone,
      title: "Native Mobile Apps",
      description: "iOS and Android native applications built with Swift, Kotlin, and React Native for optimal performance."
    },
    {
      icon: Tablet,
      title: "Cross-Platform Solutions",
      description: "Single codebase for multiple platforms using Flutter and React Native, reducing development time and cost."
    },
    {
      icon: Monitor,
      title: "Desktop Applications",
      description: "Powerful desktop apps using Electron, .NET, and other modern frameworks for Windows, Mac, and Linux."
    },
    {
      icon: Zap,
      title: "Real-time Features",
      description: "Live updates, push notifications, and real-time synchronization to keep users engaged."
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Intuitive interfaces designed with user experience in mind, following platform-specific guidelines."
    },
    {
      icon: Database,
      title: "Cloud Integration",
      description: "Seamless cloud connectivity with scalable backend services and secure data synchronization."
    }
  ];

  const platforms = [
    {
      name: "iOS Development",
      technologies: ["Swift", "SwiftUI", "Objective-C", "Xcode"],
      icon: "📱"
    },
    {
      name: "Android Development", 
      technologies: ["Kotlin", "Java", "Android Studio", "Jetpack Compose"],
      icon: "🤖"
    },
    {
      name: "Cross-Platform",
      technologies: ["React Native", "Flutter", "Xamarin", "Ionic"],
      icon: "🔄"
    },
    {
      name: "Desktop Apps",
      technologies: ["Electron", ".NET", "Qt", "JavaFX"],
      icon: "💻"
    }
  ];

  const services = [
    "Custom Mobile Apps",
    "Enterprise Applications",
    "E-commerce Apps",
    "Social Media Apps",
    "Gaming Applications",
    "Productivity Tools",
    "Healthcare Apps",
    "Educational Apps"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={appTechBg} 
            alt="Mobile app technology background" 
            className="w-full h-full object-cover opacity-5"
          />
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-ai-primary">
                  <Smartphone className="w-5 h-5" />
                  <span className="text-sm font-medium uppercase tracking-wider">App Development</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Create Powerful{" "}
                  <span className="gradient-text">Mobile Apps</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Transform your vision into feature-rich mobile and desktop applications. We build apps that users love and businesses depend on, across all major platforms.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="btn-hero group"
                  onClick={scrollToContact}
                >
                  Build Your App
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline" 
                  className="btn-outline-hero"
                  onClick={() => navigate('/services')}
                >
                  View Portfolio
                </Button>
              </div>
            </div>

            <div className="relative float">
              <div className="relative">
                <img 
                  src={appHeroImage} 
                  alt="Mobile app development workspace with devices and interfaces" 
                  className="w-full h-auto rounded-2xl shadow-glow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ai-accent/30 to-transparent rounded-2xl"></div>
                
                {/* Floating Device Icons */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <Smartphone className="w-6 h-6 text-ai-primary" />
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <Tablet className="w-6 h-6 text-ai-secondary" />
                </div>
                <div className="absolute top-1/2 right-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg transform -translate-y-1/2">
                  <Monitor className="w-6 h-6 text-ai-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Why Choose Our <span className="gradient-text">App Development</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We create applications that deliver exceptional user experiences and drive business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="service-card fade-in-delay-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-ai-accent/20 to-ai-primary/20"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="gradient-text">Multi-Platform</span> Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
              We develop for all major platforms using the latest technologies and best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="service-card text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <CardTitle className="text-lg">{platform.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {platform.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="inline-block bg-ai-primary/10 text-ai-primary px-3 py-1 rounded-full text-sm mr-2 mb-2">
                        {tech}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-primary rounded-2xl p-8 shadow-glow">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">Development Lifecycle</h3>
                      <p className="text-white/80">From concept to app store</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <span className="text-white">Strategy & Wireframing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <span className="text-white">UI/UX Design</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <span className="text-white">Development & Testing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">4</span>
                      </div>
                      <span className="text-white">Deployment & Maintenance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Our <span className="gradient-text">App Development</span> Services
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From simple utility apps to complex enterprise solutions, we create applications that solve real problems and deliver measurable results for your business.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-ai-primary rounded-full"></div>
                    <span className="text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>

              <Button 
                className="btn-hero group mt-8"
                onClick={scrollToContact}
              >
                Start Your App Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ai-glow">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Ready to Launch Your <span className="gradient-text">App Idea?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's turn your app concept into reality with our expert development team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-hero group"
                onClick={scrollToContact}
              >
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="btn-outline-hero"
                onClick={() => navigate('/services')}
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection variant="compact" />

      {/* Contact Form Section */}
      <ContactForm 
        title="Ready to Launch Your App Idea?"
        subtitle="Let's turn your app concept into reality with our expert development team"
        defaultService="app-development"
      />
    </div>
  );
};

export default AppDevelopment;