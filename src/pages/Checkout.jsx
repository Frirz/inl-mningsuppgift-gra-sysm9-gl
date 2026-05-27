import { Link } from 'react-router-dom'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'

function Checkout() {
  return (
    <div>
      <Navbar />
      <main className="page-section">
        <h2>Checkout</h2>
        <p>Review your order before placing it.</p>
        <Link to="/confirmation">Place order</Link>
      </main>
      <Footer />
    </div>
  )
}

export default Checkout
