import './JobListing.css';

function JobListing({ job, onSelectFilterItem }) {

  return (
    <div className={job.featured ? 'jobListingIsFeatured' : 'jobListing'} >
        <div className="avatar">
            <img src="https://tanaka-kenny.github.io/job-listings-with-filtering/images/photosnap.svg" alt="" />
        </div>
        <div className="content">
            <div className="info">
                <p>
                    <span className="company-name">{job.company}</span>
                    {job.new && <span className='new'>NEW!</span> }
                    {job.featured && <span className='featured'>FEATURED</span>}
                </p>
                <h4>{job.position}</h4>
                <p className='bottomLine'>
                    <span>{job.postedAt}</span> <span className="dot"></span>
                    <span>{job.contract}</span> <span className="dot"></span>
                    <span>{job.location}</span> 
                </p>
                <hr />
            </div>
            <div className="filters">
                {
                    job.languages.map(l => 
                        <div className="f" 
                        key={l.toString()}
                        onClick={() => onSelectFilterItem(l)}>{l}</div> )
                }
            </div>
        </div>
    </div>
  )
}

export default JobListing