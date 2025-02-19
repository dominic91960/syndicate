import { Link } from "react-router";

import InputGroup from "../components/ui/inputs/InputGroup";
import PasswordInput from "../components/ui/inputs/PasswordInput";
import GradientButton from "../components/ui/buttons/GradientButton";

import brickBgWebp from "../assets/images/homepage/brick-bg.webp";
import brickBgPng from "../assets/images/homepage/brick-bg.png";
import logoWebp from "../assets/images/dashboard/logo.webp";
import logoPng from "../assets/images/dashboard/logo.png";
import batRabbitThumbnail from "../assets/images/homepage/faq/bat-rabbit-thumbnail.png";
import batRabbitMp4 from "../assets/images/homepage/faq/bat-rabbit.mp4";
import batRabbitWebm from "../assets/images/homepage/faq/bat-rabbit.webm";

const SignUpPage = () => {
  return (
    <section className="font-montserrat homepage relative h-dvh min-h-dvh w-full bg-[#0A0A0A] bg-cover bg-center text-[12px] text-white sm:text-[13px] md:text-[14px] lg:text-[14.5px] xl:text-[15px] 2xl:text-[16px]">
      {/* Brick bg */}
      <picture>
        <source srcSet={brickBgWebp} />
        <img
          src={brickBgPng}
          alt="Hero background"
          className="absolute inset-0 size-full object-cover"
        />
      </picture>
      {/* Black tint */}
      <div className="absolute inset-0 size-full bg-black/70"></div>

      {/* Sign in form container */}
      <div className="section-padding relative container mx-auto flex h-full w-full items-center justify-center">
        <div className="grid min-h-[70dvh] w-[60%] grid-cols-2 gap-[2em]">
          {/* Video area */}
          <div
            className="flex h-full items-center justify-center bg-gradient-to-br from-[#ffbe25] to-[#f0811a] p-0.5"
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
                Join the syndicate
              </h1>
              <p className="relative text-justify">
                The future is now. Secure your place in the Syndicate and unlock
                access to exclusive NFT perks, events, and rewards.
              </p>
            </div>
          </div>

          {/* Sign up form */}
          <div
            className="flex items-center justify-center bg-gradient-to-tl from-[#ffbe25] to-[#f0811a] p-0.5"
            style={{
              clipPath:
                "polygon(0 0, 70% 0, 72% 1%, 89.6% 1%, 91.6% 0, 100% 0, 100% 100%, 0 100%, 0 94.6%, 2% 93.6%, 2% 26.3%, 0 25.3%)",
            }}
          >
            <form
              className="flex size-full flex-col justify-between gap-[1em] bg-[#0A0A0A] p-[3em] backdrop-blur-sm"
              style={{
                clipPath:
                  "polygon(0 0, 70% 0, 72% 1%, 90% 1%, 92% 0, 100% 0, 100% 100%, 0 100%, 0 99%, 0 95%, 2% 94%, 2% 26%, 0 25%)",
              }}
            >
              <picture>
                <source srcSet={logoWebp} />
                <img
                  src={logoPng}
                  alt="Hero background"
                  className="mx-auto size-[80px] object-contain 2xl:size-[120px]"
                />
              </picture>

              {/* Username input */}
              <InputGroup
                type="text"
                id="username"
                label="Username"
                column
                className="rounded-[0.3em] border border-white/30 focus:border-white/50"
              />

              {/* Email input */}
              <InputGroup
                type="email"
                id="email"
                label="Email"
                column
                className="rounded-[0.3em] border border-white/30 focus:border-white/50"
              />

              {/* Password input */}
              <PasswordInput
                id="password"
                label="Password"
                column
                className="rounded-[0.3em]"
              />

              {/* Confirm password input */}
              <PasswordInput
                id="confirm-password"
                label="Confirm Password"
                column
                className="rounded-[0.3em]"
              />

              {/* Submit button */}
              <GradientButton
                type="submit"
                className="mt-[1em] w-full uppercase"
              >
                Sign Up
              </GradientButton>

              {/* Sign up link */}
              <div className="text-center">
                <span>Have an account already?</span>&nbsp;
                <Link to="/sign-in" className="text-[#FFBE25] hover:opacity-90">
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
