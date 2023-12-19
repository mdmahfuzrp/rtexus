import { BarIcon } from "../assets/icons";
import DarkMode from "../components/DarkMode/DarkMode";

const Navbar = ({ open, setOpen }) => {
  return (
    <div className="w-full flex items-center justify-between py-[13px]">
      <div className="flex items-center justify-start">
        <div
          onClick={() => setOpen(!open)}
          className="flex md:hidden items-center gap-2.5 font-medium barStyles !ml-[-2px] !mr-[10px]"
        >
          <BarIcon />
        </div>
        <h1 className="text-[20px]" id="pageTitle">Home</h1>
      </div>
      <div>
        <DarkMode />
      </div>
    </div>
  );
};

export default Navbar;
