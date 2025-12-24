import { motion } from "framer-motion";

import residentialVilla from "../assets/images/residentialvilla.png";
import urbanApartment from "../assets/images/int1.jpg";
import boutiqueOffice from "../assets/images/office.jpg";

const projects = [
  {
    title: "Residential Villa",
    subtitle: "Private Living",
    image: residentialVilla,
    count: "12 Projects",
  },
  {
    title: "Urban Apartment",
    subtitle: "City Residences",
    image: urbanApartment,
    count: "18 Projects",
  },
  {
    title: "Boutique Office",
    subtitle: "Work Environments",
    image: boutiqueOffice,
    count: "9 Projects",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-10 px-10 md:px-24 font-playfair bg-[#FAFAFA]"
    >
      {/* Header */}
      <div className="mb-20 max-w-2xl">
        <p className="text-sm tracking-widest text-[#8F7A4A] mb-4">
          SELECTED WORK
        </p>
        <h2 className="text-4xl md:text-5xl font-light mb-6">
          A collection of <span className="italic">designed spaces</span>
        </h2>
        <p className="text-sm text-[#6B6B6B] leading-relaxed">
          Each category represents a body of work developed through
          material exploration, spatial clarity, and restraint.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="relative group cursor-pointer"
          >
            {/* Stacked Card Effect */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 border border-black/10 bg-white/40 z-0" />
            <div className="absolute inset-0 translate-x-6 translate-y-6 border border-black/10 bg-white/20 z-0" />

            {/* Main Card */}
            <div className="relative z-10 bg-white border border-black/10 overflow-hidden">
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-light mb-1">
                  {project.title}
                </h3>
                <p className="text-xs tracking-widest text-[#6B6B6B] uppercase mb-4">
                  {project.subtitle}
                </p>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#6B6B6B]">
                    {project.count}
                  </p>
                  <span className="text-sm text-[#8F7A4A]">
                    View Collection →
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
