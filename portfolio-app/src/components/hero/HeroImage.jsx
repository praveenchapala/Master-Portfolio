import profileImg from "../../assets/images/Perfect_Passport_Size_Photo.jpeg";
import { motion } from "framer-motion";

function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer Glow */}
      <div
        className="
          absolute
          w-[320px]
          h-[320px]
          bg-cyan-500/15
          blur-[100px]
          rounded-full
          animate-pulse
        "
      />

      {/* Ring 1 */}
      <motion.div
        className="
          absolute
          w-[250px]
          h-[250px]
          rounded-full
          border
          border-cyan-400/20
        "
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Ring 2 */}
      <motion.div
        className="
          absolute
          w-[290px]
          h-[290px]
          rounded-full
          border
          border-cyan-500/10
        "
        animate={{
          scale: [1.05, 1.15, 1.05],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Profile */}
      <motion.div
        className="relative z-20"
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src={profileImg}
          alt="Praveen"
          className="
            w-40 h-40 md:w-52 md:h-52
            rounded-full
            object-cover
            object-top
            bg-white
            p-2
            border-4
            border-cyan-400
            shadow-[0_0_50px_rgba(34,211,238,0.55)]
          "
        />
      </motion.div>
    </div>
  );
}

export default HeroImage;