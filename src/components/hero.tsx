import star from "../assets/star.svg";
import arrow from "../assets/arrow.svg";
import IntroVideo from "../assets/introVideo.webm";

export const HeroSection = () => {
  return (
    <div className="flex flex-col items-center px-4 md:px-6 lg:px-8 mt-16 md:mt-24 lg:mt-36">
      {/* Proposal Button */}
      <button className="flex w-fit items-center gap-2 p-2 py-3 border border-[#D548EC] rounded-2xl cursor-pointer hover:border-gray-300 hover:bg-gray-300 text-sm md:text-base">
        <img src={star} alt="star icon" className="w-4 md:w-6" />
        <span className="max-w-[200px] md:max-w-none">Push Chain proposal has successfully passed.</span>
        <img src={arrow} alt="arrow icon" className="w-4 md:w-5 rotate-45" />
      </button>

      {/* Main Content */}
      <div className="w-full flex flex-col items-center mt-4 md:mt-6">
        {/* Heading */}
        <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-center">
          Build Universal Apps
        </h1>

        {/* Description */}
        <div className="text-center mt-4 space-y-2 max-w-[90%] md:max-w-[80%] lg:max-w-[70%]">
          <p className="font-normal text-lg md:text-xl lg:text-2xl">
            Push Chain is a shared-state blockchain that allows all chains to
            unify, enabling consumer apps that function from any chain.
          </p>
          <p className="font-bold text-base md:text-lg lg:text-xl">
            Push is the layer 1 for the web3 app ecosystem.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-8 w-full sm:w-auto">
          <button className="p-3 bg-[#D548EC] hover:bg-[#a961b4] rounded-2xl px-4 text-white cursor-pointer text-sm md:text-base whitespace-nowrap">
            Get Notified about Testnet
          </button>
          <button className="p-3 px-4 bg-white text-black rounded-2xl cursor-pointer hover:border-gray-300 hover:bg-gray-300 text-sm md:text-base whitespace-nowrap">
            Explore Push Chain
          </button>
        </div>
      </div>

      {/* Video Container */}
      <div className="w-full h-full mt-8 md:mt-12">
        <video
          className="w-full h-full object-cover"
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
  );
};