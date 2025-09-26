import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";
import {
  webDevelopmentPortfolio,
  ecommerceWebsitesPortfolio,
  appDevelopmentPortfolio,
  aiProjectsPortfolio,
  blockchainProjectsPortfolio,
  chatbotProjectsPortfolio,
  gameDevelopmentPortfolio,
  recentProjects,
} from "@/data/portfolio";

interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
  category?: string;
  iosLink?: string;
  androidLink?: string;
  type?: string;
}

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("recent");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const categories = [
    { id: "recent", label: "Recent Projects", data: recentProjects },
    { id: "web", label: "Web Development", data: webDevelopmentPortfolio },
    { id: "ecommerce", label: "E-commerce", data: ecommerceWebsitesPortfolio },
    { id: "app", label: "App Development", data: appDevelopmentPortfolio },
    { id: "ai", label: "AI Projects", data: aiProjectsPortfolio },
    { id: "blockchain", label: "Blockchain", data: blockchainProjectsPortfolio },
    { id: "chatbot", label: "Chatbots", data: chatbotProjectsPortfolio },
    { id: "games", label: "Games", data: gameDevelopmentPortfolio },
  ];

  const activeData = categories.find(cat => cat.id === activeCategory)?.data || [];

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleProjectClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 fade-in px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl mb-4 sm:mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our diverse portfolio of successful projects across web development, 
            mobile apps, AI solutions, and more. Each project showcases our expertise 
            and commitment to delivering exceptional results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-ai-primary text-white shadow-lg hover:bg-ai-primary/90"
                  : "bg-card/30 text-muted-foreground hover:text-foreground hover:bg-card/50 border-white/20"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {activeData.map((item: PortfolioItem) => (
            <div
              key={item.id}
              className="group service-card overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Overlay */}
                {hoveredItem === item.id && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 transition-all duration-300">
                    <Button
                      onClick={() => handleProjectClick(item.link)}
                      className="bg-ai-primary hover:bg-ai-primary/90 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Project Title & Category */}
                <div className="flex items-start gap-2 justify-between mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-ai-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  {item.category && (
                    <Badge 
                      variant="secondary" 
                      className="text-xs bg-ai-primary/10 text-ai-primary border-0"
                    >
                      {item.category}
                    </Badge>
                  )}
                </div>

                {/* Project Description */}
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Project Links */}
                <div className="flex flex-wrap gap-2">
                  <Button
                    onClick={() => handleProjectClick(item.link)}
                    variant="outline"
                    size="sm"
                    className="flex items-center text-xs border-white/20 hover:bg-ai-primary hover:text-white hover:border-ai-primary transition-all duration-300"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View Live
                  </Button>
                  
                  {item.iosLink && (
                    <Button
                      onClick={() => handleProjectClick(item.iosLink!)}
                      variant="outline"
                      size="sm"
                      className="flex items-center text-xs border-white/20 hover:bg-ai-primary hover:text-white hover:border-ai-primary transition-all duration-300"
                    >
                      <Star className="w-3 h-3 mr-1" />
                      iOS
                    </Button>
                  )}
                  
                  {item.androidLink && (
                    <Button
                      onClick={() => handleProjectClick(item.androidLink!)}
                      variant="outline"
                      size="sm"
                      className="flex items-center text-xs border-white/20 hover:bg-ai-primary hover:text-white hover:border-ai-primary transition-all duration-300"
                    >
                      <Star className="w-3 h-3 mr-1" />
                      Android
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="service-card max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Join the ranks of successful businesses that have transformed their 
              operations with our AI-powered solutions.
            </p>
            <Button 
              className="btn-hero px-8 py-4 text-lg font-semibold"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Your Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
