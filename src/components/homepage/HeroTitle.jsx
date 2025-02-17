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
      className="font-ddt-extended mx-auto flex w-[15ch] flex-wrap items-center justify-center pt-[1.2em] text-center text-[26px] leading-none text-transparent uppercase min-[430px]:text-[32px] sm:pt-[1.25em] sm:text-[40px] md:pt-[1.3em] md:text-[48px] lg:pt-[1.4em] lg:text-[54px] xl:pt-[1.45em] xl:text-[58px] 2xl:pt-[1.5em] 2xl:text-[60px]"
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
