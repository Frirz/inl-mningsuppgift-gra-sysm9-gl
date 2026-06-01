import './CartItem.css'
import img1 from '../images/img2.png'

function CartItem() {
  return (
    <div className="cart-item">
      <img src={img1} alt="produkt" className="cart-img" />
      <div className="cart-item-info">
        <h3>Sticker</h3>
        <p>cool sticker</p>
      </div>
      <div className="cart-item-quantity">
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
    </div>
  )
}

export default CartItem