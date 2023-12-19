import { Outlet } from "react-router-dom";
import Sidebar from "../Shared/SideBar/SideBar";
import Navbar from "../Shared/Navbar";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { OffMenu } from "../assets/icons";

const MainPage = () => {
  // Responsive Sidebar Functionality
  let isTabletMid = useMediaQuery({ query: "(max-width: 833px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);

  return (
    <div className="flex max-h-screen overflow-hidden overflow-y-hidden">
      {/* Sidebar Component */}
      <div>
        <div
          id="OffMenu"
          className={`absolute ${
            open ? "top-[14px] md:delay-50" : "top-[-50px]"
          } left-[187px] delay-200 md:delay-0 z-[99999] cursor-pointer w-[30px] h-[30px] flex items-center justify-center rounded-full`}
          onClick={() => setOpen(!open)}
        >
          <OffMenu />
        </div>

        <Sidebar isTabletMid={isTabletMid} open={open} setOpen={setOpen} />
      </div>

      <div
        className="w-full md:max-w-[1300px] overflow-x-hidden lg:max-w-[1600px] h-screen overflow-y-auto"
        id="mainPageContent"
      >
        {/* Navbar Component Imported */}
        <Navbar isTabletMid={isTabletMid} open={open} setOpen={setOpen} />

        {/* Main Pages - All Children or Outlets */}
        <main className="px-[21px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainPage;
