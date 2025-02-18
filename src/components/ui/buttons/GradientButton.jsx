import { useRef } from "react";

import { cn } from "../../../lib/utils";

import audio from "../../../assets/images/homepage/sci-fi-button-click.mp3";

const GradientButton = ({ className, children, onClick, ...props }) => {
  const audioRef = useRef();

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const handleClick = () => {
    playAudio();
    onClick();
  };

  return (
    <>
      <audio ref={audioRef} src={audio}></audio>
      <button
        className={cn(
          "font-montserrat inline-flex items-center justify-center gap-[0.4em] rounded-[0.25em] bg-gradient-to-r from-[#FFBE25] to-[#F0811A] px-[2em] py-[0.5em] font-semibold text-black transition-all duration-200 enabled:cursor-pointer enabled:hover:shadow-[0_0_5px_#F0811A] enabled:hover:brightness-110 enabled:focus:shadow-[0_0_5px_#F0811A] enabled:focus:brightness-110 disabled:opacity-50",
          className,
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default GradientButton;
