import './FilterBar.css'

function FilterBar({ filterItems, onClearAllFilterItems, onRemoveFilterItem }) {

  return (
    <div className='filter-bar'>
      {
        filterItems.map(f => {
          return (
            <div className="row" key={f}>
              <div className="col-left">{f}</div>
              <div className="col-right" onClick={() => onRemoveFilterItem(f)}>X</div>
            </div>
          )
        })
      }
      <button onClick={onClearAllFilterItems}>Clear</button>
    </div>
  )
}

export default FilterBar