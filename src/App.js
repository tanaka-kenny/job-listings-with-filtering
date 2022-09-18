import { useEffect, useState } from 'react';
import './App.css';
import JobListing from './components/JobListing';
import listings from './data/data';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(listings)
  },[])
  return (
    <div className="app">
      {
        jobs.map(l => <JobListing job={l} key={l.id} />)
      }
     
    </div>
  );
}

export default App;
