import { useEffect, useRef } from "react";
import intro from "../assets/audio/intro.mp3";

function AIVoice() {
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0.8;

        audioRef.current
          .play()
          .catch(() => {
            console.log("Autoplay blocked by browser");
          });
      }
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return <audio ref={audioRef} src={intro} preload="auto" />;
}

export default AIVoice;