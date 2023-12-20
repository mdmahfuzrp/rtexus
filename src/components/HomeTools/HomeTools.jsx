import {
  BloodPressure,
  GlucoseCount,
  OxygenSaturation,
  PulseCount,
  SmallArrow,
} from "../../assets/icons";

const HomeTools = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
      <div className="tools p-[12px] rounded-[8px]">
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
      <div className="tools p-[12px] rounded-[8px]">
        <div className="toolsIcon">
          <BloodPressure />
        </div>
        <p className="toolsName">Blood Pressure</p>
        <p className="toolsResult">
          110/70 <span>mmHg</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="resultTypeArrow">
            <SmallArrow />
          </span>
          <span className="resultSlightly">Slightly higher</span>
        </p>
      </div>
      <div className="tools p-[12px] rounded-[8px]">
        <div className="toolsIcon3">
          <OxygenSaturation />
        </div>
        <p className="toolsName">Oxygen Saturation</p>
        <p className="toolsResult">
          95 <span>%</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="resultTypeArrow">
            <SmallArrow />
          </span>
          <span className="resultSlightly">Slightly higher</span>
        </p>
      </div>
      <div className="tools p-[12px] rounded-[8px]">
        <div className="toolsIcon4">
          <GlucoseCount />
        </div>
        <p className="toolsName">Glucose Count</p>
        <p className="toolsResult">
          100 <span>mm/dL</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="resultTypeArrow">
            <SmallArrow />
          </span>
          <span className="resultNormal">Normal</span>
        </p>
      </div>
    </div>
  );
};

export default HomeTools;
