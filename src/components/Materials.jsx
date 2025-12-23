import { motion } from "framer-motion";
import wood from "../assets/images/wood.jpg";
import stone from "../assets/images/stone.jpg";
import light from "../assets/images/light.jpg"

const materials = [
  {
    title: "Wood",
    desc: "Warmth, tactility and timeless craftsmanship.",
    img: wood,
  },
  {
    title: "Stone",
    desc: "Grounded surfaces shaped by nature and precision.",
    img: stone,
  },
  {
    title: "Light",
    desc: "An architectural element that defines space.",
    img: light,
  },
];

const Materials = () => {
  return (
    <section className="py-32 px-10 md:px-24">
      <div className="mb-20 max-w-2xl">
        <p className="text-sm tracking-widest font-playfair font-bold text-[#B89B5E] mb-4">
          MATERIAL PHILOSOPHY
        </p>
        <h2 className="text-4xl md:text-5xl font-playfair leading-snug">
          Materials are not finishes, <br />
          they are <span className="italic">foundations</span>.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 font-playfair">
        {materials.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="group"
          >
            <div className="relative overflow-hidden">
              <img
                src={m.img}
                alt={m.title}
                className="h-[360px] w-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 border border-black/10" />
            </div>

            <h3 className="mt-6 text-lg font-light">{m.title}</h3>
            <p className="text-sm text-[#6B6B6B] mt-1">
              {m.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Materials;
