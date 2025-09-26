import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface TestimonialProps {
  variant?: "default" | "compact";
}

const TestimonialsSection = ({ variant = "default" }: TestimonialProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ projects: 0, satisfaction: 0, team: 0, support: 0 });
  const statsRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      content: "Growonsmedia transformed our business with their AI solutions. The web application they built increased our efficiency by 300% and our revenue by 150%. Their team's expertise in AI integration is unmatched.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLabs",
      company: "InnovateLabs",
      content: "The mobile app they developed exceeded all our expectations. The AI-powered features and intuitive design helped us acquire 50K+ users in the first month. Outstanding work and professional team.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, EcoSolutions",
      company: "EcoSolutions",
      content: "Working with Growonsmedia was a game-changer. Their AI automation solutions reduced our operational costs by 40% while improving customer satisfaction. Highly recommend their services.",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "David Thompson",
      role: "Marketing Director, GrowthCorp",
      company: "GrowthCorp",
      content: "The AI-powered chatbot and web platform they created revolutionized our customer service. Response times improved by 80% and customer satisfaction scores hit an all-time high.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Park",
      role: "Operations Manager, StreamlineHQ",
      company: "StreamlineHQ",
      content: "Exceptional development team! They delivered our complex SaaS platform on time and within budget. The AI features they implemented gave us a significant competitive advantage.",
      rating: 5,
      avatar: "LP"
    },
    {
      name: "James Wilson",
      role: "Product Manager, NextGen Solutions",
      company: "NextGen Solutions",
      content: "Their expertise in both web and mobile development is impressive. The cross-platform app they built serves 100K+ users daily with zero downtime. Truly professional service.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const displayedTestimonials = variant === "compact" ? testimonials.slice(0, 3) : testimonials;

  // Intersection Observer for counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Counter animation
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = { projects: 500, satisfaction: 98, team: 50, support: 24 };
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        projects: Math.floor(targets.projects * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
        team: Math.floor(targets.team * progress),
        support: Math.floor(targets.support * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-ai-primary text-ai-primary' : 'text-muted-foreground'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-ai-primary/10 to-ai-secondary/10"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl text-white">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTestimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/30 backdrop-blur-sm border border-white/20 hover:border-ai-primary/50 transition-all duration-300 hover:scale-105 relative fade-in-delay-1">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-8 h-8 text-ai-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <p className="text-white/90 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-white">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                    <p className="text-ai-primary text-xs font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl lg:text-5xl font-bold gradient-text mb-2">
              {counts.projects}+
            </div>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-5xl font-bold gradient-text mb-2">
              {counts.satisfaction}%
            </div>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-5xl font-bold gradient-text mb-2">
              {counts.team}+
            </div>
            <p className="text-muted-foreground">Team Members</p>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-5xl font-bold gradient-text mb-2">
              {counts.support}/7
            </div>
            <p className="text-muted-foreground">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;