import { motion } from "framer-motion";

const steps = [
  "Spatial Study",
  "Concept & Geometry",
  "Material Language",
  "Execution",
  "Styling & Reveal",
];

const Process = () => {
  return (
    <section
      id="process"
      className="py-15 border-t border-b border-black/10 bg-gradient-to-r from-[#F5F2ED] via-[#E7E1D6] to-[#F5F2ED] font-playfair"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-20 max-w-2xl px-10 md:px-24"
      >
        <h2 className="text-4xl md:text-5xl font-light mb-6 text-[#1F1F1F]">
          A Method of Making Space
        </h2>
        <p className="text-sm text-[#6B6B6B] leading-relaxed">
          Our process is guided by observation, restraint, and intent. 
          Each phase builds quietly upon the previous one, allowing space,
          material, and form to arrive at a considered and enduring whole.
        </p>
      </motion.div>

      {/* Steps Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 text-center px-6 md:px-24">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="py-14 relative group"
          >
            {/* Vertical Divider */}
            {i !== steps.length - 1 && (
              <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-20 w-px bg-black/10" />
            )}

            {/* Step Number */}
            <p className="text-3xl font-extralight mb-4 text-[#1F1F1F]">
              {`0${i + 1}`}
            </p>

            {/* Step Label */}
            <p className="text-xs tracking-widest text-[#6B6B6B] uppercase leading-snug">
              {step}
            </p>

            {/* Hover Accent */}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 bg-gradient-to-r from-[#C9B58B] to-[#8F7A4A] group-hover:w-14 transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;
