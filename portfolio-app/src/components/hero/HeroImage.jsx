import profileImg from "../../assets/images/ProfileImage.jpeg";
import { motion } from "framer-motion";

function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="
        w-full
        flex
        justify-center
        items-center
        overflow-hidden
        px-4
      "
    >
      <div
        className="
          relative
          w-full
          max-w-[420px]
          flex
          justify-center
        "
      >
        {/* Soft Glow */}
        <div
          className="
            absolute
            inset-0
            scale-105
            rounded-[32px]
            bg-cyan-500/15
            blur-2xl
          "
        />

        {/* Gradient Border */}
        <div
          className="
            absolute
            inset-0
            rounded-[32px]
            bg-gradient-to-br
            from-cyan-400
            via-blue-500
            to-purple-500
            p-[2px]
          "
        >
          <div className="w-full h-full rounded-[30px] bg-slate-950" />
        </div>

        {/* Image */}
        <motion.img
          src={profileImg}
          alt="Praveen Chapala"
          className="
            relative
            w-full
            max-w-[260px]
            sm:max-w-[300px]
            md:max-w-[360px]
            lg:max-w-[400px]

            h-auto

            rounded-[30px]
            object-cover
            object-center

            shadow-[0_20px_60px_rgba(0,0,0,0.45)]
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