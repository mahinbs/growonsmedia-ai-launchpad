import { CONTACT_INFO } from "@/config/contact";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        {/* Back Button */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-muted-foreground hover:text-white hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Terms & <span className="gradient-text">Conditions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-ai-primary">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Growons Media AI services, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ai-primary">2. Services Description</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Growons Media AI provides AI-powered development services including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Web Application Development</li>
                <li>Mobile Application Development</li>
                <li>AI Automation Solutions</li>
                <li>Chatbot Development</li>
                <li>SaaS Solutions</li>
                <li>UI/UX Design Services</li>
                <li>Data Analytics and Cloud Computing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ai-primary">3. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Respect intellectual property rights</li>
                <li>Maintain the confidentiality of your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ai-primary">4. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Payment terms for our services include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Payment is due as specified in your project agreement</li>
                <li>We accept various payment methods including bank transfers and digital payments</li>
                <li>Late payments may incur additional charges</li>
                <li>Refunds are subject to our refund policy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ai-primary">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, trademarks, and intellectual property rights in our services are owned by 
                Growons Media AI or our licensors. You may not use, reproduce, or distribute our 
                content without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ai-primary">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Growons Media AI shall not be liable for any indirect, incidental, special, or 
                consequential damages arising out of or in connection with the use of our services. 
                Our total liability shall not exceed the amount paid by you for the services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ai-primary">7. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your access to our services immediately, without prior 
                notice, for any reason, including breach of these terms. Upon termination, your right 
                to use the services will cease immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ai-primary">8. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of India, 
                without regard to conflict of law principles. Any disputes shall be resolved in the 
                courts of Delhi, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ai-primary">9. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For any questions regarding these Terms & Conditions, please contact us:
              </p>
              <div className="mt-4 p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-white/20">
                <p className="text-white font-semibold mb-2">Growons Media AI</p>
                <p className="text-muted-foreground mb-2">Email: {CONTACT_INFO.email}</p>
                <p className="text-muted-foreground mb-2">WhatsApp: +{CONTACT_INFO.whatsapp}</p>
                <div className="mt-4">
                  <p className="text-white font-semibold mb-2">India Office:</p>
                  <p className="text-muted-foreground text-sm">{CONTACT_INFO.offices.india.address}</p>
                </div>
                <div className="mt-4">
                  <p className="text-white font-semibold mb-2">USA Office:</p>
                  <p className="text-muted-foreground text-sm">{CONTACT_INFO.offices.usa.address}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
