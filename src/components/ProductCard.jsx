import './ProductCard.css'

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-card-info">
        <h3>{product.name}</h3>
        <p>{product.price} kr</p>
        <button className="add-to-cart-btn">Lägg i varukorg</button>
      </div>
    </div>
  )
}

export default ProductCard