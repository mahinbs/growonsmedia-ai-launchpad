import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ArrowLeft,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";
import { openWhatsApp, getFormattedWhatsAppNumber } from "@/lib/whatsapp";
import { CONTACT_INFO } from "@/config/contact";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-[80vh] flex items-center justify-center py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          {/* Success Icon with Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                <CheckCircle2 className="w-12 h-12 md:w-16 md:h-16 text-white" />
              </div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-ai-primary/30 blur-xl"
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-white">Message sent </span>
            <span className="gradient-text">successfully!</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-4"
          >
            We will get back to you within 24 hrs
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Thank you for reaching out to Growonsmedia! Our AI experts are
            reviewing your inquiry and will contact you soon to discuss how we
            can transform your business with cutting-edge AI solutions.
          </motion.p>

          {/* Action Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto"
          >
            {/* WhatsApp Card */}
            <div className="service-card p-6 hover:border-ai-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Chat on WhatsApp</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get instant responses to your queries
              </p>
              <Button
                variant="secondary"
                className="w-full"
                onClick={() =>
                  openWhatsApp(
                    "Hi! I just submitted a contact form. Can you help me with more information?"
                  )
                }
              >
                Open WhatsApp
              </Button>
              <p className="text-xs text-muted-foreground mt-2">
                {getFormattedWhatsAppNumber()}
              </p>
            </div>

            {/* Email Card */}
            <div className="service-card p-6 hover:border-ai-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Send an Email</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Drop us a line at our email address
              </p>
              <Button
                variant="secondary"
                className="w-full"
                onClick={() =>
                  window.open(`mailto:${CONTACT_INFO.email}`, "_blank")
                }
              >
                Send Email
              </Button>
              <p className="text-xs text-muted-foreground mt-2 break-all">
                {CONTACT_INFO.email}
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button className="btn-hero group" onClick={() => navigate("/")}>
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
            <Button
              variant="outline"
              className="group"
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  scroller.scrollTo("services", {
                    duration: 1000,
                    delay: 0,
                    smooth: "easeInOutQuart",
                    offset: -80,
                  });
                }, 100);
              }}
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Explore Services
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYou;
