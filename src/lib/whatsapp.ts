import { CONTACT_INFO } from "@/config/contact";

/**
 * Opens WhatsApp with a pre-filled message
 * Uses different approaches for mobile vs desktop for better compatibility
 */
export const openWhatsApp = (message: string = "Hi! I'm interested in your AI services. Can you help me?") => {
  const phoneNumber = CONTACT_INFO.whatsapp;
  const encodedMessage = encodeURIComponent(message);
  
  // Detect if user is on mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  let whatsappUrl: string;
  
  if (isMobile) {
    // For mobile devices, try the app deep link first
    whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    // Fallback to web.whatsapp.com after a short delay if app doesn't open
    const fallbackUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    try {
      // Try to open the app
      window.location.href = whatsappUrl;
      
      // Set a fallback timeout
      setTimeout(() => {
        window.open(fallbackUrl, '_blank');
      }, 1000);
    } catch (error) {
      // If deep link fails, use web version
      window.open(fallbackUrl, '_blank');
    }
  } else {
    // For desktop, use web.whatsapp.com directly
    whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }
};

/**
 * Gets the formatted WhatsApp number for display
 */
export const getFormattedWhatsAppNumber = (): string => {
  const number = CONTACT_INFO.whatsapp;
  // Format as +91 9625978823
  return `+${number.slice(0, 2)} ${number.slice(2)}`;
};

/**
 * Gets the WhatsApp URL for href attributes (wa.me link as fallback)
 */
export const getWhatsAppUrl = (message?: string): string => {
  const phoneNumber = CONTACT_INFO.whatsapp;
  const encodedMessage = message ? `&text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${phoneNumber}?${encodedMessage}`;
};