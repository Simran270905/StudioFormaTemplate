import { motion } from "framer-motion";

const stats = [
  {
    value: "120+",
    label: "Spaces Crafted",
    desc: "Residential, commercial and hybrid environments",
  },
  {
    value: "15",
    label: "Years of Practice",
    desc: "Design grounded in discipline and evolution",
  },
  {
    value: "30k",
    label: "Sq. Ft. Designed",
    desc: "Measured in flow, light and proportion",
  },
  {
    value: "100%",
    label: "Client Continuity",
    desc: "Built through trust and dialogue",
  },
];

const Stats = () => {
  return (
    <section className="py-15 px-10 md:px-24 border-y border-black/10">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-24 max-w-3xl"
      >
        <p className="text-sm tracking-widest text-[#B89B5E] mb-4">
          STUDIO BY NUMBERS
        </p>
        <h2 className="text-4xl md:text-5xl font-light leading-snug">
          Not milestones, <br />
          but <span className="italic">measures of intent</span>.
        </h2>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 relative">
        
        {/* Vertical Divider Lines */}
        <div className="hidden md:block absolute inset-y-0 left-1/4 w-px bg-black/10" />
        <div className="hidden md:block absolute inset-y-0 left-2/4 w-px bg-black/10" />
        <div className="hidden md:block absolute inset-y-0 left-3/4 w-px bg-black/10" />

        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="space-y-6"
          >
            {/* Large Value */}
            <div className="text-6xl md:text-7xl font-extralight tracking-tight">
              {item.value}
            </div>

            {/* Label */}
            <div className="text-sm tracking-widest text-[#6B6B6B]">
              {item.label.toUpperCase()}
            </div>

            {/* Description */}
            <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-xs">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
