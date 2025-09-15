import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Blocks, 
  Headset, 
  Wifi, 
  Gamepad2, 
  Bot, 
  Phone, 
  Brain, 
  MessageSquare, 
  Palette, 
  BarChart3, 
  Server 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Applications",
      description: "Custom web solutions built with modern frameworks",
      technologies: ["React", "Next.js", "TypeScript", "Node.js"],
      features: ["Responsive Design", "Performance Optimized", "SEO Ready", "Progressive Web App"]
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps",
      technologies: ["React Native", "Flutter", "iOS", "Android"],
      features: ["Cross Platform", "Native Performance", "App Store Ready", "Push Notifications"]
    },
    {
      icon: Cloud,
      title: "SaaS Solutions",
      description: "Scalable software-as-a-service platforms",
      technologies: ["AWS", "Azure", "Microservices", "Docker"],
      features: ["Multi-tenant", "Auto Scaling", "Subscription Management", "Analytics Dashboard"]
    },
    {
      icon: Blocks,
      title: "Blockchain Development",
      description: "Decentralized applications and smart contracts",
      technologies: ["Ethereum", "Solidity", "Web3", "IPFS"],
      features: ["Smart Contracts", "DeFi Integration", "NFT Marketplace", "Token Economics"]
    },
    {
      icon: Headset,
      title: "AR / VR Development",
      description: "Immersive augmented and virtual reality experiences",
      technologies: ["Unity", "Unreal Engine", "ARKit", "ARCore"],
      features: ["3D Modeling", "Spatial Computing", "Hand Tracking", "Cross-platform VR"]
    },
    {
      icon: Wifi,
      title: "IoT Development",
      description: "Connected devices and IoT ecosystems",
      technologies: ["Arduino", "Raspberry Pi", "AWS IoT", "MQTT"],
      features: ["Sensor Integration", "Real-time Data", "Remote Monitoring", "Edge Computing"]
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Engaging games for multiple platforms",
      technologies: ["Unity", "Unreal Engine", "C#", "JavaScript"],
      features: ["2D/3D Games", "Multiplayer", "In-app Purchases", "Cross-platform"]
    },
    {
      icon: Bot,
      title: "AI Automation",
      description: "Intelligent automation for business processes",
      technologies: ["Python", "TensorFlow", "OpenAI", "Zapier"],
      features: ["Process Automation", "ML Models", "RPA", "Workflow Optimization"]
    },
    {
      icon: Phone,
      title: "AI Calling Agency",
      description: "AI-powered voice assistants and call automation",
      technologies: ["Voice AI", "NLP", "Twilio", "Speech Recognition"],
      features: ["Voice Bots", "Call Analytics", "Lead Qualification", "24/7 Availability"]
    },
    {
      icon: Brain,
      title: "AI Development",
      description: "Custom AI solutions and machine learning models",
      technologies: ["Python", "PyTorch", "OpenAI", "LangChain"],
      features: ["Custom AI Models", "ML Pipeline", "AI Integration", "Model Training"]
    },
    {
      icon: MessageSquare,
      title: "Chatbot Development",
      description: "Intelligent conversational AI for customer support",
      technologies: ["Dialogflow", "Rasa", "GPT-4", "WhatsApp API"],
      features: ["Multi-channel", "Natural Language", "Integration Ready", "Analytics"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user experiences",
      technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Business intelligence and data-driven insights",
      technologies: ["Python", "Tableau", "Power BI", "SQL"],
      features: ["Data Visualization", "Predictive Analytics", "Real-time Dashboards", "ETL Pipeline"]
    },
    {
      icon: Server,
      title: "Cloud Computing",
      description: "Scalable cloud infrastructure and deployment",
      technologies: ["AWS", "Azure", "GCP", "Kubernetes"],
      features: ["Auto Scaling", "Load Balancing", "Disaster Recovery", "Cost Optimization"]
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">AI-Powered</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From web applications to AI automation, we deliver comprehensive solutions 
            that transform your business with cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="mb-6">
                <div className="w-16 h-16 bg-ai-glow rounded-2xl flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-ai-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-ai-primary">Technologies Used</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2 text-ai-primary">Key Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-ai-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button size="sm" className="flex-1 bg-ai-primary hover:bg-ai-secondary">
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-hero">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;