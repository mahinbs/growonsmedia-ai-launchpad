import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Target, Zap } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 pt-6 md:pt-8 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              AI <span className="gradient-text">Solutions</span> That Drive Results
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From intelligent chatbots to advanced machine learning models, we offer comprehensive AI services tailored to your business needs.
            </p>
            <Link to="/contact">
              <Button className="btn-hero text-base">
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Comprehensive <span className="gradient-text">AI Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide end-to-end AI solutions, from strategy and development to deployment and optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="service-card text-center fade-in-delay-1">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Strategy & Consulting</h3>
              <p className="text-muted-foreground">
                Expert guidance to identify AI opportunities and develop implementation roadmaps for your business.
              </p>
            </div>

            <div className="service-card text-center fade-in-delay-2">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Custom AI Development</h3>
              <p className="text-muted-foreground">
                Bespoke AI solutions designed specifically for your industry, processes, and business objectives.
              </p>
            </div>

            <div className="service-card text-center fade-in-delay-3">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Integration & Support</h3>
              <p className="text-muted-foreground">
                Seamless integration with existing systems and ongoing support to ensure optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <ServicesSection />

      {/* Trust Section */}
      <TrustSection />

      {/* Why Choose Our Services */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Why Choose Our <span className="gradient-text">AI Services</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver AI solutions that truly transform your operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-ai-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proven Expertise</h3>
                  <p className="text-muted-foreground">Our team has delivered 500+ successful AI projects across various industries.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-ai-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
                  <p className="text-muted-foreground">Our AI solutions grow with your business, ensuring long-term value and ROI.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-ai-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                  <p className="text-muted-foreground">Continuous monitoring and support to ensure your AI systems perform optimally.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-ai-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
                  <p className="text-muted-foreground">Clear, upfront pricing with no hidden costs. You know exactly what you're paying for.</p>
                </div>
              </div>
            </div>

            <div className="fade-in-delay-1">
              <div className="bg-gradient-primary p-8 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6">
                  Let's discuss your AI needs and create a solution that drives real business value.
                </p>
                <Link to="/contact">
                  <Button variant="secondary" className="w-full">
                    Schedule Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Transform Your Business with AI Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of businesses that have already embraced AI to drive growth, efficiency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/ai-journey">
                <Button variant="outline" className="text-base px-8 py-4">
                  Learn About Our Process
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="btn-hero text-base">
                  Start Your AI Journey
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;