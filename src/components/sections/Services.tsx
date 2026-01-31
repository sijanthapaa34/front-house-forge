import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Megaphone, Palette, Share2, Target, FileText, Gauge } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven strategies that amplify your reach and convert audiences into loyal customers.",
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Distinctive brand identities that capture your essence and resonate with your target market.",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Engaging content strategies that build communities and drive meaningful engagement.",
  },
  {
    icon: Target,
    title: "Paid Advertising",
    description: "Precision-targeted campaigns that maximize ROI across Google, Meta, and beyond.",
  },
  {
    icon: FileText,
    title: "Content Strategy",
    description: "Compelling narratives that position your brand as an authority in your industry.",
  },
  {
    icon: Gauge,
    title: "Web Optimization",
    description: "Performance-focused enhancements that improve user experience and conversions.",
  },
];

const Services = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="label-text mb-4 block">What We Do</span>
            <h2 className="heading-section">
              Services designed for{" "}
              <span className="text-primary">growth</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-end"
          >
            <p className="body-large max-w-lg">
              We combine creative excellence with strategic thinking to deliver 
              solutions that drive real business results.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to="/services">
                <div className="card-interactive group p-8 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-display font-medium mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="body-base">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
          >
            Explore all services
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
