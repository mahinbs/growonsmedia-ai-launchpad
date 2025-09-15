import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-ai-illustration.jpg";
import { ArrowRight, Sparkles, Target, Users } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-6 py-20 pt-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8 fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  Transform Your Business with{" "}
                  <span className="gradient-text">AI Innovation</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                  We're GrowonsMedia AI - your partners in digital transformation. From intelligent chatbots to advanced AI solutions, we turn your vision into reality.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="btn-hero text-base w-full sm:w-auto">
                    Launch Your Vision
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="btn-outline-hero text-base w-full sm:w-auto">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative fade-in-delay-1">
              <div className="relative z-10">
                <img
                  src={heroImage}
                  alt="AI Innovation and Technology"
                  className="w-full h-auto rounded-3xl shadow-soft ai-glow float"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">GrowonsMedia AI?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine cutting-edge AI technology with deep business expertise to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="service-card text-center fade-in-delay-1">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation First</h3>
              <p className="text-muted-foreground">
                We leverage the latest AI technologies to create solutions that put you ahead of the competition.
              </p>
            </div>

            <div className="service-card text-center fade-in-delay-2">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Results Driven</h3>
              <p className="text-muted-foreground">
                Every solution is designed with your specific business goals and measurable outcomes in mind.
              </p>
            </div>

            <div className="service-card text-center fade-in-delay-3">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
              <p className="text-muted-foreground">
                Our team of AI specialists and business experts ensures successful project delivery.
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of businesses that have already embraced AI to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/ai-journey">
                <Button variant="secondary" className="text-base px-8 py-4">
                  Discover Our AI Journey
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="text-base px-8 py-4 border-white text-white hover:bg-white hover:text-ai-primary">
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;