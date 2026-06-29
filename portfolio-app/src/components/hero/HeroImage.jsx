import profileImg from "../../assets/images/Perfect_Passport_Size_Photo.jpeg";

function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer Glow */}
      <div className="absolute w-[360px] h-[360px] bg-cyan-500/15 blur-[100px] rounded-full animate-pulse"></div>

      {/* Decorative Ring */}
      <div
        className="
          absolute
          w-[310px]
          h-[310px]
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
          w-64
          h-64
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