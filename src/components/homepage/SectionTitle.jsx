import { useRef, useEffect } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import TitleSpan from "./TitleSpan";

const SectionTitle = ({ title }) => {
  const containerRef = useRef();
  const timelineRef = useRef();

  useGSAP(
    () => {
      const spanElements = document.querySelectorAll(`.${title.toLowerCase()}`);

      gsap.set(spanElements, { scale: 0 });

      timelineRef.current = gsap
        .timeline({ paused: true })
        .to(spanElements, {
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

  useEffect(() => {
    const handleTitleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        timelineRef.current.play();
        observer.unobserve(entry.target);
      });
    };
    const options = {
      root: null,
      threshold: 0,
      rootMargin: "0px 0px -20% 0px",
    };

    const observer = new IntersectionObserver(handleTitleIntersect, options);
    observer.observe(containerRef.current);
  }, []);

  return (
    <h1
      ref={containerRef}
      className="font-ddt-extended relative mx-auto flex w-fit items-center justify-center py-[1.5em] text-center text-[26px] leading-none text-transparent min-[430px]:py-[1.2em] min-[430px]:text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] xl:text-[58px] 2xl:text-[60px]"
    >
      <TitleSpan text={title} className={title.toLowerCase()} />
    </h1>
  );
};

export default SectionTitle;
