import logo from "../../assets/images/logo.png";
import bg from "../../assets/images/homepage/workshop/workshop-bg.png";
import shockMp4 from "../../assets/images/homepage/workshop/shock.mp4";

const Workshop = () => {
  return (
    <section className="relative bg-cover py-[5em]">
      {/* Background image */}
      <picture className="absolute inset-0">
        <img
          src={bg}
          alt="Workshop background"
          className="size-full object-cover"
        />
      </picture>
      {/* Background tint */}
      <div className="absolute inset-0 size-full bg-black/70"></div>

      <div className="section-padding relative container mx-auto">
        {/* Leaklight */}
        <div className="absolute top-0 right-0 aspect-square w-3/4 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#F0811A38] blur-[100px] sm:w-3/5 lg:w-1/2"></div>

        {/* Video  */}
        <div className="relative z-[1] mx-auto mt-[1.5em] aspect-[16/9] w-[90%] rounded-[1em] shadow-[0_0_15px_8px_#00000080] sm:w-[80%]">
          {/* Title  */}
          <div className="relative flex items-center justify-between rounded-t-[1em] bg-[#0E0E0E] px-[3em] py-[0.6em] xl:px-[4em]">
            <h4 className="gradient-text font-ddt text-[1.25em]">Workshop</h4>
            <img
              src={logo}
              alt="The official logo of Robotic Rabbit Syndicate"
              className="w-[3em] object-contain"
            />
          </div>

          {/* Video */}
          <video
            autoPlay
            disablePictureInPicture
            disableRemotePlayback
            loop
            muted
            playsInline
            src={shockMp4}
            className="relative h-full w-full rounded-b-[1em] object-cover"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Workshop;
