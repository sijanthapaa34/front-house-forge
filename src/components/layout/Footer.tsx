import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Work", href: "/work" },
      { label: "Contact", href: "/contact" },
    ],
    services: [
      { label: "Digital Marketing", href: "/services" },
      { label: "Branding", href: "/services" },
      { label: "Social Media", href: "/services" },
      { label: "Paid Advertising", href: "/services" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/fronthousemarketing", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/fronthousemarketing", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com/company/fronthousemarketing", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* CTA Section */}
      <div className="container-wide section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="label-text mb-4 block">Ready to grow?</span>
          <h2 className="heading-section mb-6">
            Let's build something{" "}
            <span className="text-primary">remarkable</span> together
          </h2>
          <p className="body-large mb-10">
            Partner with us to transform your digital presence and achieve measurable results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:gap-4 transition-all duration-300"
          >
            Start a conversation
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>

      <div className="divider-gradient" />

      {/* Footer Content */}
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-display font-semibold">
                Front House
              </span>
            </Link>
            <p className="body-base mb-6 max-w-xs">
              A modern, digital-first growth partner for brands that want clarity, visibility, and measurable results.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-foreground mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-foreground mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-foreground mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@fronthousemarketing.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  hello@fronthousemarketing.com
                </a>
              </li>
              <li className="text-muted-foreground">
                Fully remote • Worldwide
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="divider-gradient" />

      {/* Copyright */}
      <div className="container-wide py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Front House Marketing. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
