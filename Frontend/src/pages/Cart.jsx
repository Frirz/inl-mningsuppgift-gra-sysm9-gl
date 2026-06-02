import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import CartItem from '../components/CartItem'
import CartSummary from '../components/CartSummary'
import { useCart } from '../context/CartContext'
import './Cart.css'

function Cart() {
  const { cartItems } = useCart()

  return (
    <div>
      <Navbar />
      <div className="cart-page">
        <div className="cart-left">
          <h1>VARUKORG ({cartItems.length} vara)</h1>
          {cartItems.length === 0 ? (
            <p>Din varukorg är tom!</p>
          ) : (
            cartItems.map(item => (
              <CartItem key={item._id} item={item} />
            ))
          )}
        </div>
        <CartSummary />
      </div>
      <Footer />
    </div>
  )
}

export default Cart