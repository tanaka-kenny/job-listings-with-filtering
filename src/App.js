import { useEffect, useState } from 'react';
import './App.css';
import JobListing from './components/JobListing';
import Header from './components/Header'
import listings from './data/data';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(listings)
  },[]);


  return (
    <div className="app">
      <Header />
      <div className="body">
        {
          jobs.map(l => <JobListing job={l} key={l.id} />)
        }
      </div>
    </div>
  );
}

export default App;
