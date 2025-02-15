import crypto from "../assets/crypto.webp";

export const KnowledgeBase = () => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
      {/* Main Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mb-12 md:mb-16">
        Consumer applications that work from any chain, reach instant finality, and achieve true scalability.
      </h2>

      {/* Stats and Chain Section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12">
        {/* Stats Section */}
        <div className="flex gap-8 md:gap-16">
          {/* Block Size */}
          <div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold">4MB</h3>
            <p className="text-lg md:text-xl mt-2">Block Size</p>
          </div>

          {/* Finality */}
          <div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold">1s</h3>
            <p className="text-lg md:text-xl mt-2">Finality</p>
          </div>
        </div>

        {/* Supported Chain */}
        <div className="flex flex-col">
          <div className="flex gap-2">
            {/* Replace with your actual chain icons */}
            <div >
              <img src={crypto} alt="crypto icon" />
              <h3 className="font-medium text-xl">Supported Chain</h3>
            </div>
          </div>
          
        </div>
      </div>

      {/* Description Section */}
      <div className="space-y-8 md:space-y-12 max-w-[90%] md:max-w-[80%] lg:max-w-[60%]">
        <p className="text-xl md:text-2xl lg:text-3xl">
          Create shared app experiences, eliminating chain boundaries for your users, allowing them to just simply 
          <span className="font-bold"> use your application</span>
        </p>

        <p className="text-xl md:text-2xl lg:text-3xl">
          Linear scalability and dynamic sharding ensure read and write transactions continue to increase as more nodes are added to the network.
        </p>

        {/* Links Section */}
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row gap-4 text-[#D548EC]">
            <a href="#" className="text-lg md:text-xl hover:underline flex items-center gap-2">
              Simulate Tx
              <span className="transform rotate-45">→</span>
            </a>
            <a href="#" className="text-lg md:text-xl hover:underline flex items-center gap-2">
              Push Scan Devnet
              <span className="transform rotate-45">→</span>
            </a>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            Universal applications will launch with Testnet. Devnet is live. Try now!
          </p>
        </div>
      </div>
    </div>
  );
};
