import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { useFavorites } from '../context/FavoriteContext'
import './Favorites.css'

function Favorites() {
  const { favorites } = useFavorites()

  return (
    <div>
      <Navbar />
      <div className="favorites-page">
        <h1>Favoriter</h1>
        {favorites.length === 0 ? (
          <p>Du har inga favoriter än.</p>
        ) : (
          <div className="favorites-grid">
            {favorites.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Favorites
