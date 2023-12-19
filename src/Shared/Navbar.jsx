import { BarIcon } from "../assets/icons";
import DarkMode from "../components/DarkMode/DarkMode";

const Navbar = ({ open, setOpen }) => {
  return (
    <div className="w-full flex items-center justify-between py-2">
      <div className="flex items-center justify-start">
        <div
          onClick={() => setOpen(!open)}
          className=" flex md:hidden items-center gap-2.5 font-medium barStyles mx-3"
        >
          <BarIcon />
        </div>
        <h1>Home</h1>
      </div>
      <div>
        <DarkMode />
      </div>
    </div>
  );
};

export default Navbar;
