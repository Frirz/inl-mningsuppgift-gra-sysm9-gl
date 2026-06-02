import './CartSummary.css'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function CartSummary() {
  const { total } = useCart()
  const frakt = 49

  return (
    <div className="cart-summary">
      <div className="summary-row">
        <span>Deltotal</span>
        <span>{total} kr</span>
      </div>

      <div className="summary-row">
        <span>Frakt</span>
        <span>{frakt} kr</span>
      </div>

      <div className="summary-row total">
        <span>Totalsumma inkl. moms</span>
        <span>{total + frakt} kr</span>
      </div>

      <Link to="/checkout">
        <button className="checkout-btn">
          Gå till kassan
        </button>
      </Link>
    </div>
  )
}

export default CartSummary