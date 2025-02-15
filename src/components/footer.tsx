import background from "../assets/background.png";
import bellIcon from "../assets/bell.svg";
import tweeter from "../assets/xlogo.png";
import discord from "../assets/discord.svg";
import github from "../assets/github.svg";



export const Footer = () => {
  return (
    <>
      <footer>
        <img src={background} alt="background" className="-mb-1" />
        <div className="h-fit px-10 sm:px-20 pt-24 pb-20 bg-black">
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="mb-10 sm:mb-0">
              <img src={bellIcon} alt="bellIcon" className="w-20" />
              <span className="text-white">
                Interoperable, <br /> Universal Apps
              </span>
            </div>
            <div className="text-white grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-20">
              <div>
                <h3 className="text-lg font-semibold mb-4">RESOURCES</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      Knowledge Base
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Whitepaper
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Brand Kit
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">COMMUNITY</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      Governance
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">DEVELOPERS</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between mt-10">
             <div className="flex gap-4 mb-5 sm:mb-0">
                 <img src={tweeter} alt="tweeter" className="w-10 object-cover transition-transform duration-500 ease-in-out hover:scale-150" />
                 <img src={discord} alt="discord" className="w-10 object-cover transition-transform duration-500 ease-in-out hover:scale-150"  />
                 <img src={github} alt="github" className="w-10 object-cover transition-transform duration-500 ease-in-out hover:scale-150"  />
             </div>
             <div className="text-white flex gap-5 items-center cursor-pointer hover:underline">
                <h3>Terms of service</h3>
                <h3>Privacy</h3>
             </div>
          </div>
        </div>
      </footer>
    </>
  );
};
