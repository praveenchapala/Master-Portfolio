import profileImg from "../../assets/images/Perfect_Passport_Size_Photo.jpeg";

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

      {/* Decorative Ring */}
      <div
        className="
          absolute
          w-[250px]
          h-[250px]
          rounded-full
          border
          border-cyan-400/20
        "
      />

      {/* Profile Image */}
      <img
        src={profileImg}
        alt="Praveen"
        className="
          relative
          w-52
          h-52
          rounded-full
          object-cover
          object-top
          bg-white
          p-2
          border-4
          border-cyan-400
          shadow-[0_0_40px_rgba(34,211,238,0.45)]
        "
      />
    </div>
  );
}

export default HeroImage;