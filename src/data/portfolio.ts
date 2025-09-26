// Import all portfolio images
// Web Development Portfolio Images
import autopilot from "../assets/portfolio/web-development/Autopilot.png";
import theLadders from "../assets/portfolio/web-development/The Ladders.png";
import hugeInc from "../assets/portfolio/web-development/Huge Inc.png";
import codeHelp from "../assets/portfolio/web-development/CodeHelp.png";

// E-commerce Portfolio Images
import bholaFactory from "../assets/portfolio/ecommerce-websites/Bhola Factory.png";
import davisGrill from "../assets/portfolio/ecommerce-websites/Davis Grill.png";
import myTeFashion from "../assets/portfolio/ecommerce-websites/MyTe Fashion.png";
import banjaaran from "../assets/portfolio/ecommerce-websites/Banjaaran.png";
import gullyLabs from "../assets/portfolio/ecommerce-websites/GullyLabs.png";

// App Development Portfolio Images
import akashMegaMartApp from "../assets/portfolio/app-development/akash_mega_mart-app.webp";
import feelitApp from "../assets/portfolio/app-development/feelit_app.webp";
import hayaty from "../assets/portfolio/app-development/Hayaty.webp";
import naseh from "../assets/portfolio/app-development/Naseh (iOS - ناصح).webp";
import rentop from "../assets/portfolio/app-development/rentop.webp";
import zignaAutoSnap from "../assets/portfolio/app-development/Zigna AutoSnap.webp";
import klikomics from "../assets/portfolio/app-development/klikomics.webp";
import planta from "../assets/portfolio/app-development/Planta - Plant & Garden Care.webp";

// AI Projects Portfolio Images
import findMyAITool from "../assets/portfolio/ai/Find My AI Tool.png";
import vyroAI from "../assets/portfolio/ai/AI Art Generator – Vyro AI.webp";
import musicly from "../assets/portfolio/ai/Musicly – AI Music Generator.webp";

// Blockchain Projects Portfolio Images
import projectButterfly from "../assets/portfolio/blockchain/Project Butterfly.png";
import earlynctr from "../assets/portfolio/blockchain/Earlynctr.png";
import solalgo from "../assets/portfolio/blockchain/Solalgo.png";

// Chatbot Projects Portfolio Images
import chatly from "../assets/portfolio/chatbot/Chatly.webp";
import dawnAI from "../assets/portfolio/chatbot/Dawn AI.webp";
import genzArt from "../assets/portfolio/chatbot/GENZ Art.webp";

// Game Development Portfolio Images
import actionPlayerGames from "../assets/portfolio/games/2 3 4 Player Mini Games.webp";
import wormsZone from "../assets/portfolio/games/Worms Zone .io - Hungry Snake.webp";
import sahi from "../assets/portfolio/games/Sahi - Group Voice Room.webp";

// Recent Projects Portfolio Images
import projectsyAI from "../assets/portfolio/recent/Projectsy.ai – AI-Powered Project & Task Management Platform.jpg";
import speaksify from "../assets/portfolio/recent/Speaksify – AI-Powered Public Speaking Coach.jpg";
import virtuTeams from "../assets/portfolio/recent/VirtuTeams – Team Management & Remote Operations Platform.jpg";

// portfolio images (web development)
export const webDevelopmentPortfolio = [
  {
    id: 1,
    image: autopilot,
    title: "Autopilot",
    description:
      "Marketing automation platform allowing businesses to automate customer journeys using visual flowcharts with modern animations",
    link: "https://autopilot.com",
  },
  {
    id: 2,
    image: theLadders,
    title: "The Ladders",
    description:
      "Executive-level job opportunities platform balancing editorial content, career advice, and job listings",
    link: "https://theladders.com",
  },
  {
    id: 3,
    image: hugeInc,
    title: "Huge Inc",
    description:
      "Creative agency portfolio showcasing digital experiences with storytelling, micro-interactions, and parallax visuals",
    link: "https://hugeinc.com",
  },
  {
    id: 4,
    image: codeHelp,
    title: "CodeHelp",
    description:
      "Learning platform offering coding tutorials, mentorship, and job prep with community focus and structured courses",
    link: "https://codehelp.in",
  },
  {
    id: 5,
    image: planta,
    title: "Planta",
    description:
      "Wellness-focused app helping users cultivate healthy lifestyle habits with reminders and progress tracking",
    link: "https://planta.com",
  },
];

// E-commerce websites portfolio
export const ecommerceWebsitesPortfolio = [
  {
    id: 1,
    image: bholaFactory,
    title: "Bhola Factory",
    description:
      "Premium Indian ethnic wear brand with full-scale WooCommerce backend and custom category pages",
    link: "https://bholafactory.com",
  },
  {
    id: 2,
    image: davisGrill,
    title: "Davis Grill",
    description:
      "Restaurant e-commerce with online food ordering, menu exploration, and delivery integration",
    link: "https://davisgrill.com",
  },
  {
    id: 3,
    image: myTeFashion,
    title: "MyTe Fashion",
    description:
      "Youthful, vibrant shopping experience with product galleries and lookbook-style pages",
    link: "https://mytefashion.com",
  },
  {
    id: 4,
    image: banjaaran,
    title: "Banjaaran",
    description:
      "High-end footwear label blending traditional Indian craftsmanship with modern e-commerce",
    link: "https://banjaaran.com",
  },
  {
    id: 5,
    image: gullyLabs,
    title: "GullyLabs",
    description:
      "Urban streetwear platform with bold designs, seasonal collections, and fast browsing",
    link: "https://gullylabs.com",
  },
];

// portfolio images (app development)
export const appDevelopmentPortfolio = [
  {
    id: 1,
    image: akashMegaMartApp,
    title: "Akash Mega Mart",
    description:
      "User-friendly mobile shopping platform for groceries, fashion items, electronics, and household products with smooth UI and secure checkout",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
    category: "E-commerce",
  },
  {
    id: 2,
    image: feelitApp,
    title: "Feelit",
    description:
      "Mood-based social media platform where users post thoughts, stories, and images based on emotions for mental wellness",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
    category: "Social Networking",
  },
  {
    id: 3,
    image: hayaty,
    title: "Hayaty (iOS & Android)",
    description:
      "Healthcare and lifestyle management app for patients and caregivers with medication reminders and health records",
    link: "https://hayaty.com",
    iosLink: "https://apps.apple.com/app/hayaty",
    androidLink: "https://play.google.com/store/apps/details?id=com.hayaty.app",
    category: "Health / Wellness",
  },
  {
    id: 4,
    image: naseh,
    title: "Naseh (iOS & Android - ناصح)",
    description:
      "Islamic guidance and personal development app featuring daily motivational content and spiritual reminders",
    link: "https://naseh.com",
    iosLink: "https://apps.apple.com/app/naseh",
    androidLink: "https://play.google.com/store/apps/details?id=com.naseh.app",
    category: "Religion / Lifestyle",
  },
  {
    id: 5,
    image: rentop,
    title: "Rentop",
    description:
      "Marketplace app allowing users to rent out or lease items with product listings, booking calendar, and payment gateway",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
    category: "Marketplace / Rentals",
  },
  {
    id: 6,
    image: zignaAutoSnap,
    title: "Zigna AutoSnap",
    description:
      "Real estate photography app helping agents capture professional property photos with guided photography and editing",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
    category: "Real Estate / Photography",
  },
  {
    id: 7,
    image: klikomics,
    title: "Klikomics",
    description:
      "Digital comic reading app with animated panels, original content, and smooth navigation for graphic novel enthusiasts",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
    category: "Entertainment / Comics",
  },
  {
    id: 8,
    image: planta,
    title: "Planta",
    description:
      "Wellness-focused app helping users cultivate healthy lifestyle habits with reminders and progress tracking",
    link: "https://planta.com",
    category: "Health / Wellness",
  },
];

// AI Projects portfolio
export const aiProjectsPortfolio = [
  {
    id: 1,
    image: findMyAITool,
    title: "Find My AI Tool",
    description:
      "Discovery platform offering curated listings, reviews, and rankings of AI tools across categories like design, automation, and productivity",
    link: "https://findmyaitool.com",
    category: "AI Directory / SaaS Review",
  },
  {
    id: 2,
    image: vyroAI,
    title: "AI Art Generator – Vyro AI",
    description:
      "App using machine learning and neural style transfer to convert photos into stunning AI-generated artwork with multiple artistic styles",
    link: "https://vyro.ai",
    category: "Art / Photo Editing",
  },
  {
    id: 3,
    image: musicly,
    title: "Musicly – AI Music Generator",
    description:
      "App transforming text prompts and moods into original AI-generated music with background tracks and theme-based soundscapes",
    link: "https://musicly.ai",
    category: "AI Music / Audio Creation",
  },
];

// Blockchain Projects portfolio
export const blockchainProjectsPortfolio = [
  {
    id: 1,
    image: projectButterfly,
    title: "Project Butterfly",
    description:
      "Eco-conscious blockchain initiative supporting carbon offsetting via NFT-backed environmental assets with real-world impact",
    link: "https://projectbutterfly.com",
    category: "Sustainability / NFT Utility",
  },
  {
    id: 2,
    image: earlynctr,
    title: "Earlynctr",
    description:
      "Curated investment platform for early-stage crypto projects and blockchain startups with vetted listings and community voting",
    link: "https://earlynctr.com",
    category: "Crypto Investment / Startup Incubation",
  },
  {
    id: 3,
    image: solalgo,
    title: "Solalgo",
    description:
      "Analytics engine built for the Solana ecosystem providing DApp performance metrics, smart contract tracking, and real-time data visualization",
    link: "https://solalgo.com",
    category: "Blockchain Analytics / Developer Tools",
  },
];

// Chatbot Projects portfolio
export const chatbotProjectsPortfolio = [
  {
    id: 1,
    image: chatly,
    title: "Chatly – AI Chatbot",
    description:
      "Highly engaging AI chatbot that mimics human-like conversations using advanced natural language processing for productivity and companionship",
    link: "https://chatly.ai",
    category: "Productivity / Companionship",
  },
  {
    id: 2,
    image: dawnAI,
    title: "Dawn AI Chatbot",
    description:
      "Intelligent virtual assistant integrating text-based conversation with art generation, creative ideation, and inspirational prompts",
    link: "https://dawnai.com",
    category: "AI Art & Creative Assistant",
  },
  {
    id: 3,
    image: genzArt,
    title: "GENZ Art Chatbot",
    description:
      "Vibrant chatbot platform for Gen Z users to create and share AI-generated artworks through interactive chat-based prompts",
    link: "https://genzart.com",
    category: "Gen Z / Art & Expression",
  },
];

// Game Development portfolio
export const gameDevelopmentPortfolio = [
  {
    id: 1,
    image: actionPlayerGames,
    title: "Action Player Games",
    description:
      "Diverse collection of fast-paced arcade-style mini-games designed to keep users engaged with adrenaline-packed gameplay",
    link: "https://actionplayergames.com",
    category: "Action / Arcade Bundle",
  },
  {
    id: 2,
    image: wormsZone,
    title: "Worms Zone.io",
    description:
      "Addictive .io-style snake game where players control colorful worms competing to grow the biggest with real-time multiplayer",
    link: "https://wormszone.io",
    category: "Multiplayer / Casual Arcade",
  },
  {
    id: 3,
    image: sahi,
    title: "Sahi - Group Voice Room",
    description:
      "Interactive game world combining chatting with mini-games and metaverse-style social experience",
    link: "https://sahi.com",
    category: "Social / Simulation",
  },
];

// Recent projects
export const recentProjects = [
  {
    id: 1,
    image: projectsyAI,
    title: "Projectsy.ai",
    description: "AI-Powered Project & Task Management Platform",
    link: "https://projectsy.ai",
    category: "saas",
    type: "SaaS Project",
  },
  {
    id: 2,
    image: speaksify,
    title: "Speaksify",
    description: "AI-Powered Public Speaking Coach",
    link: "https://speaksify.com",
    category: "ai",
    type: "AI Calling Agency",
  },
  {
    id: 3,
    image: virtuTeams,
    title: "VirtuTeams",
    description: "Team Management & Remote Operations Platform",
    link: "https://virtuteams.com",
    category: "saas",
    type: "SaaS Project",
  },
];
