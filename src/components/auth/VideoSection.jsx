import batRabbitThumbnail from "../../assets/images/homepage/faq/bat-rabbit-thumbnail.png";
import batRabbitMp4 from "../../assets/images/homepage/faq/bat-rabbit.mp4";
import batRabbitWebm from "../../assets/images/homepage/faq/bat-rabbit.webm";

const VideoSection = ({ title, desc }) => {
  return (
    <section
      className="flex h-full items-center justify-center bg-gradient-to-br from-[#ffbe25] to-[#f0811a] p-px"
      style={{
        clipPath:
          "polygon(0 0, 30.2% 0, 32.2% 0.95%, 67.8% 0.95%, 69.8% 0, 100% 0, 100% 10.2%, 90.1% 15.1%, 90.1% 17.25%, 100% 12.25%, 100% 15.2%, 90.1% 20.1%, 90.1% 22.25%, 100% 17.25%, 100% 20.2%, 90.2% 25.1%, 90.1% 27.25%, 100% 22.25%, 100% 98.05%, 50.1% 98.05%, 47.1% 100%, 0 100%, 0 89.8%, 2% 88.8%, 2% 21.2%, 0 20.2%)",
      }}
    >
      <div
        className="relative flex h-full w-full flex-col items-end justify-end bg-[#0A0A0A] p-[3em]"
        style={{
          clipPath:
            "polygon(0 0, 30% 0, 32% 1%, 68% 1%, 70% 0, 100% 0, 100% 10%, 90% 15%, 90% 17.5%, 100% 12.5%, 100% 15%, 90% 20%, 90% 22.5%, 100% 17.5%, 100% 20%, 90% 25%, 90% 27.5%, 100% 22.5%, 100% 98%, 50% 98%, 47% 100%, 0 100%, 0 90%, 2% 89%, 2% 21%, 0 20%)",
        }}
      >
        {/* Video */}
        <video
          autoPlay
          disablePictureInPicture
          disableRemotePlayback
          loop
          muted
          playsInline
          poster={batRabbitThumbnail}
          src={batRabbitWebm}
          className="absolute inset-0 size-full object-cover"
        >
          <source src={batRabbitMp4} type="video/mp4" />
        </video>

        {/* Black tint */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Text */}
        <h1 className="relative mb-[0.2em] text-[3em] leading-none font-bold uppercase">
          {title}
        </h1>
        <p className="relative text-justify">{desc}</p>
      </div>
    </section>
  );
};

export default VideoSection;
