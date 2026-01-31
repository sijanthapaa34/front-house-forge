import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const values = [
  {
    title: "Clarity Over Complexity",
    description: "We cut through the noise to deliver strategies that are clear, actionable, and effective.",
  },
  {
    title: "Outcomes Over Outputs",
    description: "We measure success by the results we deliver, not the volume of work we produce.",
  },
  {
    title: "Partnership Over Projects",
    description: "We build lasting relationships, becoming a trusted extension of your team.",
  },
  {
    title: "Innovation Over Imitation",
    description: "We craft original solutions tailored to your unique challenges and opportunities.",
  },
];

const About = () => {
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
              <span className="label-text mb-4 block">About Us</span>
              <h1 className="heading-display mb-8">
                We exist to help brands{" "}
                <span className="text-primary">realize their potential</span>
              </h1>
              <p className="body-large max-w-2xl">
                Front House Marketing is a modern, digital-first growth partner 
                for ambitious brands ready to scale. We combine strategic thinking 
                with creative excellence to deliver results that matter.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="label-text mb-4 block">Our Story</span>
                <h2 className="heading-section mb-6">
                  Born from a belief in{" "}
                  <span className="text-primary">better</span>
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                <p className="body-large">
                  We founded Front House because we saw too many businesses 
                  struggling with agencies that prioritized billable hours over 
                  actual outcomes.
                </p>
                <p className="body-base">
                  Our approach is different. We operate as a fully remote team, 
                  bringing together the best talent from around the world to serve 
                  clients everywhere. This model keeps us agile, efficient, and 
                  entirely focused on what matters most: your growth.
                </p>
                <p className="body-base">
                  We believe in transparency, in strategies that make sense, and 
                  in building genuine partnerships with the brands we work with. 
                  When you succeed, we succeed.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card-elevated p-10"
              >
                <span className="label-text mb-4 block">Our Mission</span>
                <h3 className="heading-subsection mb-4">
                  Empower growth through clarity
                </h3>
                <p className="body-base">
                  To provide ambitious brands with the strategic clarity, creative 
                  excellence, and measurable results they need to thrive in an 
                  increasingly competitive digital landscape.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="card-elevated p-10"
              >
                <span className="label-text mb-4 block">Our Vision</span>
                <h3 className="heading-subsection mb-4">
                  The partner of choice
                </h3>
                <p className="body-base">
                  To be recognized globally as the go-to growth partner for brands 
                  that refuse to settle — delivering transformative results that 
                  redefine what's possible.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="label-text mb-4 block">Our Values</span>
              <h2 className="heading-section">
                The principles that{" "}
                <span className="text-primary">guide us</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-elevated p-8"
                >
                  <h3 className="text-xl font-display font-medium text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="body-base">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Remote-First */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="label-text mb-4 block">How We Work</span>
              <h2 className="heading-section mb-6">
                Remote-first,{" "}
                <span className="text-primary">globally connected</span>
              </h2>
              <p className="body-large mb-10">
                We operate fully online with talent across multiple time zones. 
                This means faster turnarounds, diverse perspectives, and the 
                flexibility to serve clients anywhere in the world.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Work With Us
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

export default About;
