import crypto from "../assets/crypto.webp";
import arrow from "../assets/arrow.svg";
import second_hero from "../assets/second-hero.webp";

export const KnowledgeBase = () => {
  return (
    <>
      <div className="px-8">
        <h1 className="font-medium text-5xl">
          Consumer applications that work from any chain, reach instant
          finality, and achieve true scalability.
        </h1>
        <div className="pt-10 mt-10 flex justify-between">
          <div className="p-2 pt-10">
            <div className="flex gap-36">
              <span>
                <h2 className="font-bold text-5xl">4MB</h2>
                <h3 className="font-medium text-xl">Block Size</h3>
              </span>
              <span>
                <h2 className="font-bold text-5xl">1s</h2>
                <h3 className="font-medium text-xl">Finality</h3>
              </span>
            </div>
            <div className="pt-10 mt-20">
              <img src={crypto} alt="crypto icon" />
              <h3 className="font-medium text-xl">Supported Chain</h3>
            </div>
          </div>
          <div className="h-fit w-lg px-5 font-light text-2xl">
            Create shared app experiences, eliminating chain boundaries for your
            users, allowing them to just simply
            <b className="font-bold"> use your application</b>
            <br />
            <br />
            Linear scalability and dynamic sharding ensure read and write
            transactions continue to increase as more nodes are added to the
            network.
            <div className="flex gap-10 text-xl font-medium text-[#D548EC] mt-5">
              <a
                href="https://simulate.push.org/"
                target="_blank"
                className="flex gap-2 items-center"
              >
                Simulate Tx
                <img src={arrow} alt="arrow" className="w-5" />
              </a>
              <a href="" className="flex gap-2">
                Push Scan Devnet
                <img src={arrow} alt="arrow" className="w-5" />
              </a>
            </div>
            <h3 className="text-lg font-thin w-[80%] text-[#797888]">
              Universal applications will launch with Testnet. Devnet is live.
              Try now!
            </h3>
          </div>
        </div>

        <div className="mt-40 flex flex-col items-center">
          <h3 className="text-5xl text-black text-center w-4xl">
            A layer 1 built on the foundations from pioneering web3
            communications.
          </h3>
          <img className="mt-20" src={second_hero} alt="second_hero" />
        <h3 className="mt-20 text-3xl text-black text-center w-4xl font-light">
          After four years of building the leading notifications protocol and a
          thriving ecosystem, Push Protocol is evolving to launch and scale Push
          Chain.
        </h3>
        <button className="px-5 py-3 bg-[#D548EC] hover:bg-[#dc7ae9] text-white rounded-xl text-xl mt-4 cursor-pointer">
            Explore Communications Protocol
        </button>
        </div>
      </div>
    </>
  );
};
