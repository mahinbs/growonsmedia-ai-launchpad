import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Smartphone, Globe, Zap, Shield, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ContactForm from "@/components/ContactForm";

const WebDevelopment = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: Code,
      title: "Custom Web Applications",
      description: "Tailored solutions built with cutting-edge technologies like React, Next.js, and modern frameworks."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring your website looks perfect on all devices and screen sizes."
    },
    {
      icon: Globe,
      title: "SEO Optimization",
      description: "Built-in SEO best practices to ensure your website ranks high in search engines."
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Lightning-fast loading times with optimized code and modern performance techniques."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Enterprise-grade security measures to protect your website and user data."
    },
    {
      icon: Rocket,
      title: "Scalable Architecture",
      description: "Future-proof solutions that grow with your business needs and requirements."
    }
  ];

  const services = [
    "E-commerce Websites",
    "Corporate Websites",
    "Portfolio Websites",
    "Landing Pages",
    "Web Applications",
    "CMS Development",
    "API Integration",
    "Database Design"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-ai-primary">
                  <Code className="w-5 h-5" />
                  <span className="text-sm font-medium uppercase tracking-wider">Web Development</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Build Amazing{" "}
                  <span className="gradient-text">Web Experiences</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Transform your ideas into powerful web applications with our expert development team. From concept to deployment, we create digital experiences that captivate and convert.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="btn-hero group"
                  onClick={scrollToContact}
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline" 
                  className="btn-outline-hero"
                  onClick={() => navigate('/services')}
                >
                  View All Services
                </Button>
              </div>
            </div>

            <div className="relative float">
              <div className="bg-gradient-primary rounded-2xl p-8 shadow-glow">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <Code className="w-8 h-8 text-white mb-2" />
                    <h3 className="text-white font-semibold">Frontend</h3>
                    <p className="text-white/80 text-sm">React, Vue, Angular</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <Globe className="w-8 h-8 text-white mb-2" />
                    <h3 className="text-white font-semibold">Backend</h3>
                    <p className="text-white/80 text-sm">Node.js, Python, PHP</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <Zap className="w-8 h-8 text-white mb-2" />
                    <h3 className="text-white font-semibold">Database</h3>
                    <p className="text-white/80 text-sm">MongoDB, PostgreSQL</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <Shield className="w-8 h-8 text-white mb-2" />
                    <h3 className="text-white font-semibold">Cloud</h3>
                    <p className="text-white/80 text-sm">AWS, Vercel, Netlify</p>
                  </div>
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
              Why Choose Our <span className="gradient-text">Web Development</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with creative design to deliver web solutions that drive results
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

      {/* Services Section */}
      <section className="py-20 bg-ai-glow">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Our <span className="gradient-text">Web Development</span> Services
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From simple websites to complex web applications, we deliver solutions that meet your specific business requirements and exceed your expectations.
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
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-accent rounded-2xl p-8 shadow-glow">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">Development Process</h3>
                      <p className="text-white/80">Agile methodology for faster delivery</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <span className="text-white">Discovery & Planning</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <span className="text-white">Design & Prototyping</span>
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
                      <span className="text-white">Launch & Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Ready to Build Your <span className="gradient-text">Web Presence?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss your project and create a web solution that drives your business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-hero group"
                onClick={scrollToContact}
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="btn-outline-hero"
                onClick={() => navigate('/services')}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm 
        title="Ready to Build Your Web Presence?"
        subtitle="Let's discuss your project and create a web solution that drives your business forward"
        defaultService="web-development"
      />
    </div>
  );
};

export default WebDevelopment;