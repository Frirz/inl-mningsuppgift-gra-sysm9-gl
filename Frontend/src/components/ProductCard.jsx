import './ProductCard.css'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoriteContext'

function ProductCard({ product }) {
  const { addItem } = useCart()
  const { toggleFavorite, isFavorite } = useFavorites()
  const favorite = isFavorite(product._id)

  return (
    <div className="product-card">
      <button
        className={favorite ? 'favorite-btn active' : 'favorite-btn'}
        type="button"
        onClick={() => toggleFavorite(product)}
        aria-label={favorite ? 'Ta bort från favoriter' : 'Lägg till i favoriter'}
      >
        {favorite ? '♥' : '♡'}
      </button>
      <img src={product.image} alt={product.name} />
      <div className="product-card-info">
        <h3>{product.name}</h3>
        <p>{product.price} kr</p>
        <button className="add-to-cart-btn" onClick={() => addItem(product)}>Lägg i varukorg</button>
      </div>
    </div>
  )
}

export default ProductCard
