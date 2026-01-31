import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
import { ArrowRight, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/fronthousemarketing", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/fronthousemarketing", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com/company/fronthousemarketing", label: "LinkedIn" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 md:pt-40 pb-20 md:pb-28">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <span className="label-text mb-4 block">Get in Touch</span>
              <h1 className="heading-display mb-8">
                Let's create something{" "}
                <span className="text-primary">remarkable</span>
              </h1>
              <p className="body-large max-w-2xl">
                Ready to transform your digital presence? We'd love to hear 
                about your project and explore how we can help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="pb-20">
          <div className="container-wide">
            <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3"
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="John"
                        className="h-12 bg-card border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Doe"
                        className="h-12 bg-card border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="h-12 bg-card border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Company"
                      className="h-12 bg-card border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">What are you interested in?</Label>
                    <Select name="service">
                      <SelectTrigger className="h-12 bg-card border-border">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                        <SelectItem value="branding">Branding</SelectItem>
                        <SelectItem value="social-media">Social Media Marketing</SelectItem>
                        <SelectItem value="paid-ads">Paid Advertising</SelectItem>
                        <SelectItem value="content">Content Strategy</SelectItem>
                        <SelectItem value="web-optimization">Web Optimization</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range (Optional)</Label>
                    <Select name="budget">
                      <SelectTrigger className="h-12 bg-card border-border">
                        <SelectValue placeholder="Select your budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k+">$50,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your project</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Share your goals, challenges, and what success looks like for you..."
                      className="bg-card border-border resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full md:w-auto group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-2"
              >
                <div className="sticky top-32 space-y-10">
                  <div>
                    <h2 className="heading-subsection mb-4">
                      Prefer to reach out directly?
                    </h2>
                    <p className="body-base">
                      We typically respond within 24 hours. For urgent inquiries, 
                      connect with us on social media.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-sans font-semibold text-foreground mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:hello@fronthousemarketing.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          hello@fronthousemarketing.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-sans font-semibold text-foreground mb-1">
                          Location
                        </h3>
                        <p className="text-muted-foreground">
                          Fully remote • Serving clients worldwide
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-sans font-semibold text-foreground mb-4">
                      Connect with us
                    </h3>
                    <div className="flex gap-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-300"
                          aria-label={social.label}
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="card-elevated p-6">
                    <h3 className="font-sans font-semibold text-foreground mb-2">
                      Response Time
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      We respond to all inquiries within 24 hours during business 
                      days. Expect a thoughtful reply, not an automated response.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
