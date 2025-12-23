import { motion } from "framer-motion";

import residentialVilla from "../assets/images/residentialvilla.png";
import urbanApartment from "../assets/images/int1.jpg";
import boutiqueOffice from "../assets/images/office.jpg";

const projects = [
  {
    title: "Residential Villa",
    image: residentialVilla,
  },
  {
    title: "Urban Apartment",
    image: urbanApartment,
  },
  {
    title: "Boutique Office",
    image: boutiqueOffice,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 px-10 md:px-24 font-playfair"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4 }}
            className="group"
          >
            <div className="overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="h-[420px] w-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 border border-black/10" />
            </div>

            <h3 className="mt-6 text-lg font-light">
              {project.title}
            </h3>
            <p className="text-sm text-[#6B6B6B]">
              Minimal · Architectural · Calm
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
