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
    setJobs(filterItems.length > 0 ? 
      listings.filter(li => filterItems.every(item => li.languages.includes(item))) :
      listings
      )
    
  });

  const onSelectFilterItem = (filterItem) => {
    setFilterItems((
      filterItems.indexOf(filterItem) <= -1) ? 
        [ ...filterItems, filterItem] :
        filterItems
      );
  }

  const onRemoveFilterItem = (filterItem) => {
    setFilterItems(filterItems.filter(item => item != filterItem));
  }

  const onClearAllFilterItems = () => {
    setFilterItems([]);
  }

  return (
    <div className="app">
      <Header />
      <div className="body">
        {filterItems.length > 0 &&
        <FilterBar  
          filterItems={filterItems} 
          onClearAllFilterItems={onClearAllFilterItems}
          onRemoveFilterItem={onRemoveFilterItem} 
          /> }
        {
          jobs.map(l => 
            <JobListing job={l} 
            key={l.id} 
            onSelectFilterItem={onSelectFilterItem} />)
        }
      </div>
    </div>
  );
}

export default App;
