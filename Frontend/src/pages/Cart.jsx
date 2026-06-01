import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import CartItem from '../components/CartItem'
import CartSummary from '../components/CartSummary'
import './Cart.css'

function Cart() {
  return (
    <div>
      <Navbar />
      <div className="cart-page">
        <div className="cart-left">
          <h1>VARUKORG (1 vara)</h1>
          <CartItem />
        </div>
        <CartSummary />
      </div>
      <Footer />
    </div>
  )
}

export default Cart