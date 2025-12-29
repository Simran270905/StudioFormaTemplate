import { motion } from "framer-motion";
import wood from "../assets/images/wood.jpg";
import stone from "../assets/images/stone.jpg";
import light from "../assets/images/light.jpg";

const materials = [
  {
    title: "Wood",
    desc: "Warmth, tactility and timeless craftsmanship.",
    img: wood,
    accent: "from-[#C9B58B] to-[#8F7A4A]", // warm
    
  },
  {
    title: "Stone",
    desc: "Grounded surfaces shaped by nature and precision.",
    img: stone,
    accent: "from-[#A7A7A7] to-[#6F6F6F]", // neutral
    
  },
  {
    title: "Light",
    desc: "An architectural element that defines space.",
    img: light,
    accent: "from-[#EFE6C8] to-[#C9B58B]", // luminous
    
  },
];

const Materials = () => {
  return (
    <section
      id="materials"
      className="py-20 px-10 md:px-24 font-playfair bg-[#FAFAFA]"
    >
      {/* Header */}
      <div className="mb-24 max-w-2xl">
        <p className="text-sm tracking-widest font-bold text-[#B89B5E] mb-4">
          MATERIAL PHILOSOPHY
        </p>
        <h2 className="text-4xl md:text-5xl leading-snug">
          Materials are not finishes, <br />
          they are <span className="italic">foundations</span>.
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {materials.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.12 }}
            className={`relative group ${m.offset}`}
          >
            {/* Layered Background */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 border border-black/10 bg-white/40 z-0" />

            {/* Main Card */}
            <div className="relative z-10 bg-white border border-black/10 overflow-hidden">
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={m.img}
                  alt={m.title}
                  className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-light mb-2">
                  {m.title}
                </h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">
                  {m.desc}
                </p>

                {/* Accent Line */}
                <span
                  className={`block h-px w-12 bg-gradient-to-r ${m.accent} group-hover:w-20 transition-all duration-500`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Materials;
