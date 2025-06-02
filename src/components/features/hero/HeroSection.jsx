import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeroCarousel from "./HeroCarousel";

const HeroSection = () => (
  <section className="relative h-[80vh] w-full bg-black overflow-hidden">
    <HeroCarousel />

    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center h-full text-center px-4 pointer-events-none">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-white text-5xl md:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-lg uppercase"
      >
        Renace Padel Club
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-white text-lg md:text-xl mt-4 max-w-xl drop-shadow-md leading-relaxed"
      >
        Equipamiento de pádel premium para jugadores que buscan superarse.
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="mt-10"
      >
        <Link to="/category/all">
          <Button
            size="lg"
            className="rounded-full px-8 py-4 text-lg font-semibold shadow-md hover:shadow-lg transition pointer-events-auto"
          >
            Ver Catálogo
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
