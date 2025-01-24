import star from "../assets/star.svg";
import arrow from "../assets/arrow.svg";
import IntroVideo from "../assets/introVideo.webm";

export const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-36">
        <button className="flex w-fit items-center gap-2 p-2 py-3 border-1 border-[#D548EC] rounded-2xl cursor-pointer hover:border-gray-300 hover:bg-gray-300">
          <img src={star} alt="star icon" className="w-6" />
          <span>Push Chain proposal has successfully passed.</span>
          <img src={arrow} alt="arrow icon" className="w-5 rotate-45" />
        </button>
        <div className="w-full flex flex-col items-center mt-2">
          <h1 className="font-extrabold text-5xl">Build Universal Apps</h1>
          <span className="text-center w-3xl mt-4 font-normal text-2xl">
            Push Chain is a shared-state blockchain that allows all chains to
            unify, enabling consumer apps that function from any chain.
            <br />
            <b className="text-xl">
              Push is the layer 1 for the web3 app ecosystem.
            </b>
          </span>
          <div className="flex gap-3 mt-4">
            <button className="p-3 bg-[#D548EC] hover:bg-[#a961b4] rounded-2xl px-4 text-white cursor-pointer">
              Get Notified about Testnet
            </button>
            <button className=" p-3 px-4 bg-white text-black rounded-2xl cursor-pointer hover:border-gray-300 hover:bg-gray-300">
              Explore Push Chain
            </button>
          </div>
        </div>
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
            <source src={IntroVideo} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};
