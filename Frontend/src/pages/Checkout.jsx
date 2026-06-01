import { Link } from 'react-router-dom'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import './Checkout.css'

function Checkout() {
  return (
    <div>
      <Navbar />
      <div className="checkout-page">
        <h1>Betalning</h1>
        <div className="checkout-form">
          <div className="form-left">
            <label>Namn</label>
            <input type="text" placeholder="Namn" />
            <label>Email</label>
            <input type="email" placeholder="exempel@exempel.com" />
          </div>
          <div className="form-right">
            <label>Namn på kort</label>
            <input type="text" placeholder="Skriv in ditt namn här" />
            <label>Kortnummer (4 siffror)</label>
            <input type="text" placeholder="XXXX" maxLength={4} />
          </div>
        </div>
        <Link to="/confirmation">
          <button className="pay-btn">Betala</button>
        </Link>
        <Link className="back-link" to="/cart">← Gå tillbaka</Link>
      </div>
      <Footer />
    </div>
  )
}

export default Checkout