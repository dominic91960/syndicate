import GradientButton from "../ui/buttons/GradientButton";
import MintInput from "./MintInput";
import OutlineButton from "../ui/buttons/OutlineButton";

const Mint = () => {
  return (
    <section className="relative bg-black/70 pt-[2.5em] pb-[5em] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[19.5px] 2xl:text-[20px]">
      <div className="section-padding container mx-auto flex flex-col items-center">
        {/* Connect wallet btn */}
        <GradientButton
          className="mb-[2em]"
          //   onClick={() => window.alert("Clicked")}
        >
          Connect Wallet
        </GradientButton>

        {/* Total count */}
        <div className="font-ddt gradient-text flex w-[16ch] justify-between text-[1.5em]">
          <p>Total</p>
          <p>51/</p>
        </div>

        {/* Minted count */}
        <div className="font-ddt gradient-text flex w-[16ch] justify-between text-[1.5em]">
          <p>Minted</p>
          <p>33333</p>
        </div>

        {/* Mint input  */}
        <MintInput />

        <p className="my-[1em] font-semibold">Or play for a discount</p>
        <OutlineButton>PLAY TO MINT</OutlineButton>
      </div>
    </section>
  );
};

export default Mint;
