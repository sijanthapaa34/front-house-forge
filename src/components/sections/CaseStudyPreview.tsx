import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";

const caseStudies = [
  {
    image: caseStudy1,
    title: "Luxury Fashion E-commerce",
    category: "Branding & Digital Marketing",
    metric: "+280%",
    metricLabel: "Revenue Growth",
  },
  {
    image: caseStudy2,
    title: "Fintech App Launch",
    category: "Product Marketing & Paid Ads",
    metric: "50K+",
    metricLabel: "App Downloads",
  },
  {
    image: caseStudy3,
    title: "Wellness Brand Identity",
    category: "Branding & Content Strategy",
    metric: "4.2x",
    metricLabel: "Brand Awareness",
  },
];

const CaseStudyPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="label-text mb-4 block">Selected Work</span>
            <h2 className="heading-section">
              Projects that{" "}
              <span className="text-primary">perform</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link to="/work">
              <Button variant="outline" size="lg" className="group">
                View All Work
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link to="/work" className="group block">
                <div className="card-interactive overflow-hidden">
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    
                    {/* Metric Badge */}
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-semibold">
                      {study.metric} {study.metricLabel}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-xs uppercase tracking-wider text-primary mb-2">
                      {study.category}
                    </div>
                    <h3 className="text-xl font-display font-medium text-foreground group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyPreview;
