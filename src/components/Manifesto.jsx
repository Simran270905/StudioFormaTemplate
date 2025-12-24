import { motion } from "framer-motion";

const Manifesto = () => {
  return (
    <section className="py-20 px-10 md:px-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl"
      >
        <p className="text-sm tracking-widest font-playfair font-bold text-[#B89B5E] mb-6">
          STUDIO MANIFESTO
        </p>

        <h2 className="text-4xl md:text-5xl font-playfair leading-snug">
          We believe spaces should feel <br />
          <span className="italic">quiet, intentional and enduring.</span>
        </h2>

        <p className="text-[#6B6B6B] mt-10 max-w-2xl font-playfair">
          Our work is guided by geometry, light and material restraint.
          We reject trends in favour of clarity — creating interiors
          that remain relevant long after they are built.
        </p>
      </motion.div>
    </section>
  );
};

export default Manifesto;
