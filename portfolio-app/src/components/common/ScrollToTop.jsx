import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollTop}
          className="
            fixed
            bottom-8
            right-8
            z-50
            w-14
            h-14
            rounded-full
            bg-cyan-500
            text-slate-950
            flex
            items-center
            justify-center
            shadow-[0_0_30px_rgba(34,211,238,0.5)]
            transition-all
            duration-300
            hover:scale-110
            hover:shadow-[0_0_40px_rgba(34,211,238,0.8)]
          "
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;