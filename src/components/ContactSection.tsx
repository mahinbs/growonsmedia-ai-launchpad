import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { openWhatsApp, getFormattedWhatsAppNumber } from "@/lib/whatsapp";
import { CONTACT_INFO } from "@/config/contact";

interface FormData {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

const ContactSection = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      countryCode: "+1",
      company: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // Combine phone and country code
      const fullPhoneNumber = data.phone ? `${data.countryCode}${data.phone}` : "";
      
      // Create form data object with combined phone
      const formDataWithCombinedPhone = {
        ...data,
        phone: fullPhoneNumber,
        countryCode: undefined // Remove countryCode from final data
      };

      // Create form data string
      const formDataString = Object.entries(formDataWithCombinedPhone)
        .filter(([key, value]) => value && value.trim() !== "" && key !== "countryCode")
        .map(
          ([key, value]) =>
            `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`
        )
        .join("\n");


      const response = await fetch(
        "https://send-mail-redirect-boostmysites.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: "Growons Media AI",
            body: formDataString,
            subject: "New Contact Form Submission",
            to: CONTACT_INFO.email,
          }),
        }
      );

      if (response.ok) {
        reset();
        // Redirect to thank you page
        navigate("/thank-you");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Listen for service pre-selection from other components
  useEffect(() => {
    const handlePreSelectService = (event: CustomEvent) => {
      const { serviceTitle } = event.detail;
      const serviceMap: { [key: string]: string } = {
        "Web Applications": "web-app",
        "Mobile Applications": "mobile-app",
        "AI Automation": "ai-automation",
        "AI Development": "ai-development",
        "Chatbot Development": "chatbot",
        "SaaS Solutions": "saas",
        "Blockchain Development": "blockchain",
        "AR / VR Development": "ar-vr",
        "IoT Development": "iot",
        "Game Development": "game",
        "AI Calling Agency": "ai-calling",
        "UI/UX Design": "ui-ux",
        "Data Analytics": "data-analytics",
        "Cloud Computing": "cloud",
      };

      const serviceValue = serviceMap[serviceTitle] || "other";
      setValue("service", serviceValue);
      setValue(
        "message",
        serviceTitle !== "General Inquiry"
          ? `I'm interested in ${serviceTitle} services. Please provide more information about pricing, timeline, and next steps.`
          : ""
      );
    };

    window.addEventListener(
      "preSelectService",
      handlePreSelectService as EventListener
    );
    return () => {
      window.removeEventListener(
        "preSelectService",
        handlePreSelectService as EventListener
      );
    };
  }, [setValue]);

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl mb-4 sm:mb-6 px-4 leading-tight">
            Ready to <span className="gradient-text">Launch Your Vision</span>?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
            Transform your business with AI-powered solutions. Get in touch with
            our experts and start your journey to AI-first success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="service-card">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6">
              Get Your Free AI Consultation
            </h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 sm:space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    {...register("name", {
                      required: "Full name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </Label>
                  <div className="flex gap-2">
                    <Select
                      value={watch("countryCode") || "+1"}
                      onValueChange={(value) => setValue("countryCode", value)}
                    >
                      <SelectTrigger className="w-24 min-h-[48px]">
                        <SelectValue />
                      </SelectTrigger>
                       <SelectContent>
                         <SelectItem value="+1">🇺🇸 +1</SelectItem>
                         <SelectItem value="+91">🇮🇳 +91</SelectItem>
                         <SelectItem value="+44">🇬🇧 +44</SelectItem>
                         <SelectItem value="+33">🇫🇷 +33</SelectItem>
                         <SelectItem value="+49">🇩🇪 +49</SelectItem>
                         <SelectItem value="+81">🇯🇵 +81</SelectItem>
                         <SelectItem value="+86">🇨🇳 +86</SelectItem>
                         <SelectItem value="+61">🇦🇺 +61</SelectItem>
                         <SelectItem value="+55">🇧🇷 +55</SelectItem>
                         <SelectItem value="+39">🇮🇹 +39</SelectItem>
                         <SelectItem value="+34">🇪🇸 +34</SelectItem>
                         <SelectItem value="+31">🇳🇱 +31</SelectItem>
                         <SelectItem value="+46">🇸🇪 +46</SelectItem>
                         <SelectItem value="+47">🇳🇴 +47</SelectItem>
                         <SelectItem value="+45">🇩🇰 +45</SelectItem>
                         <SelectItem value="+41">🇨🇭 +41</SelectItem>
                         <SelectItem value="+43">🇦🇹 +43</SelectItem>
                         <SelectItem value="+32">🇧🇪 +32</SelectItem>
                         <SelectItem value="+351">🇵🇹 +351</SelectItem>
                         <SelectItem value="+30">🇬🇷 +30</SelectItem>
                         <SelectItem value="+48">🇵🇱 +48</SelectItem>
                         <SelectItem value="+420">🇨🇿 +420</SelectItem>
                         <SelectItem value="+421">🇸🇰 +421</SelectItem>
                         <SelectItem value="+36">🇭🇺 +36</SelectItem>
                         <SelectItem value="+40">🇷🇴 +40</SelectItem>
                         <SelectItem value="+359">🇧🇬 +359</SelectItem>
                         <SelectItem value="+385">🇭🇷 +385</SelectItem>
                         <SelectItem value="+386">🇸🇮 +386</SelectItem>
                         <SelectItem value="+372">🇪🇪 +372</SelectItem>
                         <SelectItem value="+371">🇱🇻 +371</SelectItem>
                         <SelectItem value="+370">🇱🇹 +370</SelectItem>
                         <SelectItem value="+358">🇫🇮 +358</SelectItem>
                         <SelectItem value="+353">🇮🇪 +353</SelectItem>
                         <SelectItem value="+352">🇱🇺 +352</SelectItem>
                         <SelectItem value="+356">🇲🇹 +356</SelectItem>
                         <SelectItem value="+357">🇨🇾 +357</SelectItem>
                         <SelectItem value="+7">🇷🇺 +7</SelectItem>
                         <SelectItem value="+380">🇺🇦 +380</SelectItem>
                         <SelectItem value="+375">🇧🇾 +375</SelectItem>
                         <SelectItem value="+971">🇦🇪 +971</SelectItem>
                         <SelectItem value="+966">🇸🇦 +966</SelectItem>
                         <SelectItem value="+20">🇪🇬 +20</SelectItem>
                         <SelectItem value="+27">🇿🇦 +27</SelectItem>
                         <SelectItem value="+52">🇲🇽 +52</SelectItem>
                         <SelectItem value="+54">🇦🇷 +54</SelectItem>
                         <SelectItem value="+56">🇨🇱 +56</SelectItem>
                         <SelectItem value="+57">🇨🇴 +57</SelectItem>
                         <SelectItem value="+51">🇵🇪 +51</SelectItem>
                         <SelectItem value="+82">🇰🇷 +82</SelectItem>
                         <SelectItem value="+65">🇸🇬 +65</SelectItem>
                         <SelectItem value="+60">🇲🇾 +60</SelectItem>
                         <SelectItem value="+66">🇹🇭 +66</SelectItem>
                         <SelectItem value="+84">🇻🇳 +84</SelectItem>
                         <SelectItem value="+63">🇵🇭 +63</SelectItem>
                         <SelectItem value="+62">🇮🇩 +62</SelectItem>
                         <SelectItem value="+64">🇳🇿 +64</SelectItem>
                       </SelectContent>
                    </Select>
                    <Input
                      id="phone"
                      {...register("phone", {
                        pattern: {
                          value: /^[+]?[1-9][\d]{0,15}$/,
                          message: "Invalid phone number",
                        },
                      })}
                      placeholder="(555) 000-0000"
                      className="min-h-[48px] flex-1"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="company" className="text-sm font-medium">
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    {...register("company")}
                    placeholder="Your Company"
                    className="min-h-[48px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <Label htmlFor="service" className="text-sm font-medium">
                    Service Interested In
                  </Label>
                  <Select
                    value={watch("service")}
                    onValueChange={(value) => setValue("service", value)}
                  >
                    <SelectTrigger className="min-h-[48px]">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-app">Web Applications</SelectItem>
                      <SelectItem value="mobile-app">
                        Mobile Applications
                      </SelectItem>
                      <SelectItem value="saas">SaaS Solutions</SelectItem>
                      <SelectItem value="blockchain">
                        Blockchain Development
                      </SelectItem>
                      <SelectItem value="ar-vr">AR / VR Development</SelectItem>
                      <SelectItem value="iot">IoT Development</SelectItem>
                      <SelectItem value="game">Game Development</SelectItem>
                      <SelectItem value="ai-automation">
                        AI Automation
                      </SelectItem>
                      <SelectItem value="ai-calling">
                        AI Calling Agency
                      </SelectItem>
                      <SelectItem value="ai-development">
                        AI Development
                      </SelectItem>
                      <SelectItem value="chatbot">
                        Chatbot Development
                      </SelectItem>
                      <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                      <SelectItem value="data-analytics">
                        Data Analytics
                      </SelectItem>
                      <SelectItem value="cloud">Cloud Computing</SelectItem>
                      <SelectItem value="other">Other Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="budget" className="text-sm font-medium">
                    Project Budget
                  </Label>
                  <Select
                    value={watch("budget")}
                    onValueChange={(value) => setValue("budget", value)}
                  >
                    <SelectTrigger className="min-h-[48px]">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-10k">Under $10k</SelectItem>
                      <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                      <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                      <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                      <SelectItem value="over-100k">Over $100k</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-medium">
                  Project Details *
                </Label>
                <Textarea
                  id="message"
                  {...register("message", {
                    required: "Project details are required",
                    minLength: {
                      value: 10,
                      message: "Please provide more details about your project",
                    },
                  })}
                  placeholder="Tell us about your project, goals, and how we can help transform your business with AI..."
                  rows={4}
                  className="min-h-[120px] resize-y"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="btn-hero w-full min-h-[52px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending Message..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="service-card">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6">
                Get in Touch
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-ai-glow rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm sm:text-base font-semibold mb-1">
                      Email Us
                    </h4>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-sm sm:text-base text-muted-foreground hover:text-ai-primary transition-colors break-all"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ai-glow rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call or WhatsApp</h4>
                    <button
                      onClick={() =>
                        openWhatsApp(
                          "Hi! I'm interested in your AI services. Can you provide more information?"
                        )
                      }
                      className="text-muted-foreground hover:text-ai-primary transition-colors cursor-pointer"
                    >
                      {getFormattedWhatsAppNumber()}
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ai-glow rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Our Offices</h4>
                    <div className="text-muted-foreground space-y-2">
                      <p>
                        <strong>India HQ:</strong>
                        <br />
                        995/208-A, 2-G, Gali No.12, Kailash Nagar, Gandhi Nagar,
                        Delhi 110031
                      </p>
                      <p>
                        <strong>USA Office:</strong>
                        <br />
                        271 W Short St, Suite 410, Lexington, Kentucky
                        (KY)-40507
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ai-glow rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <div className="text-muted-foreground">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="service-card text-center bg-gradient-primary text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Need Immediate Help?</h3>
              <p className="mb-4 sm:mb-6 opacity-90 text-sm sm:text-base">
                Our AI experts are standing by to discuss your project and provide immediate guidance.
              </p>
              <Button 
                className="bg-white text-ai-primary hover:bg-white/90 w-full sm:w-auto min-h-[48px]"
                onClick={() => openWhatsApp("Hi! I need immediate help with my AI project. Are you available to chat?")}
              >
                Chat on WhatsApp
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
