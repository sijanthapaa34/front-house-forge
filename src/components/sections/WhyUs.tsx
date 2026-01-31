import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
  {
    title: "Results-Obsessed",
    description: "Every decision we make is driven by data and focused on delivering measurable business outcomes.",
  },
  {
    title: "Strategic Partners",
    description: "We become an extension of your team, deeply invested in your long-term success.",
  },
  {
    title: "Transparent Process",
    description: "Clear communication, honest reporting, and no surprises. You always know where things stand.",
  },
  {
    title: "Agile & Adaptive",
    description: "Markets change fast. We pivot quickly, testing and optimizing to stay ahead of trends.",
  },
  {
    title: "Full-Service Expertise",
    description: "From strategy to execution, we handle every aspect of your digital marketing needs.",
  },
  {
    title: "Proven Track Record",
    description: "150+ successful projects and counting. Our results speak louder than promises.",
  },
];

const WhyUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="label-text mb-4 block">Why Front House</span>
            <h2 className="heading-section mb-6">
              We're different — and it{" "}
              <span className="text-primary">matters</span>
            </h2>
            <p className="body-large mb-10">
              In a sea of agencies making big promises, we focus on what 
              actually moves the needle for your business.
            </p>

            {/* Reasons List */}
            <div className="grid gap-6">
              {reasons.slice(0, 3).map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - More Reasons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid gap-6">
              {reasons.slice(3).map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="card-elevated p-6"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-foreground mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
