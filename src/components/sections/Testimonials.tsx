import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Front House didn't just meet our expectations — they redefined what we thought was possible. Our revenue grew 340% in the first year.",
    author: "Sarah Chen",
    role: "CEO",
    company: "TechFlow Solutions",
  },
  {
    quote: "Their strategic approach transformed our brand perception. We went from unknown to industry leader in our market segment.",
    author: "Marcus Williams",
    role: "Founder",
    company: "Elevate Fitness",
  },
  {
    quote: "Working with Front House feels like having an elite in-house team. They're responsive, strategic, and genuinely care about results.",
    author: "Emily Rodriguez",
    role: "CMO",
    company: "GreenPath Organics",
  },
];

const Testimonials = () => {
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
          <span className="label-text mb-4 block">Client Stories</span>
          <h2 className="heading-section mb-6">
            Trusted by brands that{" "}
            <span className="text-primary">demand excellence</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="card-elevated p-8 flex flex-col"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Quote Text */}
              <blockquote className="text-lg leading-relaxed text-foreground mb-8 flex-grow">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border pt-6">
                <div className="font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
