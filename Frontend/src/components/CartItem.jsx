import './CartItem.css'
import { useCart } from '../context/CartContext'

function CartItem({ item }) {
  const { removeItem, changeQuantity } = useCart()

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-img" />
      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <p>{item.price} kr</p>
      </div>
      <div className="cart-item-quantity">
        <button onClick={() => changeQuantity(item._id, item.quantity - 1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => changeQuantity(item._id, item.quantity + 1)}>+</button>
      </div>
      <span>{item.price * item.quantity} kr</span>
      <button className="remove-btn" onClick={() => removeItem(item._id)}>✕</button>
    </div>
  )
}

export default CartItem