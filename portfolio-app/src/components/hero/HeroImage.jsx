import profileImg from "../../assets/images/ProfileImage.jpeg";
import { motion } from "framer-motion";

function HeroImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative"
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          -inset-6
          rounded-[40px]
          bg-cyan-500/20
          blur-3xl
        "
      />

      {/* Gradient Border */}
      <div
        className="
          rounded-[32px]
          p-[2px]
          bg-gradient-to-br
          from-cyan-400
          via-blue-500
          to-purple-500
          shadow-[0_0_40px_rgba(34,211,238,0.25)]
        "
      >
        {/* Image */}
        <motion.img
          src={profileImg}
          alt="Praveen"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="
            w-[320px]
            h-[420px]

            md:w-[380px]
            md:h-[500px]

            rounded-[30px]
            object-cover
            object-center

            bg-slate-900
          "
        />
      </div>
    </motion.div>
  );
}

export default HeroImage;