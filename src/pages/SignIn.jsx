import { Link } from "react-router";

import InputGroup from "../components/ui/inputs/InputGroup";
import PasswordInput from "../components/ui/inputs/PasswordInput";
import GradientButton from "../components/ui/buttons/GradientButton";
import OutlineButton from "../components/ui/buttons/OutlineButton";

import brickBgWebp from "../assets/images/homepage/brick-bg.webp";
import brickBgPng from "../assets/images/homepage/brick-bg.png";
import logoWebp from "../assets/images/dashboard/logo.webp";
import logoPng from "../assets/images/dashboard/logo.png";
import GoogleIcon from "../components/ui/icons/GoogleIcon";
import MetamaskIcon from "../components/ui/icons/MetamaskIcon";

const SignInPage = () => {
  return (
    <section className="font-montserrat homepage relative h-dvh min-h-dvh w-full bg-[#0A0A0A] bg-cover bg-center text-[12px] text-white sm:text-[13px] md:text-[14px] lg:text-[14.5px] xl:text-[15px] 2xl:text-[16px]">
      {/* Brick bg */}
      <picture>
        <source srcSet={brickBgWebp} />
        <img
          src={brickBgPng}
          alt="Hero background"
          className="absolute inset-0 object-cover"
        />
      </picture>
      {/* Black tint */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Sign in form container */}
      <div className="section-padding relative container mx-auto flex h-full w-full items-center justify-center">
        <form className="w-[90%] max-w-[35em] rounded-[0.3em] bg-white/5 p-[3em] backdrop-blur-sm">
          <picture>
            <source srcSet={logoWebp} />
            <img
              src={logoPng}
              alt="Hero background"
              className="mx-auto size-[80px] object-contain 2xl:size-[120px]"
            />
          </picture>

          <h1 className="font-montserrat relative mx-auto mt-[0.6em] mb-[1em] w-fit text-center text-[1.6em] leading-none font-semibold">
            Welcome Back
          </h1>

          {/* Google and metamask sign in */}
          <div className="flex items-center justify-center gap-[1em]">
            <OutlineButton type="button" className="p-[0.6em] uppercase">
              <GoogleIcon classname="size-[1.8em]" />
            </OutlineButton>

            <OutlineButton type="button" className="p-[0.6em] uppercase">
              <MetamaskIcon classname="size-[1.8em]" />
            </OutlineButton>
          </div>

          <div className="my-[0.8em] flex items-center justify-between gap-[0.5em]">
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
            className="mb-[1em] rounded-[0.3em] border border-white/30 focus:border-white/50"
          />

          {/* Password input */}
          <PasswordInput
            id="b"
            label="Password"
            column
            className="mb-[2em] rounded-[0.3em]"
          />

          {/* Submit button */}
          <GradientButton type="submit" className="w-full uppercase">
            Sign In
          </GradientButton>

          {/* Sign up link */}
          <div className="my-[0.8em] text-center">
            <span>Don&apos;t have an account?</span>&nbsp;
            <Link to="/sign-up" className="text-[#FFBE25] hover:opacity-90">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignInPage;
