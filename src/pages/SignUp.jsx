import { Link } from "react-router";

import VideoSection from "../components/auth/VideoSection";
import InputGroup from "../components/ui/inputs/InputGroup";
import PasswordInput from "../components/ui/inputs/PasswordInput";
import GradientButton from "../components/ui/buttons/GradientButton";

import brickBgWebp from "../assets/images/homepage/brick-bg.webp";
import brickBgPng from "../assets/images/homepage/brick-bg.png";
import FormSection from "../components/auth/FormSection";

const SignUpPage = () => {
  return (
    <section className="font-montserrat homepage relative flex h-dvh min-h-dvh w-full items-center justify-center overflow-x-hidden overflow-y-auto bg-[#0A0A0A] bg-cover bg-center text-[12px] text-white sm:text-[13px] md:text-[14px] lg:text-[14.5px] xl:text-[15px] 2xl:text-[16px]">
      {/* Brick bg */}
      <picture>
        <source srcSet={brickBgWebp} />
        <img
          src={brickBgPng}
          alt="Hero background"
          className="fixed inset-0 size-full object-cover"
        />
      </picture>

      {/* Black tint */}
      <div className="fixed inset-0 size-full bg-black/70"></div>

      {/* Top leaklight */}
      <div className="absolute inset-0 m-auto aspect-square w-3/4 rounded-full bg-[#F0811A38] blur-[100px] sm:w-3/5 lg:w-1/2"></div>

      {/* Sign in form container */}
      <div className="section-padding relative container m-auto">
        <div className="mx-auto grid max-h-[700px] w-full max-w-[360px] grid-cols-1 gap-[2em] sm:w-3/5 sm:max-w-none lg:w-3/4 lg:grid-cols-2 xl:w-[65%] 2xl:w-3/5">
          {/* Video area */}
          <VideoSection
            title="Join the syndicate"
            desc="The future is now. Secure your place in the Syndicate and unlock
                access to exclusive NFT perks, events, and rewards."
          />

          {/* Sign up form */}
          <FormSection>
            {/* Title for small screens (md and below) */}
            <h2 className="text-center text-[2em] font-bold lg:hidden">
              Create An Account
            </h2>

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
            <GradientButton type="submit" className="mt-[1em] w-full uppercase">
              Sign Up
            </GradientButton>

            {/* Sign up link */}
            <div className="text-center">
              <span>Have an account already?</span>&nbsp;
              <Link to="/sign-in" className="text-[#FFBE25] hover:opacity-90">
                Sign In
              </Link>
            </div>
          </FormSection>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
