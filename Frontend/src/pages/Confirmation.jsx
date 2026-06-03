import { Link, useLocation } from 'react-router-dom'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import './Confirmation.css'

function Confirmation() {
  const location = useLocation()
  const order = location.state
  const items = order?.items || []
  const total = order?.total || 0

  return (
    <div>
      <Navbar />
      <div className="confirmation-page">
        <h1>Din beställning har slutförts</h1>
        <p>Tack för din beställning.</p>

        {items.length > 0 ? (
          <>
            <div className="confirmation-items">
              {items.map(item => (
                <div className="confirmation-item" key={item._id}>
                  <img src={item.image} alt={item.name} />
                  <div className="confirmation-item-info">
                    <h3>{item.name}</h3>
                    <p>{item.quantity} st x {item.price} kr</p>
                  </div>
                  <span>{item.price * item.quantity} kr</span>
                </div>
              ))}
            </div>

            <div className="confirmation-total">
              <span>Total</span>
              <span>{total} kr</span>
            </div>
          </>
        ) : (
          <Link className="confirmation-link" to="/products">Fortsätt handla</Link>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Confirmation
