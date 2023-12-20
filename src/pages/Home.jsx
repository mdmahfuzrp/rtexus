
import WorkerImg from "../assets/worker.png";
import HomeTools from "../components/HomeTools/HomeTools";
import Upcoming from "../components/Upcoming/Upcoming";

import UpcomingImg from '../assets/upcoming-icon.png'
const Home = () => {
  return (
    <div>
      <div className="text-center grid grid-cols-2 laptop:grid-cols-3 grid-rows-4 gap-6">
        <div className=" md:col-span-2">
          <div
            id="welcomeText"
            className="flex items-center gap-5 justify-between"
          >
            <img src={WorkerImg} alt="" />
            <div>
              <h1 className="text-white text-[24px]">Hello, Marry Jane!</h1>
              <p className="text-base text-white my-3">
                Stay Up-to-Date with your appointments
              </p>
              <p className="text-base text-white">
                You Have No Pending Reports
              </p>
            </div>
          </div>
        </div>
        <div className=" md:col-span-2 laptop:col-start-1 row-start-2">
          <HomeTools />
        </div>
        <div className=" laptop:col-span-2 laptop:row-span-2 laptop:col-start-1 row-start-3">
          <div className="todoList">
todolist
          </div>
        </div>
        <div className=" laptop:row-span-3 laptop:col-start-3 row-start-3 laptop:row-start-1">
          <div className="upcomingAppointment rounded-[8px] border border-[#d1d5db91] p-4">
            <p className="mt-[-5px] mb-[8px] text-left">Upcoming Appointments</p>
            <div className="flex gap-11 w-full items-center">
              <div>
                <img src={UpcomingImg} alt="" className="mt-12" />
              </div>
              <div className="w-full">
                <Upcoming />
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-2 laptop:col-span-1 laptop:col-start-3 laptop:row-start-4">
          hello
        </div>
      </div>
    </div>
  );
};

export default Home;

{
  /* Welcome Message */
}
{
  /* <div id="welcomeText" className="flex items-center gap-5 justify-between">
<img src={WorkerImg} alt="" />
<div>
  <h1 className="text-white text-[24px]">Hello, Marry Jane!</h1>
  <p className="text-base text-white my-3">
    Stay Up-to-Date with your appointments
  </p>
  <p className="text-base text-white">You Have No Pending Reports</p>
</div>
</div> */
}

{
  /* Card of Tools Result */
}
{
  /* <div>
<div>
  <div className="toolsIcon">
    <PulseCount />
  </div>
  <p className="toolsName">Pulse Count</p>
  <p className="toolsResult">
    60 <span>bpm</span>
  </p>
  <p className="flex items-center gap-2">
    <span className="resultTypeArrow">
      <SmallArrow />
    </span>
    <span className="resultNormal">Normal</span>
  </p>
</div>
</div> */
}
