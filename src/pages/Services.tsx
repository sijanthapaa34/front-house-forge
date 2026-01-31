import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Megaphone, 
  Palette, 
  Share2, 
  Target, 
  FileText, 
  Gauge,
  Check
} from "lucide-react";

const services = [
  {
    id: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    headline: "Drive growth with data-driven marketing strategies",
    description: "We develop comprehensive digital marketing strategies that cut through the noise and deliver measurable results. From SEO to email campaigns, we cover every touchpoint in your customer journey.",
    benefits: [
      "Increased organic traffic and visibility",
      "Higher conversion rates across all channels",
      "Clear ROI tracking and reporting",
      "Continuous optimization based on data",
    ],
    forWhom: "Brands looking to establish or scale their digital presence with a strategic, results-focused approach.",
  },
  {
    id: "branding",
    icon: Palette,
    title: "Branding",
    headline: "Build a brand identity that resonates and endures",
    description: "Your brand is more than a logo—it's every interaction, every message, every experience. We craft distinctive brand identities that capture your essence and create lasting connections with your audience.",
    benefits: [
      "Distinctive visual identity that stands out",
      "Cohesive brand messaging across all touchpoints",
      "Brand guidelines for consistent execution",
      "Stronger emotional connection with your audience",
    ],
    forWhom: "Startups, rebranding initiatives, and established companies seeking to elevate their market position.",
  },
  {
    id: "social-media",
    icon: Share2,
    title: "Social Media Marketing",
    headline: "Build communities that engage and convert",
    description: "Social media isn't just about posting—it's about building genuine connections. We create strategic content calendars and community management systems that turn followers into brand advocates.",
    benefits: [
      "Engaged, growing community of followers",
      "Consistent, on-brand content presence",
      "Increased website traffic from social",
      "Authentic audience relationships",
    ],
    forWhom: "Brands wanting to humanize their presence and create meaningful engagement with their audience.",
  },
  {
    id: "paid-advertising",
    icon: Target,
    title: "Paid Advertising",
    headline: "Precision-targeted campaigns that maximize ROI",
    description: "From Google Ads to Meta campaigns, we design and optimize paid advertising strategies that put your brand in front of the right people at the right time, with messaging that converts.",
    benefits: [
      "Lower cost per acquisition",
      "Higher quality leads and traffic",
      "Scalable, profitable campaigns",
      "Detailed performance analytics",
    ],
    forWhom: "Businesses ready to invest in paid growth with a focus on profitability and scale.",
  },
  {
    id: "content-strategy",
    icon: FileText,
    title: "Content Strategy",
    headline: "Compelling narratives that position you as an authority",
    description: "Content is the foundation of digital authority. We develop content strategies that educate, engage, and convert—from blog posts to video series, always aligned with your business objectives.",
    benefits: [
      "Thought leadership positioning",
      "Improved SEO and organic discovery",
      "Repurposable content assets",
      "Consistent publishing cadence",
    ],
    forWhom: "B2B companies, professional services, and brands wanting to establish industry authority.",
  },
  {
    id: "web-optimization",
    icon: Gauge,
    title: "Web Optimization",
    headline: "Performance enhancements that improve conversions",
    description: "Your website is your most valuable digital asset. We analyze, test, and optimize every element to ensure faster load times, better user experience, and higher conversion rates.",
    benefits: [
      "Faster page load speeds",
      "Improved user experience",
      "Higher conversion rates",
      "Better search engine rankings",
    ],
    forWhom: "Businesses with existing websites looking to improve performance and maximize their current traffic.",
  },
];

const ServicesPage = () => {
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
              <span className="label-text mb-4 block">Our Services</span>
              <h1 className="heading-display mb-8">
                Everything you need to{" "}
                <span className="text-primary">grow</span>
              </h1>
              <p className="body-large max-w-2xl">
                From strategy to execution, we offer a full suite of digital 
                marketing services designed to drive measurable business growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="pb-20">
          <div className="container-wide">
            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  id={service.id}
                  className="scroll-mt-32"
                >
                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left - Icon & Title */}
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="sticky top-32">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                          <service.icon className="w-8 h-8" />
                        </div>
                        <h2 className="heading-section mb-6">
                          {service.title}
                        </h2>
                        <p className="text-xl font-display text-foreground mb-4">
                          {service.headline}
                        </p>
                        <p className="body-base mb-8">
                          {service.description}
                        </p>
                        <Link to="/contact">
                          <Button variant="outline" size="lg" className="group">
                            Discuss Your Project
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Right - Details */}
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="card-elevated p-8 lg:p-10 mb-6">
                        <h3 className="font-sans font-semibold text-foreground mb-6 uppercase text-sm tracking-wider">
                          What You'll Get
                        </h3>
                        <ul className="space-y-4">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex gap-3">
                              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                <Check className="w-3 h-3 text-primary" />
                              </div>
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="card-elevated p-8 lg:p-10">
                        <h3 className="font-sans font-semibold text-foreground mb-4 uppercase text-sm tracking-wider">
                          Perfect For
                        </h3>
                        <p className="text-muted-foreground">{service.forWhom}</p>
                      </div>
                    </div>
                  </div>

                  {index < services.length - 1 && (
                    <div className="divider-gradient mt-24" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="label-text mb-4 block">Ready to Start?</span>
              <h2 className="heading-section mb-6">
                Let's discuss your{" "}
                <span className="text-primary">growth goals</span>
              </h2>
              <p className="body-large mb-10">
                Schedule a free consultation to explore how we can help 
                accelerate your business.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Get Your Free Consultation
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
