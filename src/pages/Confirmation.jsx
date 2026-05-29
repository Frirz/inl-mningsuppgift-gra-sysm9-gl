import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import CartItem from '../components/CartItem'
import './Confirmation.css'

function Confirmation() {
  return (
    <div>
      <Navbar />
      <div className="confirmation-page">
        <h1>Din beställning har slutförts</h1>
        <p>Tack för din beställning.</p>

        <div className="confirmation-items">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <div className="confirmation-total">
          <span>Total</span>
          <span>300 kr</span>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Confirmation