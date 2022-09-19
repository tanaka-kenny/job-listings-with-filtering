import './FilterBar.css'

function FilterBar() {
  return (
    <div className='filter-bar'>
      <div className="row">
        <div className="col-left">Frontend</div>
        <div className="col-right">X</div>
      </div>
      <div className="row">
        <div className="col-left">CSS</div>
        <div className="col-right">X</div>
      </div>
      <div className="row">
        <div className="col-left">JavaScript</div>
        <div className="col-right">X</div>
      </div>
      <button>Clear</button>
    </div>
  )
}

export default FilterBar