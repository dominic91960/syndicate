import logo from "../../assets/images/logo.png";
import bg from "../../assets/images/homepage/workshop/workshop-bg.png";
import shockMp4 from "../../assets/images/homepage/workshop/shock.mp4";

const Workshop = () => {
  return (
    <section
      className="bg-cover py-[5em]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7)), url(${bg})`,
      }}
    >
      <div className="section-padding container mx-auto">
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
