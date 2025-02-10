import {
  AccordionRoot,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
} from "../ui/Accordion";

import batRabbitThumbnail from "../../assets/images/homepage/faq/bat-rabbit-thumbnail.png";
import batRabbitMp4 from "../../assets/images/homepage/faq/bat-rabbit.mp4";
import logo from "../../assets/images/logo.png";
import uncleRabbit from "../../assets/images/homepage/faq/uncle-rabbit.png";

const data = [
  {
    id: "faq001",
    question: "What rewards are available for community members?",
    answer:
      "Enjoy engaging storylines, follow up collections, an exclusive villain series, and shared IP Ownership rights.",
  },
  {
    id: "faq002",
    question: "What does the brand include?",
    answer:
      "We offer an anime series, toys, and merchandise, games on unity engine and decentralized IP ownership. Future plans include games on Unreal Engine and potential cinematic ventures.",
  },
  {
    id: "faq003",
    question: "How is the art quality of the Robotic Rabbits?",
    answer:
      "Our 4K resolution art boasts unique colors, primed for captivating merchandise, toys, and animation.",
  },
  {
    id: "faq004",
    question: "How many characters are in the brand?",
    answer:
      "We feature 3,333 Robotic Rabbits and multiple 3,333 capped collections. Only Robotic Rabbit holders can access follow-up collections.",
  },
  {
    id: "faq005",
    question: "How do I keep updated on the brand's progress?",
    answer:
      "Stay connected with our community updates via Discord. We value transparency and communication.",
  },
];

const FAQ = () => {
  return (
    <section className="bg-black/70 pb-[5em]">
      <div className="section-padding container mx-auto">
        {/* Title */}
        <h1 className="font-ddt-extended gradient-text mx-auto w-fit py-[1.5em] text-center text-[26px] leading-none sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[42px] 2xl:text-[46px]">
          FAQ
        </h1>

        <div className="relative grid grid-cols-1 gap-[1em] sm:grid-cols-12">
          {/* Leaklight */}
          <div className="absolute top-0 right-0 aspect-square w-3/4 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#F0811A38] blur-[100px] sm:w-3/5 lg:w-1/2"></div>

          {/* Division with video and logo */}
          <div className="relative col-span-6 hidden pb-[1em] sm:flex sm:flex-col sm:justify-between lg:col-span-5 2xl:col-span-4">
            <video
              autoPlay
              disablePictureInPicture
              disableRemotePlayback
              loop
              muted
              playsInline
              poster={batRabbitThumbnail}
              src={batRabbitMp4}
              className="w-fit rounded-[0.3em] object-cover"
            ></video>

            <picture className="w-4/5">
              <img
                src={logo}
                alt="The official logo of Robotic Rabbit Syndicate"
                className="w-full object-contain"
              />
            </picture>
          </div>

          {/* Empty div to create gap */}
          <div className="col-span-2 hidden 2xl:block"></div>

          {/* Division with accordion and FAQ image */}
          <div className="relative col-span-6 lg:col-span-7 2xl:col-span-6">
            <AccordionRoot type="single" defaultValue={data[0].id} collapsible>
              {data.map(({ id, question, answer }) => (
                <AccordionItem key={id} value={id}>
                  <AccordionHeader>
                    <AccordionTrigger>{question}</AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
              ))}
            </AccordionRoot>
            <picture>
              <img
                src={uncleRabbit}
                alt="The Robotic Rabbit version of Uncle Sam"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
