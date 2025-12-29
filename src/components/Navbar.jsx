import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Studio", href: "#studio" },
  { label: "Process", href: "#process" },
  { label: "Materials", href: "#materials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#F7F6F4]/80 backdrop-blur border-b border-black/10">
        <nav className="flex items-center justify-between px-8 md:px-16 py-5">

          {/* Brand */}
          <div className="text-lg font-crondereg font-bold tracking-wide">
            Studio Forma
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 text-sm">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="relative group text-[#1C1C1C] font-playfair"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#1C1C1C] group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            {/* Try Route */}
            <Link
              to="/try"
              className="relative group text-[#1C1C1C] font-playfair"
            >
              Theme
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#1C1C1C] group-hover:w-full transition-all duration-300" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-sm"
            onClick={() => setOpen(true)}
          >
            MENU
          </button>
        </nav>
      </header>

      {/* ================= MOBILE OVERLAY ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#F7F6F4] z-50"
          >
            <div className="flex flex-col h-full justify-between px-10 py-8">

              <div className="flex justify-between items-center">
                <div className="text-lg font-crondereg font-bold">
                  Studio Forma
                </div>
                <button
                  className="text-sm"
                  onClick={() => setOpen(false)}
                >
                  CLOSE
                </button>
              </div>

              <div className="flex flex-col gap-8 text-2xl">
                {navLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}

                {/* Try Route (Mobile) */}
                <Link
                  to="/try"
                  onClick={() => setOpen(false)}
                >
                  Try
                </Link>
              </div>

              <p className="text-xs text-[#6B6B6B]">
                © 2026 Studio Forma
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
