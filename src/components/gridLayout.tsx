import boxVideo from "../assets/boxhover.webm";
import onboarding from "../assets/onboarding.webm";
import cheapStorage from "../assets/cheap_storage.webm";
import anyChain from "../assets/anyChain.webm";
import knowledge from "../assets/knowledgeBase.webm";
import blackArrow from "../assets/blackArrow.svg";
import scalable from "../assets/infinitely_scalable.webm";

export const GridLayout = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-black text-white mt-10">
      {/* Instant Finality */}
      <div className="bg-black border border-white p-4 rounded-4xl col-span-1 sm:col-span-2 row-span-1 sm:row-span-2 flex flex-col">
        <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-full">
          <video
            className="w-full h-full object-cover rounded-3xl"
            preload="auto"
            autoPlay
            loop
            playsInline
            muted
            controlsList="nofullscreen"
          >
            <source src={boxVideo} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <span className="font-semibold text-2xl sm:text-3xl md:text-4xl mt-4">
          Instant <br /> Finality
        </span>
      </div>

      {/* Seamless Onboarding */}
      <div className="bg-[#64F6B2] border rounded-4xl col-span-1 sm:col-span-2 border-black p-4">
        <div className="w-full h-[180px] sm:h-[220px] md:h-[260px]">
          <video
            className="w-full h-full object-contain"
            preload="auto"
            autoPlay
            loop
            playsInline
            muted
            controlsList="nofullscreen"
          >
            <source src={onboarding} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <span className="font-light mt-4 text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Seamless, Instant <br /> Onboarding
        </span>
      </div>

      {/* Cheap Storage */}
      <div className="bg-[#4B75FF] border border-black p-4 rounded-4xl">
        <div className="w-full h-[180px] sm:h-[220px] md:h-[260px]">
          <video
            className="w-full h-full object-contain"
            preload="auto"
            autoPlay
            loop
            playsInline
            muted
            controlsList="nofullscreen"
          >
            <source src={cheapStorage} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <span className="font-thin text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Cheap <br /> Storage & <br /> Tx Fee
        </span>
      </div>

      {/* Any Chain */}
      <div className="bg-white border border-black p-4 rounded-4xl text-black">
        <div className="w-full h-[180px] sm:h-[220px] md:h-[260px]">
          <video
            className="w-full h-full object-contain"
            preload="auto"
            autoPlay
            loop
            playsInline
            muted
            controlsList="nofullscreen"
          >
            <source src={anyChain} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <span className="font-thin text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Any Chain <br /> Transactions
        </span>
      </div>

      {/* Knowledge Base */}
      <div className="bg-[#E492FF] border border-black p-4 rounded-4xl col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col justify-between">
        <div className="w-full h-[180px] sm:h-[220px] md:h-[260px] flex justify-between">
          <video
            className="w-[70%] h-full object-contain"
            preload="auto"
            autoPlay
            loop
            playsInline
            muted
            controlsList="nofullscreen"
          >
            <source src={knowledge} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <img src={blackArrow} alt="blackArrow" className="w-8 sm:w-10 md:w-12" />
        </div>
        <div className="flex flex-col sm:flex-row justify-between text-black items-start sm:items-center gap-4 sm:gap-0 mt-4">
          <span className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Explore the <br /> Knowledge Base
          </span>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[300px]">
            Learn why Push Chain stands out as <br className="hidden sm:block" /> the foremost consumer
            chain in web3
          </p>
        </div>
      </div>

      {/* Infinitely Scalable */}
      <div className="bg-[#FFE658] border border-black p-4 rounded-4xl">
        <div className="w-full h-[180px] sm:h-[220px] md:h-[260px]">
          <video
            className="w-full h-full object-contain"
            preload="auto"
            autoPlay
            loop
            playsInline
            muted
            controlsList="nofullscreen"
          >
            <source src={scalable} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <span className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black">
          Infinitely <br /> Scalable
        </span>
      </div>
    </div>
  );
};