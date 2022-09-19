import { useEffect, useState } from 'react';
import './App.css';
import JobListing from './components/JobListing';
import Header from './components/Header'
import listings from './data/data';
import FilterBar from './components/FilterBar';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(listings)
  },[]);


  return (
    <div className="app">
      <Header />
      <div className="body">
        <FilterBar />
        {
          jobs.map(l => <JobListing job={l} key={l.id} />)
        }
      </div>
    </div>
  );
}

export default App;
