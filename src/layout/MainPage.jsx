import { Outlet } from "react-router-dom";
import Sidebar from "../Shared/SideBar/SideBar";
import Navbar from "../Shared/Navbar";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const MainPage = () => {
    
  let isTabletMid = useMediaQuery({ query: "(max-width: 833px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);

  return (
    <div className="flex gap-5 max-h-screen overflow-hidden overflow-y-hidden">
    <Sidebar isTabletMid={isTabletMid} open={open} setOpen={setOpen} />
      <div className="w-full md:max-w-[1300px] pr-3 overflow-x-hidden lg:max-w-[1600px] h-screen overflow-y-auto" id="mainPageContent">
        <Navbar isTabletMid={isTabletMid} open={open} setOpen={setOpen} />
        <main className=""><Outlet /></main>
      </div>
    </div>
  );
};

export default MainPage;
