import brickBgWebp from "../assets/images/homepage/brick-bg.webp";
import brickBgPng from "../assets/images/homepage/brick-bg.png";

const SignInPage = () => {
  return (
    <section className="relative h-dvh min-h-dvh w-full bg-[#0A0A0A] bg-cover bg-center text-white">
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
        <form>
          <h1>sign in</h1>
        </form>
      </div>
    </section>
  );
};

export default SignInPage;
