import { Link } from "react-router-dom";
import { CalenderIcon, HistoryIcon, HomeIcon, UserIcon } from "../assets/icons";

const SideBarList = ({responsiveStatus}) => {
    return (
      <>
        <Link
        to="/admin-1615-its"
          className={`flex rounded-md ${
            open ? "hover:bg-[#289dcf2d] py-[10px]" : "hover:text-primary"
          } pl-2 cursor-pointer text-gray-300 text-sm items-center duration-75 gap-x-4  font-medium`}
        >
          <HomeIcon />
          <span
            className={`${
              !responsiveStatus && "hidden"
            } origin-left duration-200 text-[17px]`}
          >
            Dashboard
          </span>
        </Link>
        <Link
        to="/admin-1615-its/users"
          className={`flex rounded-md ${
            open ? "hover:bg-[#289dcf2d] py-[10px]" : "hover:text-primary"
          } pl-2 cursor-pointer  text-gray-300 text-sm items-center duration-75 gap-x-4  font-medium`}
        >
          <UserIcon />
          <span
            className={`${
              !responsiveStatus && "hidden"
            } origin-left duration-200 text-[17px]`}
          >
            User List
          </span>
        </Link>
        <Link
        to="/admin-1615-its/ai-plans"
          className={`flex  rounded-md ${
            open ? "hover:bg-[#289dcf2d] py-[10px]" : "hover:text-primary"
          } pl-2 cursor-pointer  text-gray-300 text-sm items-center duration-75 gap-x-4  font-medium`}
        >
          <CalenderIcon />
          <span
            className={`${
              !responsiveStatus && "hidden"
            } origin-left duration-200 text-[17px]`}
          >
            Ai Plan
          </span>
        </Link>
        <Link
        to="/admin-1615-its/deposit-list"
          className={`flex  rounded-md ${
            open ? "hover:bg-[#289dcf2d] py-[10px]" : "hover:text-primary"
          } pl-2 cursor-pointer  text-gray-300 text-sm items-center duration-75 gap-x-4  font-medium`}
        >
          <HistoryIcon />
          <span
            className={`${
              !responsiveStatus && "opacity-0"
            } origin-left duration-200 opacity-100 text-[17px]`}
          >
            Deposit List
          </span>
        </Link>
      </>
    );
  };
  
  export default SideBarList;