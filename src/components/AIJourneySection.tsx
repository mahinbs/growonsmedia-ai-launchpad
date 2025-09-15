import { Search, TrendingUp, Zap } from "lucide-react";

const AIJourneySection = () => {
  const steps = [
    {
      icon: Search,
      title: "Analyze",
      description: "Assess workflows & uncover AI opportunities",
      details: "We dive deep into your current processes to identify where AI can make the biggest impact on your business efficiency and growth."
    },
    {
      icon: TrendingUp,
      title: "Evaluate", 
      description: "Prioritize ROI, efficiency, and readiness",
      details: "Our experts analyze potential returns, implementation complexity, and your organization's readiness for AI transformation."
    },
    {
      icon: Zap,
      title: "Develop",
      description: "Deploy AI & automation seamlessly",
      details: "We build, test, and deploy custom AI solutions that integrate smoothly with your existing systems and workflows."
    }
  ];

  return (
    <section id="journey" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            From Vision to Reality: Your{" "}
            <span className="gradient-text">3-Step AI-Transformation</span> Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We guide you through a proven process that transforms your business with AI-driven solutions, 
            ensuring maximum impact and seamless integration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>

              <div className="service-card h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-ai-glow rounded-2xl flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-ai-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 gradient-text">{step.title}</h3>
                  <p className="text-lg text-muted-foreground mb-4">{step.description}</p>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.details}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-primary"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIJourneySection;