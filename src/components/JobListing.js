import './JobListing.css';

function JobListing({ job }) {

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
                    <span>{job.postedAt}</span> <span className="dot"></span>
                    <span>{job.contract}</span> <span className="dot"></span>
                    <span>{job.location}</span> 
                </p>
            </div>
        </div>
        <div className="right-col">
            <div className="filters">
                {
                    job.languages.map(l => <div className="f" key={l.toString()}>{l}</div> )
                }
            </div>
        </div>
    </div>
  )
}

export default JobListing