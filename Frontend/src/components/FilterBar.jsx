import './FilterBar.css'

const kategorier = ['Alla', 'Big Tattoo', 'Smal Tattoo']

function FilterBar({ activeFilter, setFilter }) {
  return (
    <div className="product-filter">
      {kategorier.map((kategori) => (
        <button
          key={kategori}
          className={activeFilter === kategori ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setFilter(kategori)}
        >
          {kategori}
        </button>
      ))}
    </div>
  )
}

export default FilterBar