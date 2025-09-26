import { openWhatsApp, getFormattedWhatsAppNumber } from "@/lib/whatsapp";
import { CONTACT_INFO } from "@/config/contact";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-white pt-12 sm:pt-16 pb-4">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Three Column Layout */}
        <div className="grid sm:flex justify-between gap-8 mb-8">
          {/* Left Section - Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg uppercase">CONTACT</h4>
            <div className="space-y-3">
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-white hover:text-ai-primary transition-colors text-sm block">
                {CONTACT_INFO.email}
              </a>
              <button 
                onClick={() => openWhatsApp("Hi! I'm interested in your AI services.")}
                className="text-white hover:text-ai-primary transition-colors text-sm block"
              >
                {getFormattedWhatsAppNumber()}
              </button>
            </div>
            <div className="mt-6 space-y-3">
              <button className="flex items-center space-x-2 text-white hover:text-ai-primary transition-colors text-sm border border-white/20 rounded-lg px-4 py-2 hover:border-ai-primary">
                <span>Get In Touch</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
            </div>
          </div>

          {/* Middle Section - Copyright */}
          <div className="flex items-end justify-center order-1 sm:order-none">
            <div className="text-center">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Growonsmedia. All rights reserved.
              </p>
            </div>
          </div>

          {/* Right Section - Social Media */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg uppercase">FOLLOW</h4>
            <div className="space-y-3">
              <a href="#" className="text-white hover:text-ai-primary transition-colors text-sm block">
                LINKEDIN
              </a>
              <a href="#" className="text-white hover:text-ai-primary transition-colors text-sm block">
                YOUTUBE
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;