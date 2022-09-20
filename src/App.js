import { useEffect, useState } from 'react';
import './App.css';
import JobListing from './components/JobListing';
import Header from './components/Header'
import listings from './data/data';
import FilterBar from './components/FilterBar';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filterItems, setFilterItems ] = useState([]);

  useEffect(() => {
    setJobs(listings);
  },[]);

  const onClickSelectItem = (filterItem) => {
    setFilterItems(filterItems => {
      // check if item already exits in array
      if (filterItems.indexOf(filterItem) <= -1)
        return [ ...filterItems, filterItem];
      return filterItems;
    });
  }


  return (
    <div className="app">
      <Header />
      <div className="body">
        <FilterBar  filterItems={filterItems} />
        {
          jobs.map(l => 
            <JobListing job={l} 
            key={l.id} 
            onClickFilterItem={onClickSelectItem} />)
        }
      </div>
    </div>
  );
}

export default App;
