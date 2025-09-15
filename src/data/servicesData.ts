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

export interface ServiceData {
  id: string;
  icon: any;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  detailedDescription: string;
  process: string[];
  deliverables: string[];
  timeline: string;
  startingPrice: string;
  isPopular?: boolean;
  accentColor: string;
  caseStudy?: {
    title: string;
    description: string;
    results: string[];
  };
  faq: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: ServiceData[] = [
  {
    id: "web-applications",
    icon: Globe,
    title: "Web Applications",
    description: "Custom web solutions built with modern frameworks",
    technologies: ["React", "Next.js", "TypeScript", "Node.js"],
    features: ["Responsive Design", "Performance Optimized", "SEO Ready", "Progressive Web App"],
    accentColor: "#14b8a6",
    detailedDescription: "Transform your business with custom web applications that deliver exceptional user experiences. Our team specializes in building scalable, performance-optimized web solutions using cutting-edge technologies like React, Next.js, and TypeScript. From simple business websites to complex enterprise applications, we deliver solutions that grow with your business.",
    process: [
      "Requirements Analysis & Planning",
      "UI/UX Design & Prototyping",
      "Frontend & Backend Development",
      "Testing & Quality Assurance",
      "Deployment & Launch",
      "Ongoing Support & Maintenance"
    ],
    deliverables: [
      "Fully responsive web application",
      "Source code & documentation",
      "Deployment & hosting setup",
      "Admin panel (if applicable)",
      "Training & support materials"
    ],
    timeline: "4-12 weeks",
    startingPrice: "$5,000",
    caseStudy: {
      title: "E-commerce Platform for Retail Chain",
      description: "Built a comprehensive e-commerce platform that increased online sales by 300%",
      results: ["300% increase in online sales", "50% faster page load times", "95% user satisfaction rate"]
    },
    faq: [
      {
        question: "Do you provide ongoing maintenance?",
        answer: "Yes, we offer comprehensive maintenance packages including security updates, feature enhancements, and technical support."
      },
      {
        question: "Can you integrate with existing systems?",
        answer: "Absolutely! We specialize in seamless integrations with existing CRM, ERP, and other business systems."
      }
    ]
  },
  {
    id: "mobile-applications",
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps",
    technologies: ["React Native", "Flutter", "iOS", "Android"],
    features: ["Cross Platform", "Native Performance", "App Store Ready", "Push Notifications"],
    isPopular: true,
    accentColor: "#8b5cf6",
    detailedDescription: "Reach your customers wherever they are with powerful mobile applications. We develop both native and cross-platform mobile apps that deliver exceptional performance and user experience. Our mobile solutions include push notifications, offline functionality, and seamless integration with your existing systems.",
    process: [
      "Market Research & Strategy",
      "Wireframing & UI/UX Design",
      "Cross-platform Development",
      "Native Feature Integration",
      "App Store Submission",
      "Launch & Marketing Support"
    ],
    deliverables: [
      "iOS & Android applications",
      "App Store listings & assets",
      "Backend API & dashboard",
      "Analytics integration",
      "User documentation"
    ],
    timeline: "6-16 weeks",
    startingPrice: "$10,000",
    caseStudy: {
      title: "Fitness Tracking App",
      description: "Developed a comprehensive fitness app with AI-powered workout recommendations",
      results: ["100K+ downloads in first month", "4.8 star rating", "85% user retention rate"]
    },
    faq: [
      {
        question: "Do you handle app store submissions?",
        answer: "Yes, we handle the complete app store submission process for both iOS and Android platforms."
      },
      {
        question: "Can you add features after launch?",
        answer: "Absolutely! We provide ongoing development services to add new features and improvements."
      }
    ]
  },
  {
    id: "saas-solutions",
    icon: Cloud,
    title: "SaaS Solutions",
    description: "Scalable software-as-a-service platforms",
    technologies: ["AWS", "Azure", "Microservices", "Docker"],
    features: ["Multi-tenant", "Auto Scaling", "Subscription Management", "Analytics Dashboard"],
    isPopular: true,
    accentColor: "#3b82f6",
    detailedDescription: "Build and launch your SaaS product with our comprehensive development services. We create scalable, multi-tenant platforms with built-in subscription management, analytics, and enterprise-grade security. Our SaaS solutions are designed to grow from startup to enterprise scale.",
    process: [
      "Business Model Analysis",
      "Architecture & Infrastructure Design",
      "MVP Development & Testing",
      "Multi-tenant Implementation",
      "Payment & Billing Integration",
      "Launch & Scale Optimization"
    ],
    deliverables: [
      "Complete SaaS platform",
      "Admin & user dashboards",
      "Subscription management system",
      "API documentation",
      "Deployment & monitoring setup"
    ],
    timeline: "12-24 weeks",
    startingPrice: "$25,000",
    caseStudy: {
      title: "Project Management SaaS",
      description: "Built a comprehensive project management platform serving 10,000+ users",
      results: ["10K+ active users", "$500K+ ARR achieved", "99.9% uptime maintained"]
    },
    faq: [
      {
        question: "How do you ensure scalability?",
        answer: "We use cloud-native architecture with auto-scaling capabilities and microservices design patterns."
      },
      {
        question: "Do you provide billing integration?",
        answer: "Yes, we integrate with Stripe, PayPal, and other payment processors for automated billing."
      }
    ]
  },
  {
    id: "blockchain-development",
    icon: Blocks,
    title: "Blockchain Development",
    description: "Decentralized applications and smart contracts",
    technologies: ["Ethereum", "Solidity", "Web3", "IPFS"],
    features: ["Smart Contracts", "DeFi Integration", "NFT Marketplace", "Token Economics"],
    accentColor: "#f59e0b",
    detailedDescription: "Enter the future of decentralized applications with our blockchain development services. We build secure smart contracts, DeFi protocols, NFT marketplaces, and custom blockchain solutions. Our team ensures security, scalability, and compliance with industry best practices.",
    process: [
      "Blockchain Strategy & Consultation",
      "Smart Contract Development",
      "Security Auditing & Testing",
      "Frontend dApp Integration",
      "Mainnet Deployment",
      "Community & Launch Support"
    ],
    deliverables: [
      "Smart contracts & dApp",
      "Security audit reports",
      "Web3 frontend interface",
      "Token economics design",
      "Documentation & guides"
    ],
    timeline: "8-20 weeks",
    startingPrice: "$15,000",
    caseStudy: {
      title: "DeFi Lending Platform",
      description: "Created a decentralized lending protocol with $50M+ TVL",
      results: ["$50M+ Total Value Locked", "Zero security incidents", "15K+ active users"]
    },
    faq: [
      {
        question: "How do you ensure smart contract security?",
        answer: "We follow rigorous testing protocols and conduct thorough security audits before deployment."
      },
      {
        question: "Do you provide tokenomics consulting?",
        answer: "Yes, we design comprehensive token economics and governance models for your project."
      }
    ]
  },
  {
    id: "ar-vr-development",
    icon: Headset,
    title: "AR / VR Development",
    description: "Immersive augmented and virtual reality experiences",
    technologies: ["Unity", "Unreal Engine", "ARKit", "ARCore"],
    features: ["3D Modeling", "Spatial Computing", "Hand Tracking", "Cross-platform VR"],
    accentColor: "#10b981",
    detailedDescription: "Create immersive experiences that blur the line between digital and physical worlds. Our AR/VR development services cover everything from training simulations to interactive marketing experiences. We leverage cutting-edge technologies to deliver engaging, high-performance immersive applications.",
    process: [
      "Concept Design & Storyboarding",
      "3D Modeling & Asset Creation",
      "AR/VR Application Development",
      "User Experience Testing",
      "Platform Optimization",
      "Deployment & Distribution"
    ],
    deliverables: [
      "AR/VR application",
      "3D models & animations",
      "Cross-platform builds",
      "User interaction guides",
      "Performance optimization"
    ],
    timeline: "10-18 weeks",
    startingPrice: "$20,000",
    caseStudy: {
      title: "Virtual Training Platform",
      description: "Developed VR training simulation reducing training time by 60%",
      results: ["60% reduction in training time", "95% knowledge retention", "50+ enterprise clients"]
    },
    faq: [
      {
        question: "Which VR headsets do you support?",
        answer: "We support all major VR headsets including Oculus, HTC Vive, PlayStation VR, and mobile VR platforms."
      },
      {
        question: "Can you create AR experiences for mobile?",
        answer: "Yes, we develop AR applications for both iOS and Android using ARKit and ARCore."
      }
    ]
  },
  {
    id: "iot-development",
    icon: Wifi,
    title: "IoT Development",
    description: "Connected devices and IoT ecosystems",
    technologies: ["Arduino", "Raspberry Pi", "AWS IoT", "MQTT"],
    features: ["Sensor Integration", "Real-time Data", "Remote Monitoring", "Edge Computing"],
    accentColor: "#f97316",
    detailedDescription: "Connect your physical world to the digital realm with our IoT development services. We create comprehensive IoT ecosystems including device firmware, cloud infrastructure, and mobile applications for monitoring and control. Our solutions enable real-time data collection, analysis, and automated responses.",
    process: [
      "IoT Architecture Design",
      "Hardware & Sensor Integration",
      "Firmware Development",
      "Cloud Platform Setup",
      "Mobile App Development",
      "Testing & Deployment"
    ],
    deliverables: [
      "Custom IoT devices",
      "Cloud monitoring platform",
      "Mobile control applications",
      "Real-time dashboards",
      "Data analytics tools"
    ],
    timeline: "12-20 weeks",
    startingPrice: "$18,000",
    caseStudy: {
      title: "Smart Factory Solution",
      description: "Implemented IoT system reducing energy costs by 40%",
      results: ["40% energy cost reduction", "99.5% sensor uptime", "Real-time monitoring for 500+ devices"]
    },
    faq: [
      {
        question: "Do you provide hardware as well?",
        answer: "We can source and customize hardware components, or work with your existing hardware infrastructure."
      },
      {
        question: "How do you ensure data security?",
        answer: "We implement end-to-end encryption, secure authentication, and follow IoT security best practices."
      }
    ]
  },
  {
    id: "game-development",
    icon: Gamepad2,
    title: "Game Development",
    description: "Engaging games for multiple platforms",
    technologies: ["Unity", "Unreal Engine", "C#", "JavaScript"],
    features: ["2D/3D Games", "Multiplayer", "In-app Purchases", "Cross-platform"],
    accentColor: "#ec4899",
    detailedDescription: "Bring your game ideas to life with our comprehensive game development services. From casual mobile games to complex PC and console titles, we create engaging experiences that captivate players. Our games feature stunning graphics, smooth gameplay, and monetization strategies that drive success.",
    process: [
      "Game Design & Concept Art",
      "Prototype Development",
      "Asset Creation & Animation",
      "Core Gameplay Programming",
      "Testing & Polish",
      "Publishing & Marketing"
    ],
    deliverables: [
      "Complete game application",
      "Game assets & source code",
      "Monetization integration",
      "Analytics & tracking",
      "Publishing assistance"
    ],
    timeline: "16-30 weeks",
    startingPrice: "$30,000",
    caseStudy: {
      title: "Mobile Puzzle Game",
      description: "Created viral puzzle game with 5M+ downloads",
      results: ["5M+ downloads", "$2M+ revenue generated", "Featured in app stores"]
    },
    faq: [
      {
        question: "Which platforms can you develop for?",
        answer: "We develop for mobile (iOS/Android), PC (Windows/Mac), web browsers, and gaming consoles."
      },
      {
        question: "Do you handle game publishing?",
        answer: "Yes, we assist with app store submissions, marketing materials, and launch strategies."
      }
    ]
  },
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI Automation",
    description: "Intelligent automation for business processes",
    technologies: ["Python", "TensorFlow", "OpenAI", "Zapier"],
    features: ["Process Automation", "ML Models", "RPA", "Workflow Optimization"],
    isPopular: true,
    accentColor: "#06b6d4",
    detailedDescription: "Transform your business operations with intelligent automation powered by AI and machine learning. Our automation solutions reduce manual work, eliminate errors, and increase efficiency across your organization. From simple task automation to complex AI-driven decision making systems.",
    process: [
      "Process Analysis & Mapping",
      "AI Solution Design",
      "Model Development & Training",
      "Integration & Testing",
      "Deployment & Monitoring",
      "Optimization & Scaling"
    ],
    deliverables: [
      "Automated workflow systems",
      "AI models & algorithms",
      "Integration connectors",
      "Performance dashboards",
      "Training & documentation"
    ],
    timeline: "6-14 weeks",
    startingPrice: "$12,000",
    caseStudy: {
      title: "Invoice Processing Automation",
      description: "Automated invoice processing reducing manual work by 90%",
      results: ["90% reduction in manual work", "99.5% accuracy rate", "$100K+ annual savings"]
    },
    faq: [
      {
        question: "How do you identify automation opportunities?",
        answer: "We conduct comprehensive process audits to identify repetitive tasks suitable for automation."
      },
      {
        question: "Can you integrate with existing systems?",
        answer: "Yes, we specialize in integrating AI automation with your existing business systems and workflows."
      }
    ]
  },
  {
    id: "ai-calling-agency",
    icon: Phone,
    title: "AI Calling Agency",
    description: "AI-powered voice assistants and call automation",
    technologies: ["Voice AI", "NLP", "Twilio", "Speech Recognition"],
    features: ["Voice Bots", "Call Analytics", "Lead Qualification", "24/7 Availability"],
    accentColor: "#6366f1",
    detailedDescription: "Revolutionize your customer communications with AI-powered voice assistants. Our AI calling solutions handle customer service, lead qualification, appointment scheduling, and sales calls with natural conversation capabilities. Available 24/7 and capable of handling unlimited concurrent calls.",
    process: [
      "Voice Strategy & Script Design",
      "AI Voice Model Training",
      "Integration & Phone Setup",
      "Testing & Optimization",
      "Launch & Monitoring",
      "Performance Analytics"
    ],
    deliverables: [
      "AI voice assistant system",
      "Call routing & management",
      "Analytics dashboard",
      "CRM integration",
      "Training & support"
    ],
    timeline: "4-10 weeks",
    startingPrice: "$8,000",
    caseStudy: {
      title: "Lead Qualification System",
      description: "AI caller qualified 500+ leads monthly with 85% accuracy",
      results: ["500+ leads qualified monthly", "85% qualification accuracy", "300% increase in sales team efficiency"]
    },
    faq: [
      {
        question: "How natural do the AI voices sound?",
        answer: "Our AI voices are nearly indistinguishable from human speech with natural conversation flow."
      },
      {
        question: "Can the AI handle complex conversations?",
        answer: "Yes, our AI can handle multi-turn conversations and adapt to various customer responses."
      }
    ]
  },
  {
    id: "ai-development",
    icon: Brain,
    title: "AI Development",
    description: "Custom AI solutions and machine learning models",
    technologies: ["Python", "PyTorch", "OpenAI", "LangChain"],
    features: ["Custom AI Models", "ML Pipeline", "AI Integration", "Model Training"],
    accentColor: "#059669",
    detailedDescription: "Harness the power of artificial intelligence with custom AI solutions tailored to your business needs. From computer vision to natural language processing, we develop sophisticated AI models that solve complex business challenges and provide intelligent insights from your data.",
    process: [
      "AI Strategy & Use Case Analysis",
      "Data Collection & Preparation",
      "Model Development & Training",
      "Validation & Testing",
      "Deployment & Integration",
      "Monitoring & Optimization"
    ],
    deliverables: [
      "Custom AI models",
      "Training pipelines",
      "API endpoints",
      "Performance metrics",
      "Documentation & guides"
    ],
    timeline: "8-16 weeks",
    startingPrice: "$15,000",
    caseStudy: {
      title: "Predictive Maintenance AI",
      description: "AI model predicting equipment failures with 95% accuracy",
      results: ["95% prediction accuracy", "60% reduction in downtime", "$500K+ cost savings annually"]
    },
    faq: [
      {
        question: "Do you work with our existing data?",
        answer: "Yes, we can work with your existing data and help improve its quality for better AI performance."
      },
      {
        question: "How do you ensure model accuracy?",
        answer: "We use rigorous testing methodologies and continuous monitoring to maintain high accuracy."
      }
    ]
  },
  {
    id: "chatbot-development",
    icon: MessageSquare,
    title: "Chatbot Development",
    description: "Intelligent conversational AI for customer support",
    technologies: ["Dialogflow", "Rasa", "GPT-4", "WhatsApp API"],
    features: ["Multi-channel", "Natural Language", "Integration Ready", "Analytics"],
    accentColor: "#8b5cf6",
    detailedDescription: "Enhance your customer service with intelligent chatbots that provide instant, accurate responses 24/7. Our chatbots integrate seamlessly with your existing systems and can handle complex conversations across multiple channels including websites, WhatsApp, Facebook Messenger, and more.",
    process: [
      "Conversation Design",
      "Intent & Entity Mapping",
      "AI Training & Development",
      "Multi-channel Integration",
      "Testing & Optimization",
      "Launch & Monitoring"
    ],
    deliverables: [
      "Conversational AI chatbot",
      "Multi-channel integrations",
      "Admin dashboard",
      "Analytics & reporting",
      "Training materials"
    ],
    timeline: "4-8 weeks",
    startingPrice: "$6,000",
    caseStudy: {
      title: "E-commerce Support Bot",
      description: "Chatbot handling 80% of customer queries automatically",
      results: ["80% query automation", "24/7 customer support", "40% reduction in support costs"]
    },
    faq: [
      {
        question: "Which platforms can the chatbot work on?",
        answer: "Our chatbots work on websites, WhatsApp, Facebook Messenger, Telegram, and other messaging platforms."
      },
      {
        question: "Can the chatbot handle complex queries?",
        answer: "Yes, our AI chatbots can understand context and handle multi-turn conversations effectively."
      }
    ]
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful and intuitive user experiences",
    technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    accentColor: "#ec4899",
    detailedDescription: "Create stunning user experiences that drive engagement and conversions. Our UI/UX design services combine user research, psychology, and cutting-edge design principles to create interfaces that users love. From wireframes to high-fidelity prototypes, we ensure every interaction is intuitive and delightful.",
    process: [
      "User Research & Analysis",
      "Information Architecture",
      "Wireframing & User Flows",
      "Visual Design & Prototyping",
      "Usability Testing",
      "Design System Creation"
    ],
    deliverables: [
      "Complete design system",
      "High-fidelity mockups",
      "Interactive prototypes",
      "User journey maps",
      "Design specifications"
    ],
    timeline: "4-12 weeks",
    startingPrice: "$5,000",
    caseStudy: {
      title: "SaaS Platform Redesign",
      description: "Redesigned platform increasing user engagement by 150%",
      results: ["150% increase in user engagement", "60% reduction in support tickets", "95% user satisfaction score"]
    },
    faq: [
      {
        question: "Do you conduct user research?",
        answer: "Yes, we conduct comprehensive user research including interviews, surveys, and usability testing."
      },
      {
        question: "Can you work with our development team?",
        answer: "Absolutely! We collaborate closely with development teams to ensure seamless implementation."
      }
    ]
  },
  {
    id: "data-analytics",
    icon: BarChart3,
    title: "Data Analytics",
    description: "Business intelligence and data-driven insights",
    technologies: ["Python", "Tableau", "Power BI", "SQL"],
    features: ["Data Visualization", "Predictive Analytics", "Real-time Dashboards", "ETL Pipeline"],
    accentColor: "#3b82f6",
    detailedDescription: "Turn your data into actionable insights with our comprehensive analytics solutions. We help you collect, process, and analyze data to make informed business decisions. Our services include data warehousing, real-time dashboards, predictive analytics, and custom reporting solutions.",
    process: [
      "Data Assessment & Strategy",
      "Data Collection & Integration",
      "ETL Pipeline Development",
      "Dashboard & Visualization",
      "Analytics Model Creation",
      "Training & Knowledge Transfer"
    ],
    deliverables: [
      "Data analytics platform",
      "Interactive dashboards",
      "Automated reports",
      "Predictive models",
      "Documentation & training"
    ],
    timeline: "6-12 weeks",
    startingPrice: "$10,000",
    caseStudy: {
      title: "Retail Analytics Platform",
      description: "Analytics solution increasing sales insights and revenue by 25%",
      results: ["25% increase in revenue", "Real-time sales insights", "90% reduction in reporting time"]
    },
    faq: [
      {
        question: "What data sources can you connect?",
        answer: "We can connect virtually any data source including databases, APIs, spreadsheets, and cloud services."
      },
      {
        question: "Do you provide training on the analytics tools?",
        answer: "Yes, we provide comprehensive training to ensure your team can effectively use the analytics platform."
      }
    ]
  },
  {
    id: "cloud-computing",
    icon: Server,
    title: "Cloud Computing",
    description: "Scalable cloud infrastructure and deployment",
    technologies: ["AWS", "Azure", "GCP", "Kubernetes"],
    features: ["Auto Scaling", "Load Balancing", "Disaster Recovery", "Cost Optimization"],
    accentColor: "#10b981",
    detailedDescription: "Modernize your infrastructure with secure, scalable cloud solutions. We help businesses migrate to the cloud, optimize costs, and implement best practices for security and performance. Our cloud services ensure your applications are always available, secure, and performing at their best.",
    process: [
      "Cloud Strategy & Assessment",
      "Architecture Design",
      "Migration Planning",
      "Implementation & Testing",
      "Security & Compliance",
      "Optimization & Monitoring"
    ],
    deliverables: [
      "Cloud infrastructure setup",
      "Migration & deployment",
      "Security implementation",
      "Monitoring & alerts",
      "Cost optimization plan"
    ],
    timeline: "6-16 weeks",
    startingPrice: "$12,000",
    caseStudy: {
      title: "Enterprise Cloud Migration",
      description: "Migrated enterprise systems reducing costs by 45%",
      results: ["45% cost reduction", "99.9% uptime achieved", "50% improvement in performance"]
    },
    faq: [
      {
        question: "Which cloud providers do you work with?",
        answer: "We work with all major cloud providers including AWS, Microsoft Azure, and Google Cloud Platform."
      },
      {
        question: "Do you provide ongoing cloud management?",
        answer: "Yes, we offer comprehensive cloud management services including monitoring, optimization, and support."
      }
    ]
  }
];

export const getServiceByTitle = (title: string): ServiceData | undefined => {
  return servicesData.find(service => service.title === title);
};

export const getServiceById = (id: string): ServiceData | undefined => {
  return servicesData.find(service => service.id === id);
};