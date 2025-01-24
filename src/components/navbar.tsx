import bellIcon from "../assets/bell.svg";
import chainIcon from "../assets/chain.svg";
import { useState } from "react";

export const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState("TECHNOLOGY");

  const tabs = [
    { name: "TECHNOLOGY", id: "technology" },
    { name: "KNOWLEDGE BASE", id: "knowledge-base" },
    { name: "WHITEPAPER", id: "whitepaper" },
    { name: "BLOG", id: "blog" },
    { name: "F.A.Q", id: "faq" },
  ];

  const handleTabClick = (tab:any) => {
    setSelectedTab(tab.name);
  };
  return (
    <>
      <div className="flex justify-between p-4 px-10">
        <div className="flex gap-5 cursor-pointer">
          <img src={bellIcon} alt="bell icon" />
          <img src={chainIcon} alt="chain icon" className="w-20" />
        </div>
        <div className="font-normal text-sm w-1/2 border-black h-13 rounded-xl flex  items-center px-4 bg-black text-white">
          <div className="flex space-x-6 w-full items-center justify-between cursor-pointer">
            {tabs.map((tab)=>(
              <a
              href={`#${tab.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleTabClick(tab);
              }}
              key={tab.id}
              className={`font-semibold ${selectedTab === tab.name ? 'bg-white text-black py-2 px-4 rounded-lg' : ''}`}
            >
              {tab.name}
            </a>
            ))}
          </div>
        </div>
        <button className="p-4 px-6 text-white bg-[#D548EC] rounded-xl cursor-pointer">Get Notified</button>
      </div>
    </>
  );
};
