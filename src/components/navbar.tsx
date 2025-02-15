import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import bellIcon from "../assets/bell.svg";
import chainIcon from "../assets/chain.svg";

export const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState("TECHNOLOGY");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { name: "TECHNOLOGY", id: "technology" },
    { name: "KNOWLEDGE BASE", id: "knowledge-base" },
    { name: "WHITEPAPER", id: "whitepaper" },
    { name: "BLOG", id: "blog" },
    { name: "F.A.Q", id: "faq" },
  ];

  const handleTabClick = (tab: any) => {
    setSelectedTab(tab.name);
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative">
      {/* Main navbar container */}
      <div className="flex items-center justify-between p-4 px-4 md:px-10">
        {/* Logo section */}
        <div className="flex items-center gap-5 cursor-pointer">
          <img src={bellIcon} alt="bell icon" className="w-6 h-6" />
          <img src={chainIcon} alt="chain icon" className="w-20" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="font-normal text-sm border-black rounded-xl bg-black text-white px-4 py-2">
            <div className="flex space-x-4 lg:space-x-6 items-center">
              {tabs.map((tab) => (
                <a
                  href={`#${tab.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabClick(tab);
                  }}
                  key={tab.id}
                  className={`font-semibold whitespace-nowrap transition-colors 
                    ${
                      selectedTab === tab.name
                        ? 'bg-white text-black py-2 px-4 rounded-lg'
                        : 'hover:text-gray-300'
                    }`}
                >
                  {tab.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Get Notified Button */}
        <button className="hidden md:block p-4 px-6 text-white bg-[#D548EC] rounded-xl cursor-pointer hover:bg-[#c235d3] transition-colors">
          Get Notified
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-gray-800"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black text-white p-4 z-50">
          <div className="flex flex-col space-y-4">
            {tabs.map((tab) => (
              <a
                href={`#${tab.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(tab);
                }}
                key={tab.id}
                className={`font-semibold p-2 rounded-lg ${
                  selectedTab === tab.name
                    ? 'bg-white text-black'
                    : 'hover:bg-gray-800'
                }`}
              >
                {tab.name}
              </a>
            ))}
            <button className="p-4 text-white bg-[#D548EC] rounded-xl cursor-pointer hover:bg-[#c235d3] transition-colors">
              Get Notified
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
