import { motion } from "framer-motion";
import int1 from "../assets/images/hero.png"
const Hero = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 arch-grid">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center px-10 md:px-20"
      >
        <p className="tracking-widest text-sm text-[#B89B5E] mb-6 font-playfair font-bold">
          INTERIOR DESIGN STUDIO
        </p>

        <h1 className="text-5xl md:text-7xl font-medium font-oliver leading-tight mb-8">
          Geometry <br /> in space, <br />
          calm in <span className="font-bold">living</span>
        </h1>

        <p className="text-[#6B6B6B] max-w-md mb-10 font-playfair">
          We design interior environments rooted in proportion,
          material honesty and timeless spatial clarity.
        </p>

        <div className="flex gap-6">
          <button className="border px-8 py-3 text-sm font-playfair hover:bg-black hover:text-white transition">
            VIEW WORK
          </button>
          <button className="underline underline-offset-8 font-playfair text-sm">
            CONTACT
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
        className="overflow-hidden"
      >
        <img
          src={int1}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
