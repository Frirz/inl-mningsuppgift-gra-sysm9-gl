import './CartSummary.css'

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
      <button className="checkout-btn">Gå till kassan</button>
      <p className="accepts">Vi accepterar</p>
      <div className="payment-icons">
        <span>Swish</span>
        <span>Klarna</span>
        <span>VISA</span>
        <span>Mastercard</span>
        <span>Apple Pay</span>
        <span>PayPal</span>
      </div>
    </div>
  )
}

export default CartSummary