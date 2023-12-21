
import DoctorImg from "../../assets/doctor.png";
const CovidUpdates = () => {
  return (
    <div className="covidUpdates">
      <div className="flex items-start justify-between">
        <p className="mt-[-5px] mb-[8px] text-left font-medium text-base">
          Covid-19 Updates
        </p>
        <div className="flex flex-col items-end gap-0 leading-4">
          <p className="mt-[-5px] mb-[8px] text-left  font-medium text-base">
            Covid-19 Updates
          </p>
          <p className="covidTime text-[14px]  font-medium">
            Thursday 10:00:00 AM
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-3">
        <img src={DoctorImg} alt="" className="laptop:w-[50%]" />
        <div className="covidReport medium:cursor-n-resize w-full md:w-[50%] text-center grid grid-cols-1 md:grid-cols-2 medium:grid-cols-1 overflow-x-hidden gap-4 p-5 rounded-md medium:max-h-[200px] overflow-y-auto">

          <div className="">
            <h1 className="covidTitle">Infection Number</h1>
            <p className="covidNumber">500</p>
          </div>

          <div>
            <h1 className="covidTitle">Total Infection</h1>
            <p className="covidNumber">5000</p>
          </div>

          <div>
            <h1 className="covidTitle">Infection Rate </h1>
            <p className="covidNumber">10%</p>
          </div>

          <div>
            <h1 className="covidTitle">Number Of Death</h1>
            <p className="covidNumber">20</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovidUpdates;
