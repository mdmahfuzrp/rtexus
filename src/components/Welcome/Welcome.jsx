import WorkerImg from "../../assets/worker.png";
const Welcome = () => {
  return (
    <div id="welcomeText" className="flex items-center gap-5 justify-between">
      <img src={WorkerImg} alt="" />
      <div className="text-left">
        <h1 className="text-white text-[24px]">Hello, Marry Jane!</h1>
        <p className="text-base text-white my-3">
          Stay Up-to-Date with your appointments
        </p>
        <p className="text-base text-white">You Have No Pending Reports</p>
      </div>
    </div>
  );
};

export default Welcome;
