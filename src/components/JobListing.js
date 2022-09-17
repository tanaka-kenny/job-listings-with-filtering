import './JobListing.css';

function JobListing() {

  return (
    <div className='jobListing'>
        <div className="left-col">
            <div className="avatar">
                <img src="./images/photosnap.svg" alt="" />
            </div>
            <div className="info">
                <p>
                    <span className="company-name">Photosnap</span>
                    <span className='new'>NEW!</span>
                    <span className='featured'>FEATURED</span>
                </p>
                <h4>Senior Frontend Developer</h4>
                <p className='bottomLine'>
                    <span>1 day ago</span> <div className="dot"></div>
                    <span>USA</span>  <div className="dot"></div>
                    <span>Remote</span> <div className="do"></div>
                </p>
            </div>
        </div>
        <div className="right-col">
            <div className="filters">
                <div className="f">Frontend</div> 
                <div className="f">Senior</div> 
                <div className="f">HTML</div> 
            </div>
        </div>

        
    </div>
  )
}

export default JobListing