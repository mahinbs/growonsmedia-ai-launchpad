import { Search, TrendingUp, Zap } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import analyzeImg from "@/assets/analyze-illustration.png";
import evaluateImg from "@/assets/evaluate-illustration.png";
import developImg from "@/assets/develop-illustration.png";

const AIJourneySection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const steps = [
    {
      icon: Search,
      title: "Analyze",
      description: "Assess workflows & uncover AI opportunities",
      details: "We dive deep into your current processes to identify where AI can make the biggest impact on your business efficiency and growth.",
      image: analyzeImg,
      letter: "A"
    },
    {
      icon: TrendingUp,
      title: "Evaluate", 
      description: "Prioritize ROI, efficiency, and readiness",
      details: "Our experts analyze potential returns, implementation complexity, and your organization's readiness for AI transformation.",
      image: evaluateImg,
      letter: "E"
    },
    {
      icon: Zap,
      title: "Develop",
      description: "Deploy AI & automation seamlessly",
      details: "We build, test, and deploy custom AI solutions that integrate smoothly with your existing systems and workflows.",
      image: developImg,
      letter: "D"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through the section
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (sectionHeight + windowHeight)));
        const stepIndex = Math.floor(scrollProgress * steps.length);
        setActiveStep(Math.min(stepIndex, steps.length - 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  return (
    <section id="journey" ref={sectionRef} className="py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            From Vision to Reality: Your{" "}
            <span className="gradient-text">3-Step AI-Transformation</span> Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We guide you through a proven process that transforms your business with AI-driven solutions, 
            ensuring maximum impact and seamless integration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Side - Step Navigation */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.3, x: -50 }}
                animate={{ 
                  opacity: activeStep >= index ? 1 : 0.3,
                  x: activeStep >= index ? 0 : -50,
                  scale: activeStep === index ? 1.05 : 1
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative flex items-center space-x-6 p-6 rounded-2xl transition-all duration-500 ${
                  activeStep === index 
                    ? 'bg-gradient-to-r from-ai-primary/10 to-ai-secondary/10 border-2 border-ai-primary/30' 
                    : 'bg-card/50 border border-border/50'
                }`}
              >
                {/* AED Letter Emphasis */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold transition-all duration-500 ${
                  activeStep === index 
                    ? 'bg-gradient-primary text-white shadow-glow' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {step.letter}
                </div>
                
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-2 transition-all duration-500 ${
                    activeStep === index ? 'gradient-text' : 'text-foreground'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Step Number */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                  activeStep >= index 
                    ? 'bg-ai-primary text-white' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Content Display */}
          <div className="relative">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-center"
            >
              {/* Illustration */}
              <div className="mb-8 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="w-80 h-80 mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-ai-primary/20 to-ai-secondary/20 p-8 shadow-glow">
                    <img 
                      src={steps[activeStep].image} 
                      alt={steps[activeStep].title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 w-12 h-12 bg-ai-accent rounded-full flex items-center justify-center shadow-lg"
                  >
                    {(() => {
                      const IconComponent = steps[activeStep].icon;
                      return <IconComponent className="w-6 h-6 text-white" />;
                    })()}
                  </motion.div>
                </motion.div>
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold gradient-text">
                  {steps[activeStep].title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
                  {steps[activeStep].details}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIJourneySection;