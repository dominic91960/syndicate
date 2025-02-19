import logoWebp from "../../assets/images/dashboard/logo.webp";
import logoPng from "../../assets/images/dashboard/logo.png";

const FormSection = ({ children }) => {
  return (
    <section
      className="flex items-center justify-center bg-gradient-to-tl from-[#ffbe25] to-[#f0811a] p-px"
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
            className="mx-auto size-[80px] rounded-full object-contain sm:size-[90px] md:size-[100px] lg:size-[110px] xl:size-[115px] 2xl:size-[120px]"
          />
        </picture>
        {children}
      </form>
    </section>
  );
};

export default FormSection;
