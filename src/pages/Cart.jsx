import { Link } from 'react-router-dom'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'

function Cart() {
  return (
    <div>
      <Navbar />
      <main className="page-section">
        <h2>Cart</h2>
        <p>Your cart is empty.</p>
        <Link to="/products">Continue shopping</Link>
      </main>
      <Footer />
    </div>
  )
}

export default Cart
