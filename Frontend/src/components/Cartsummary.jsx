import './CartSummary.css'
import { Link } from 'react-router-dom'

function CartSummary() {
  return (
    <div className="cart-summary">
      <div className="summary-row">
        <span>Deltotal</span>
        <span>171,00 kr</span>
      </div>
      <div className="summary-row">
        <span>Frakt</span>
        <span>49,00 kr</span>
      </div>
      <div className="summary-row total">
        <span>Totalsumma inkl. moms</span>
        <span>220,00 kr</span>
      </div>
      <Link to="/Checkout">Gå till kassan</Link>
      </div>
    
  )
}

export default CartSummary