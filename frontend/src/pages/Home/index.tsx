import DashBoard from '../../components/DashBoard';
import Filter from '../../components/Filter';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="filter">
        <Filter />
      </div>
      <div className="dashboard">
        <DashBoard />
      </div>
    </div>
  );
};

export default Home;
