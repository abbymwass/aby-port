import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center relative"
    >
      {/* Background decorative element */}
      <div className="absolute -z-10 flex justify-center items-center">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan/30 animate-[spin_20s_linear_infinite]" />
      </div>

      {/* Image container */}
      <div className="relative">
        <img
          src="/images/gael.jpg"
          alt="Abigael Njeri"
          className="max-h-[450px] w-auto rounded-full object-cover border-2 border-white/10"
        />
      </div>
    </motion.div>
  );
};

export default HeroPic;
