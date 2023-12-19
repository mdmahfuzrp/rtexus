import { BarIcon, OffMenu } from "../assets/icons";
import DarkMode from "../components/DarkMode/DarkMode";
import UserImg from "../assets/Avatar.png";
import { useEffect, useState } from "react";

const Navbar = ({ open, setOpen }) => {
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const mainPageContent = document.getElementById('mainPageContent');
      if (mainPageContent.scrollTop > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    const mainPageContent = document.getElementById('mainPageContent');
    if (mainPageContent) {
      mainPageContent.addEventListener("scroll", handleScroll);
    }
  
    return () => {
      if (mainPageContent) {
        mainPageContent.removeEventListener("scroll", handleScroll);
      }
    };
  }, [setScrolled]);
  return (
    <div
      id="navbar"
      className={`w-full flex sticky top-0 items-center justify-between md:py-[13px] px-5 ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="flex items-center justify-start">
        <div
          onClick={() => setOpen(!open)}
          className="flex md:hidden items-center gap-2.5 font-medium barStyles !ml-[-2px] !mr-[10px]"
        >
          <BarIcon />
        </div>
        <h1 className="text-[20px] mt-[-2px]" id="pageTitle">
          Home
        </h1>
      </div>
      <div className="flex items-center gap-4 mt-[-4px]">
        <DarkMode />
        <div className="flex items-center gap-2">
          <img
            src={UserImg}
            alt=""
            className="w-[30px] mb-[-3px] border rounded-full"
            id="userIcon"
          />
          <div
            id="openProfile"
            className={`cursor-pointer !shadow-none -rotate-90 flex items-center justify-center rounded-full mt-1 fill-white`}
            style={{ backgroundColor: "transparent" }}
          >
            <OffMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
