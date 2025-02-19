import GoogleIcon from "../components/ui/icons/GoogleIcon";
import MetamaskIcon from "../components/ui/icons/MetamaskIcon";
import { Link } from "react-router";

import VideoSection from "../components/auth/VideoSection";
import FormSection from "../components/auth/FormSection";
import InputGroup from "../components/ui/inputs/InputGroup";
import PasswordInput from "../components/ui/inputs/PasswordInput";
import GradientButton from "../components/ui/buttons/GradientButton";

import brickBgWebp from "../assets/images/homepage/brick-bg.webp";
import brickBgPng from "../assets/images/homepage/brick-bg.png";
import OutlineButton from "../components/ui/buttons/OutlineButton";

const SignInPage = () => {
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
            title="Access the Syndicate"
            desc="Welcome back, Agent. Enter your credentials to rejoin the Robotic Rabbit Syndicate and unlock your digital domain."
          />

          {/* Sign up form */}
          <FormSection>
            {/* Title for small screens (md and below) */}
            <h2 className="text-center text-[2em] font-bold lg:hidden">
              Welcome Back
            </h2>

            {/* Google and metamask sign in */}
            <div className="flex items-center justify-center gap-[1em]">
              <OutlineButton type="button" className="p-[0.6em] uppercase">
                <GoogleIcon classname="size-[1.8em]" />
              </OutlineButton>

              <OutlineButton type="button" className="p-[0.6em] uppercase">
                <MetamaskIcon classname="size-[1.8em]" />
              </OutlineButton>
            </div>

            <div className="flex items-center justify-between gap-[0.5em]">
              <hr className="grow border-t-white/30" />
              <p className="shrink-0">OR</p>
              <hr className="grow border-t-white/30" />
            </div>

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
              id="b"
              label="Password"
              column
              className="rounded-[0.3em]"
            />

            {/* Submit button */}
            <GradientButton type="submit" className="mt-[1em] w-full uppercase">
              Sign In
            </GradientButton>

            {/* Sign up link */}
            <div className="text-center">
              <span>Don&apos;t have an account?</span>&nbsp;
              <Link to="/sign-up" className="text-[#FFBE25] hover:opacity-90">
                Sign Up
              </Link>
            </div>
          </FormSection>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
