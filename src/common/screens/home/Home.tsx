import { HeroSection } from "@/common/components";
import { CardsComment } from "@/common/screens";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <div className="absolute inset-0 p-3 md:p-0  ">
      <HeroSection />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: "easeOut",
          },
        }}
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 px-2"
      >
          <CardsComment />
      </motion.div>
    </div>
  );
};
