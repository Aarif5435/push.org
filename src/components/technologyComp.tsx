import background from "../assets/background.png";
import whiteArrow from "../assets/whiteArrow.svg";
import { GridLayout } from "./gridLayout";
import oneChain from "../assets/oneChain.webm";

export const Technology = () => {
  return (
    <>
      <div className="mt-48">
        <img src={background} alt="background" className="-mb-1" />
        <div className="h-fit px-10 sm:px-30 bg-black">
          <div className="p-5 flex flex-col sm:flex-row justify-between items-center pt-30">
            <h3 className="font-medium text-white text-3xl sm:text-5xl text-center sm:text-left">
              Craft seamless, consumer-focused <br />
              experiences for users on any chain
            </h3>
            <button className="flex items-center px-5 py-4 gap-3 h-fit rounded-2xl text-white bg-[#C442D9] hover:bg-[#d52fef] mt-5 sm:mt-0">
              Read Whitepaper{" "}
              <img className="text-white" src={whiteArrow} alt="arrow" />
            </button>
          </div>
          <GridLayout />
          <div className="mt-30 flex flex-col items-center justify-center">
            <h3 className="text-white text-2xl sm:text-4xl font-bold text-center">
              One chain for infinite possibilities
            </h3>
            <div className="w-full sm:w-[70%] h-full">
              <video
                className="w-full h-full"
                preload="auto"
                autoPlay
                loop
                playsInline
                muted
                controlsList="nofullscreen"
              >
                <source src={oneChain} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <span className="text-white text-sm sm:text-xl font-medium items-center text-center w-full sm:w-[60%] mt-20 pb-10">
              Push chain allows developers to finally create applications that
              are accessible from any chain.
              <br />
              <br />
              Push Chain's shared state enables settlement from all EVM and
              non-EVM chains, enabling shared applications and unleashing new
              experiences that benefit all L1s, L2s, and their users.
            </span>
          </div>
        </div>
        <img src={background} alt="background" className="rotate-180 -mt-1" />
      </div>
    </>
  );
};
