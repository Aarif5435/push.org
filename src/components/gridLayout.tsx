import boxVideo from "../assets/boxhover.webm";
import onboarding from "../assets/onboarding.webm";
import cheapStorage from "../assets/cheap_storage.webm";
import anyChain from "../assets/anyChain.webm";
import knowledge from "../assets/knowledgeBase.webm";
import blackArrow from "../assets/blackArrow.svg";
import scalable from "../assets/infinitely_scalable.webm";

export const GridLayout = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 bg-black text-white mt-10">
      <div className="bg-black border h-[620px] border-white p-4 rounded-4xl col-span-2 row-span-2 flex flex-col items-left">
        <div className="w-full h-full">
          <video
            className="w-full h-full"
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
        <span className="font-semibold text-4xl">
          Instant <br /> Finality
        </span>
      </div>

      <div className="bg-[#64F6B2] border rounded-4xl col-span-2 border-black p-4">
        <div className="w-full h-[60%]">
          <video
            className="w-full h-full"
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
        <span className="font-light mt-5 text-black text-4xl">
          Seamless, Instant <br /> Onboarding
        </span>
      </div>

      <div className="bg-[#4B75FF] border border-black p-4 rounded-4xl">
        <div className="w-full h-[60%]">
          <video
            className="w-full h-full"
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
        <span className="font-thin text-4xl">
          Cheap <br /> Storage & <br /> Tx Fee
        </span>
      </div>

      <div className="bg-white border border-black p-4 rounded-4xl text-black">
        <div className="w-full h-[60%]">
          <video
            className="w-full h-full"
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
        <span className="font-thin text-4xl">
          Any Chain <br /> Transactions
        </span>
      </div>

      <div className="bg-[#E492FF] border border-black p-4 rounded-4xl col-span-3 flex flex-col justify-between">
        <div className="w-full h-[60%] flex justify-between">
          <video
            className="w-[70%] h-full"
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
          <img src={blackArrow} alt="blackArrow" className="w-10" />
        </div>
        <div className="flex justify-between text-black items-center">
          <span className="font-medium text-4xl">
            Explore the <br /> Knowledge Base
          </span>
          <p className="text-xl">
            Learn why Push Chain stands out as <br /> the foremost consumer
            chain in web3
          </p>
        </div>
      </div>

      <div className="bg-[#FFE658] border border-black p-4 rounded-4xl">
        <div className="w-full h-[60%]">
          <video
            className="w-full h-full"
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
        <span className="font-medium text-4xl text-black">
          Infinitely <br /> Scalable
        </span>
      </div>
    </div>
  );
};
