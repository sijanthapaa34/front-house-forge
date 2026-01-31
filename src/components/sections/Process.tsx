import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your business, market, and goals to understand what makes you unique.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "We craft a tailored roadmap with clear objectives, timelines, and measurable outcomes.",
  },
  {
    number: "03",
    title: "Creation",
    description: "Our team brings the strategy to life through compelling content and campaigns.",
  },
  {
    number: "04",
    title: "Growth",
    description: "We optimize continuously, scaling what works and refining for maximum impact.",
  },
];

const Process = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
        >
          <span className="label-text mb-4 block">Our Process</span>
          <h2 className="heading-section mb-6">
            A proven path to{" "}
            <span className="text-primary">results</span>
          </h2>
          <p className="body-large">
            Every successful project follows a clear, collaborative process 
            designed to deliver exceptional outcomes.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="relative z-10 w-24 h-24 rounded-2xl bg-background border border-border flex items-center justify-center mb-6 mx-auto lg:mx-0">
                  <span className="text-3xl font-display font-semibold text-primary">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-display font-medium mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="body-base">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
