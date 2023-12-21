import CovidUpdates from '../components/CovidUpdates/CovidUpdates';
import HomeTools from '../components/HomeTools/HomeTools';
import ToDo from '../components/ToDo/ToDo';
import UpcomingAppointment from '../components/UpcomingAppointment/UpcomingAppointment';
import Welcome from '../components/Welcome/Welcome';
import './Home.css'
const Home = () => {
  return (
    <div className="main-div pb-10 md:mt-[-18px]">
      <div className="div div1">
        <Welcome />
      </div>
      <div className="div div2">
        <HomeTools />
      </div>
      <div className="div div3 ">
        <ToDo />
      </div>
      <div className="div div4">
        <UpcomingAppointment />
      </div>
      <div className="div div5">
        <CovidUpdates />
      </div>
    </div>
  );
};

export default Home;
