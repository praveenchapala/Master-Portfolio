import profileImg from "../../assets/images/Perfect_Passport_Size_Photo.jpeg";

function HeroImage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <img
        src={profileImg}
        alt="Praveen"
        className="relative w-80 h-80 object-contain rounded-full bg-white p-2 border-4 border-cyan-400 shadow-2xl"
      />
    </div>
  );
}

export default HeroImage;