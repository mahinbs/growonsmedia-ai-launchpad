import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CONTACT_INFO } from "@/config/contact";
import { MapPin, Users, Award, Globe, Target, Heart, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 pt-32 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="gradient-text">GrowonsMedia AI</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're passionate AI innovators dedicated to transforming businesses through intelligent technology solutions. Our mission is to make AI accessible, practical, and profitable for organizations of all sizes.
            </p>
            <Link to="/contact">
              <Button className="btn-hero text-base">
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a vision to democratize artificial intelligence, GrowonsMedia AI has evolved into a leading provider of AI solutions that drive real business transformation. We believe that AI shouldn't be a luxury reserved for tech giants – it should be accessible to every business ready to innovate.
                </p>
                <p>
                  Our journey began with a simple observation: while AI technology was advancing rapidly, most businesses struggled to harness its potential. We set out to bridge this gap by creating practical, results-driven AI solutions that solve real-world business challenges.
                </p>
                <p>
                  Today, we've helped over 500 businesses across diverse industries implement AI solutions that have generated measurable results – from reducing operational costs by up to 40% to increasing customer satisfaction by 85%.
                </p>
              </div>
            </div>

            <div className="fade-in-delay-1">
              <div className="bg-gradient-primary p-8 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-6">Our Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-sm opacity-90">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">98%</div>
                    <div className="text-sm opacity-90">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">300%</div>
                    <div className="text-sm opacity-90">Average ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-sm opacity-90">Support Coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These core values guide every decision we make and every solution we create.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="service-card text-center fade-in-delay-1">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly push the boundaries of what's possible with AI, staying at the forefront of technological advancement.
              </p>
            </div>

            <div className="service-card text-center fade-in-delay-2">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Results-Focused</h3>
              <p className="text-muted-foreground">
                Every solution we create is designed with measurable business outcomes and ROI in mind.
              </p>
            </div>

            <div className="service-card text-center fade-in-delay-3">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Client Success</h3>
              <p className="text-muted-foreground">
                Your success is our success. We're not just vendors – we're your long-term AI transformation partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Global <span className="gradient-text">Presence</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              With offices across continents, we serve clients worldwide while maintaining the personal touch of a local partner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="service-card fade-in-delay-1">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">India Headquarters</h3>
                  <p className="text-muted-foreground mb-4">
                    {CONTACT_INFO.offices.india.address}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Our main development center and AI research hub, where innovation meets execution.
                  </p>
                </div>
              </div>
            </div>

            <div className="service-card fade-in-delay-2">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">USA Office</h3>
                  <p className="text-muted-foreground mb-4">
                    {CONTACT_INFO.offices.usa.address}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Strategic operations center serving North American clients with local expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Expertise */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Expert <span className="gradient-text">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our multidisciplinary team combines deep technical expertise with business acumen to deliver solutions that work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="service-card text-center fade-in-delay-1">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Specialists</h3>
              <p className="text-muted-foreground">
                Machine learning engineers and data scientists with years of real-world experience.
              </p>
            </div>

            <div className="service-card text-center fade-in-delay-2">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Business Analysts</h3>
              <p className="text-muted-foreground">
                Strategic thinkers who understand how to align AI solutions with business objectives.
              </p>
            </div>

            <div className="service-card text-center fade-in-delay-3">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Project Managers</h3>
              <p className="text-muted-foreground">
                Certified professionals ensuring projects are delivered on time and within budget.
              </p>
            </div>

            <div className="service-card text-center fade-in">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Support Team</h3>
              <p className="text-muted-foreground">
                Dedicated support specialists providing 24/7 assistance and system monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how our expertise and passion for AI innovation can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button variant="secondary" className="text-base px-8 py-4">
                  Explore Our Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="text-base px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-ai-primary [&_svg]:text-white hover:[&_svg]:text-ai-primary">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;