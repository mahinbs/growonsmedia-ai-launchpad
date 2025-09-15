import AIJourneySection from "@/components/AIJourneySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Award, TrendingUp } from "lucide-react";

const AIJourney = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 pt-32 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Your <span className="gradient-text">AI Transformation</span> Journey
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover how we guide businesses through their AI transformation with our proven methodology, delivering measurable results at every step.
            </p>
            <Link to="/contact">
              <Button className="btn-hero text-base">
                Start Your AI Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main AI Journey Section */}
      <AIJourneySection />

      {/* Success Metrics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Proven <span className="gradient-text">Results</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our AI transformation methodology has helped hundreds of businesses achieve remarkable outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center fade-in-delay-1">
              <div className="text-4xl font-bold gradient-text mb-2">500+</div>
              <p className="text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="text-center fade-in-delay-2">
              <div className="text-4xl font-bold gradient-text mb-2">98%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="text-center fade-in-delay-3">
              <div className="text-4xl font-bold gradient-text mb-2">300%</div>
              <p className="text-muted-foreground">Average ROI Increase</p>
            </div>
            <div className="text-center fade-in">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <p className="text-muted-foreground">Support & Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Methodology Works */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Why Our <span className="gradient-text">Methodology</span> Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our systematic approach ensures every AI implementation delivers maximum value and sustainable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="service-card text-center fade-in-delay-1">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
              <p className="text-muted-foreground">
                Our team of AI specialists, data scientists, and business analysts ensure comprehensive solutions.
              </p>
            </div>

            <div className="service-card text-center fade-in-delay-2">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Proven Process</h3>
              <p className="text-muted-foreground">
                Our three-phase methodology has been refined through hundreds of successful implementations.
              </p>
            </div>

            <div className="service-card text-center fade-in-delay-3">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Rigorous testing and validation ensure your AI solutions perform optimally in real-world scenarios.
              </p>
            </div>

            <div className="service-card text-center fade-in">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Continuous Improvement</h3>
              <p className="text-muted-foreground">
                We monitor performance and continuously optimize your AI solutions for maximum ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Industries We <span className="gradient-text">Transform</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our AI solutions have revolutionized operations across diverse industries, from healthcare to finance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Healthcare & Medical",
              "Financial Services",
              "E-commerce & Retail",
              "Manufacturing",
              "Education & Training",
              "Real Estate",
              "Hospitality & Tourism",
              "Agriculture & Food",
              "Transportation & Logistics"
            ].map((industry, index) => (
              <div key={industry} className="service-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="font-semibold text-lg">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Begin Your AI Transformation?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how our proven AI methodology can revolutionize your business operations and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button variant="secondary" className="text-base px-8 py-4">
                  Explore Our Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="text-base px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-ai-primary [&_svg]:text-white hover:[&_svg]:text-ai-primary">
                  Get Free AI Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIJourney;