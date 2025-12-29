import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const interiors = [
  {
    src: "/public/images/interior1.jpg",
    color: "#D4C7AF",
    fontColor: "#5A3735",
    opacity: 0.6,
    title: "Monochrome Living",
    tagline: "Urban Residence",
    description:
      "A refined monochrome living space designed with balanced geometry, muted textures, and warm materials for a timeless look.",
    elements: [
      { src: "/public/images/sofa.png", name: "Sofa", material: "Solid wood frame", finish: "Premium fabric upholstery", top: "15%", left: "25%", size: 300, opacity: 1 },
      { src: "/public/images/tablelamp.png", name: "Floor Lamp", material: "Brushed metal", finish: "Warm matte gold", top: "22%", left: "60%", size: 180, opacity: 0.9 },
      { src: "/public/images/tree.png", name: "Indoor Plant", material: "Ceramic pot", finish: "Natural clay", top: "15%", left: "5%", size: 200, opacity: 0.8 },
      { src: "/public/images/painting.png", name: "Painting", material: "Canvas", finish: "Paint", top: "10%", left: "35%", size: 100, opacity: 1 },
    ],
  },
  {
    src: "/images/interior2.jpg",
    color: "#676F53",
    fontColor: "#F5E9D3",
    opacity: 0.6,
    title: "Earthy Elegance",
    tagline: "Private Villa",
    description:
      "An earthy villa interior blending stone textures, warm lighting, and handcrafted furniture.",
    elements: [
      { src: "/public/images/bed2.png", name: "Bed", material: "Solid wood frame", finish: "Leather upholstery", top: "20%", left: "25%", size: 250, opacity: 1 },
      { src: "/public/images/lamp2.png", name: "Floor Lamp", material: "Brushed metal", finish: "Matte gold", top: "10%", left: "55%", size: 180, opacity: 0.9 },
      { src: "/public/images/nightable.png", name: "Accent Chair", material: "Oak frame", finish: "Fabric cover", top: "15%", left: "2%", size: 200, opacity: 0.85 },
      { src: "/public/images/decorpiece.png", name: "Decor Piece", material: "Silver", finish: "Glossy", top: "11.5%", left: "14%", size: 90, opacity: 0.8 },
    ],
  },
  {
    src: "/public/images/interior3.jpg",
    color: "#3A5059",
    fontColor: "#F5F5F2",
    opacity: 0.5,
    title: "Modern Minimal",
    tagline: "Studio Apartment",
    description:
      "A minimalist studio that focuses on proportion, negative space, and natural daylight.",
    elements: [
      { src: "/public/images/sofa2.png", name: "Sofa", material: "Metal frame", finish: "Fabric upholstery", top: "15%", left: "25%", size: 300, opacity: 1 },
      { src: "/public/images/table.png", name: "Table Lamp", material: "Metal", finish: "Matte black", top: "30%", left: "70%", size: 180, opacity: 0.9 },
      { src: "/public/images/wallshelf.png", name: "Bookshelf", material: "Wood", finish: "Walnut veneer", top: "0%", left: "30%", size: 200, opacity: 0.85 },
      { src: "/public/images/plant.png", name: "Plant", material: "Indoor Ceramic Pot", finish: "Design carving", top: "0%", left: "0%", size: 200, opacity: 0.85 },
    ],
  },
];

const Try = () => {
  const [current, setCurrent] = useState(0);
  const [activeItem, setActiveItem] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => setLoaded(true), []);

  const next = () => setCurrent((prev) => (prev + 1) % interiors.length);
  const prev = () => setCurrent((prev) => (prev - 1 + interiors.length) % interiors.length);

  /* 🔑 Keyboard Navigation */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setActiveItem(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <Navbar />

      {/* 🔙 BACK HOME BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="fixed top-24 left-6 z-50 flex items-center gap-2
                   border border-neutral-400 px-4 py-2 text-sm tracking-wide
                   text-neutral-200 hover:bg-neutral-200 hover:text-black transition"
      >
        <FiArrowLeft size={16} />
        Back Home
      </button>

      <motion.div
        className="relative min-h-screen overflow-hidden flex"
        animate={{
          background: `linear-gradient(to right, ${interiors[current].color}, ${interiors[current].color})`,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* LEFT SIDE */}
        <div className="relative flex-1 h-screen">
          <img
            src={interiors[current].src}
            alt={interiors[current].title}
            className="w-full h-full object-cover"
            style={{ opacity: interiors[current].opacity }}
          />

          <motion.div
            className="absolute inset-0 flex flex-col justify-center px-16 max-w-lg"
            style={{ color: interiors[current].fontColor }}
            initial={{ opacity: 0 }}
            animate={{ opacity: loaded ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-playfair font-bold tracking-[0.3em] uppercase mb-4">
              {interiors[current].tagline}
            </p>
            <h1 className="text-4xl lg:text-6xl font-transcity mb-6">
              {interiors[current].title}
            </h1>
            <p className="text-sm lg:text-base leading-relaxed font-playfair">
              {interiors[current].description}
            </p>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex-1 flex items-center justify-center bg-black/5">
          <div
            className="absolute left-4 top-1/2 z-20 p-3 cursor-pointer border border-neutral-400
                       text-neutral-200 hover:bg-neutral-200 hover:text-black transition -translate-y-1/2"
            onClick={prev}
          >
            <FiChevronLeft size={24} />
          </div>

          <div className="relative w-[600px] h-[500px] flex items-center justify-center">
            <img src="/images/circle.png" className="absolute w-full" />

            {interiors[current].elements.map((item, index) => (
              <div
                key={index}
                className="absolute cursor-pointer group"
                style={{ top: item.top, left: item.left }}
                onClick={() => setActiveItem(item)}
              >
                <img
                  src={item.src}
                  alt={item.name}
                  style={{ width: item.size, opacity: item.opacity }}
                />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2
                                opacity-0 group-hover:opacity-100 transition
                                text-xs bg-black/70 text-white px-3 py-1 rounded">
                  {item.name}
                </div>
              </div>
            ))}
          </div>

          <div
            className="absolute right-4 top-1/2 z-20 p-3 cursor-pointer border border-neutral-400
                       text-neutral-200 hover:bg-neutral-200 hover:text-black transition -translate-y-1/2"
            onClick={next}
          >
            <FiChevronRight size={24} />
          </div>
        </div>

        {/* POPUP */}
        {activeItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              className="bg-[#111] text-neutral-200 p-8 max-w-md w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl mb-4">{activeItem.name}</h3>
              <p className="text-sm mb-2">
                <span className="text-neutral-400">Material:</span> {activeItem.material}
              </p>
              <p className="text-sm mb-6">
                <span className="text-neutral-400">Finish:</span> {activeItem.finish}
              </p>
              <button
                onClick={() => setActiveItem(null)}
                className="border border-neutral-500 px-4 py-2 hover:bg-neutral-200 hover:text-black transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default Try;
