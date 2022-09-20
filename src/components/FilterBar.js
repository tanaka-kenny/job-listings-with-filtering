import './FilterBar.css'

function FilterBar({ filterItems }) {

  return (
    <div className='filter-bar'>
      {
        filterItems.map(f => {
          return (
            <div className="row" key={f}>
              <div className="col-left">{f}</div>
              <div className="col-right">X</div>
            </div>
          )
        })
      }
      <button>Clear</button>
    </div>
  )
}

export default FilterBar