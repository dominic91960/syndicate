import Hero from "../components/homepage/Hero";
import brickBg from "../assets/images/homepage/brick-bg.png";

const HomePage = () => {
  return (
    <>
      <header className="h-[50px] bg-[#0A0A0A]"> </header>
      <main
        className="font-montserrat bg-[#0A0A0A] bg-fixed text-[12px] text-white sm:text-[13px] md:text-[14px] lg:text-[14.5px] xl:text-[15px] 2xl:text-[16px]"
        style={{ backgroundImage: `url(${brickBg})` }}
      >
        <Hero />
        <div className="h-[40vh]"></div>
      </main>
    </>
  );
};

export default HomePage;
