import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import TitleSpan from "./TitleSpan";

gsap.registerPlugin(useGSAP);

const HeroTitle = () => {
  const containerRef = useRef();

  useGSAP(
    () => {
      const spanElements = document.querySelectorAll(".hero-title-text");

      gsap.set(spanElements, { scale: 0 });

      gsap
        .timeline()
        .to(spanElements, {
          delay: 1,
          duration: 0.1,
          scale: 1.3,
          ease: "none",
          stagger: 0.04,
        })
        .to(
          spanElements,
          {
            duration: 0.7,
            scale: 1,
            ease: "bounce.out",
            stagger: 0.04,
          },
          "<0.1",
        );
    },
    { scope: containerRef },
  );

  return (
    <h1
      ref={containerRef}
      className="font-ddt-extended gradient-text mx-auto flex w-[15ch] flex-wrap items-center justify-center pt-[1.2em] text-center text-[26px] leading-none uppercase sm:pt-[1.4em] sm:text-[30px] md:pt-[1.5em] md:text-[34px] lg:pt-[1.6em] lg:text-[38px] xl:pt-[1.8em] xl:text-[42px] 2xl:pt-[2em] 2xl:text-[46px]"
    >
      <TitleSpan text="Robotic" className="hero-title-text" />
      &nbsp;
      <TitleSpan text="Rabbit" className="hero-title-text" />
      &nbsp;
      <TitleSpan text="Syndicate" className="hero-title-text" />
    </h1>
  );
};

export default HeroTitle;
