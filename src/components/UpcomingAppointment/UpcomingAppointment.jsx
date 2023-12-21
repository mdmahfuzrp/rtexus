
import UpcomingImg from "../../assets/upcoming-icon.png";
import Upcoming from "../Upcoming/Upcoming";
const UpcomingAppointment = () => {
    return (
        <div className="upcomingAppointment rounded-[8px] border p-4">
            <p className="mt-[-5px] mb-[8px] text-left text-base">
              Upcoming Appointments
            </p>
            <div className="flex gap-16 w-full items-center">
              <div>
                <img src={UpcomingImg} alt="" className="mt-12" />
              </div>
              <div className="w-full">
                <Upcoming />
              </div>
            </div>
          </div>
    );
};

export default UpcomingAppointment;