import { useState } from 'react';
import DashBoard from '../../components/DashBoard';
import Filter from '../../components/Filter';
import { FilterData } from '../../types/filter';
import './styles.css';

const Home = () => {
  const [filterData, setFilterData] = useState<FilterData>();

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <div className="home-container">
      <div className="filter">
        <Filter onFilterChange={onFilterChange} />
      </div>
      <div className="dashboard">
        <DashBoard filterData={filterData} />
      </div>
    </div>
  );
};

export default Home;
