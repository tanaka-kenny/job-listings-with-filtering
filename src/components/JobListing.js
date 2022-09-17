import './JobListing.css';

function JobListing({ job }) {
    job =   {
        "id": 1,
        "company": "Photosnap",
        "logo": "./images/photosnap.svg",
        "new": true,
        "featured": true,
        "position": "Senior Frontend Developer",
        "role": "Frontend",
        "level": "Senior",
        "postedAt": "1d ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["HTML", "CSS", "JavaScript"],
        "tools": []
      }

  return (
    <div className='jobListing'>
        <div className="left-col">
            <div className="avatar">
                <img src={job.logo} alt="" />
            </div>
            <div className="info">
                <p>
                    <span className="company-name">{job.company}</span>
                    {job.new && <span className='new'>NEW!</span> }
                    {job.featured && <span className='featured'>FEATURED</span>}
                </p>
                <h4>Senior Frontend Developer</h4>
                <p className='bottomLine'>
                    <span>{job.postedAt}</span> <div className="dot"></div>
                    <span>{job.contract}</span> <div className="dot"></div>
                    <span>{job.location}</span> 
                </p>
            </div>
        </div>
        <div className="right-col">
            <div className="filters">
                {
                    job.languages.map(l => <div className="f">{l}</div> )
                }
            </div>
        </div>

        
    </div>
  )
}

export default JobListing