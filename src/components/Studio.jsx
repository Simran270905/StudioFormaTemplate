import { motion } from "framer-motion";
import studio from "../assets/images/studio.jpg"

const Studio = () => {
  return (
    <section className="py-15 px-10 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-sm tracking-widest font-playfair font-bold text-[#B89B5E] mb-4">
          OUR STUDIO
        </p>

        <h2 className="text-4xl md:text-5xl font-light font-playfair leading-snug mb-8">
          A practice shaped <br />
          by restraint & clarity
        </h2>

        <p className="text-[#6B6B6B] leading-relaxed mb-6 font-playfair ">
          Our studio operates at the intersection of architecture
          and interior design. We collaborate closely with craftsmen,
          consultants and clients to ensure every detail feels resolved.
        </p>

        <p className="text-[#6B6B6B] leading-relaxed mb-10 font-playfair ">
          From concept to execution, we value calm processes,
          honest materials and enduring outcomes.
        </p>

        <button className="border font-playfair border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition">
          VISIT STUDIO
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <img
          src={studio}
          alt="Studio"
          className="w-full h-[520px] object-cover"
        />
        <div className="absolute inset-0 border border-black/10" />
      </motion.div>
    </section>
  );
};

export default Studio;
