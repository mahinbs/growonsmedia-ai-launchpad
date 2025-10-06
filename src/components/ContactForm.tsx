import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  defaultService?: string;
}

const ContactForm = ({ 
  title = "Get In Touch", 
  subtitle = "Ready to start your project? Let's discuss your requirements and create something amazing together.",
  defaultService 
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+1",
    company: "",
    service: defaultService || "",
    budget: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Combine phone and country code
      const fullPhoneNumber = formData.phone ? `${formData.countryCode}${formData.phone}` : "";
      
      // Create form data object with combined phone
      const formDataWithCombinedPhone = {
        ...formData,
        phone: fullPhoneNumber,
        countryCode: undefined // Remove countryCode from final data
      };

      console.log("ContactForm data:", formDataWithCombinedPhone);

      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        countryCode: "+1",
        company: "",
        service: defaultService || "",
        budget: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold gradient-text">Let's Start Your Project</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're here to help bring your vision to life. Whether you have a detailed project plan or just an idea, 
                we'll work with you to create a solution that exceeds your expectations.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <p className="text-muted-foreground">hello@growonsmedia.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="bg-ai-glow p-6 rounded-2xl">
              <h4 className="font-semibold mb-3">Why Choose Us?</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-ai-primary rounded-full"></div>
                  <span>Expert team with 10+ years of experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-ai-primary rounded-full"></div>
                  <span>Transparent pricing and clear timelines</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-ai-primary rounded-full"></div>
                  <span>24/7 support and ongoing maintenance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-ai-primary rounded-full"></div>
                  <span>100% satisfaction guarantee</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="service-card">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="min-h-[48px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="min-h-[48px]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="flex gap-2">
                      <Select 
                        value={formData.countryCode || "+1"} 
                        onValueChange={(value) => handleSelectChange("countryCode", value)}
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
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                        className="min-h-[48px] flex-1"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                      className="min-h-[48px]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed</Label>
                    <Select 
                      value={formData.service} 
                      onValueChange={(value) => handleSelectChange("service", value)}
                    >
                      <SelectTrigger className="min-h-[48px]">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="app-development">App Development</SelectItem>
                        <SelectItem value="ai-solutions">AI Solutions</SelectItem>
                        <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Project Budget</Label>
                    <Select 
                      value={formData.budget} 
                      onValueChange={(value) => handleSelectChange("budget", value)}
                    >
                      <SelectTrigger className="min-h-[48px]">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="over-100k">Over $100,000</SelectItem>
                        <SelectItem value="discuss">Let's Discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    rows={5}
                    required
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="btn-hero w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;