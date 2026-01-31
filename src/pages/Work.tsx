import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";

const caseStudies = [
  {
    id: "luxe-fashion",
    image: caseStudy1,
    title: "Luxe Fashion Co.",
    category: "Branding & Digital Marketing",
    description: "A luxury fashion e-commerce brand needed to establish market presence and drive online sales in a competitive landscape.",
    challenge: "The brand was new to the market with no existing audience or brand recognition. They needed a complete digital strategy to compete with established players.",
    strategy: "We developed a comprehensive brand identity, launched targeted social campaigns, and implemented a data-driven paid advertising strategy across Meta and Google.",
    results: [
      { metric: "+280%", label: "Revenue Growth" },
      { metric: "45K", label: "New Customers" },
      { metric: "4.2x", label: "ROAS" },
      { metric: "-35%", label: "CAC Reduction" },
    ],
  },
  {
    id: "fintech-app",
    image: caseStudy2,
    title: "GetFunds Fintech",
    category: "Product Marketing & Paid Ads",
    description: "A fintech startup preparing for their mobile app launch needed to build pre-launch buzz and drive downloads at scale.",
    challenge: "Entering a crowded fintech market with limited brand awareness and a tight timeline to prove product-market fit.",
    strategy: "We created a multi-phase launch strategy combining influencer partnerships, content marketing, and performance advertising optimized for app installs.",
    results: [
      { metric: "50K+", label: "App Downloads" },
      { metric: "$2.40", label: "Cost Per Install" },
      { metric: "32%", label: "Day-30 Retention" },
      { metric: "#3", label: "App Store Ranking" },
    ],
  },
  {
    id: "wellness-brand",
    image: caseStudy3,
    title: "Wellness Collective",
    category: "Branding & Content Strategy",
    description: "An established wellness brand needed to refresh their identity and content approach to connect with a younger demographic.",
    challenge: "The existing brand felt dated and failed to resonate with their target audience of health-conscious millennials and Gen Z consumers.",
    strategy: "We conducted extensive audience research, developed a modern brand identity, and created a content strategy focused on education and community building.",
    results: [
      { metric: "4.2x", label: "Brand Awareness" },
      { metric: "+180%", label: "Social Engagement" },
      { metric: "65%", label: "New Demo Reach" },
      { metric: "+95%", label: "Website Traffic" },
    ],
  },
];

const Work = () => {
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
              <span className="label-text mb-4 block">Our Work</span>
              <h1 className="heading-display mb-8">
                Results that speak{" "}
                <span className="text-primary">louder than words</span>
              </h1>
              <p className="body-large max-w-2xl">
                Every project is a story of transformation. Explore how we've 
                helped brands overcome challenges and achieve remarkable growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="pb-20">
          <div className="container-wide">
            <div className="space-y-32">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image */}
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <span className="label-text mb-4 block">{study.category}</span>
                      <h2 className="heading-section mb-4">{study.title}</h2>
                      <p className="body-large mb-8">{study.description}</p>

                      {/* Challenge */}
                      <div className="mb-6">
                        <h3 className="font-sans font-semibold text-foreground mb-2 text-sm uppercase tracking-wider">
                          The Challenge
                        </h3>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>

                      {/* Strategy */}
                      <div className="mb-8">
                        <h3 className="font-sans font-semibold text-foreground mb-2 text-sm uppercase tracking-wider">
                          Our Strategy
                        </h3>
                        <p className="text-muted-foreground">{study.strategy}</p>
                      </div>

                      {/* Results */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {study.results.map((result) => (
                          <div key={result.label} className="card-elevated p-4 text-center">
                            <div className="text-2xl font-display font-semibold text-primary mb-1">
                              {result.metric}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {index < caseStudies.length - 1 && (
                    <div className="divider-gradient mt-32" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* More Projects CTA */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="label-text mb-4 block">Want to See More?</span>
              <h2 className="heading-section mb-6">
                These are just a few of our{" "}
                <span className="text-primary">150+ success stories</span>
              </h2>
              <p className="body-large mb-10">
                Ready to add your brand to our portfolio? Let's talk about 
                how we can achieve similar results for you.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Start Your Success Story
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

export default Work;
