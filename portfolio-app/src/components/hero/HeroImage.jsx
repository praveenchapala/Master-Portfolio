import profileImg from "../../assets/images/ProfileImage.jpeg";
import { motion } from "framer-motion";

function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      <div className="relative">

        {/* Soft Glow */}
        <div
          className="
            absolute
            -inset-6
            rounded-[36px]
            bg-cyan-500/20
            blur-3xl
          "
        />

        {/* Gradient Border */}
        <div
          className="
            absolute
            -inset-[2px]
            rounded-[32px]
            bg-gradient-to-br
            from-cyan-400
            via-blue-500
            to-purple-500
          "
        />

        {/* Image */}
        <motion.img
          src={profileImg}
          alt="Praveen Chapala"
          className="
            relative
            rounded-[30px]
            object-cover
            object-center

            w-[280px]
            h-[420px]

            sm:w-[320px]
            sm:h-[470px]

            md:w-[380px]
            md:h-[560px]

            lg:w-[420px]
            lg:h-[620px]

            shadow-2xl
          "
          whileHover={{
            scale: 1.02,
          }}
          transition={{
            duration: 0.3,
          }}
        />
      </div>
    </motion.div>
  );
}

export default HeroImage;