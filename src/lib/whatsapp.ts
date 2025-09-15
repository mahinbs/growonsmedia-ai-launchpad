import { CONTACT_INFO } from "@/config/contact";

/**
 * Opens WhatsApp with a pre-filled message
 * Uses different approaches for mobile vs desktop for better compatibility
 */
const normalizePhoneNumber = (raw: string): string => {
  // Keep digits only and remove leading 00
  const digits = (raw || "").replace(/\D/g, "");
  return digits.startsWith("00") ? digits.slice(2) : digits;
};

const buildWhatsAppUrl = (message?: string): string => {
  const phone = normalizePhoneNumber(CONTACT_INFO.whatsapp);
  const base = `https://wa.me/${phone}`;
  if (message && message.trim().length > 0) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
};

/**
 * Opens WhatsApp with a pre-filled message using a universal wa.me link
 */
export const openWhatsApp = (
  message: string = "Hi! I'm interested in your AI services. Can you help me?"
) => {
  const url = buildWhatsAppUrl(message);
  // Helpful for debugging in different environments
  try {
    console.log("[WhatsApp] Opening:", url);
  } catch {}
  window.open(url, "_blank", "noopener,noreferrer");
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
  return buildWhatsAppUrl(message);
};