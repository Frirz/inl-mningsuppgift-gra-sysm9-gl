import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { createOrder } from '../services/api'
import './Checkout.css'

function Checkout() {
  const { cartItems, total, clearCart } = useCart()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardName: '',
    cardNumber: '',
    paymentMethod: 'kort'
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!user) {
      setError('Du måste vara inloggad för att kunna betala.')
      return
    }

    if (!formData.name || !formData.email || !formData.phone) {
      setError('Fyll i namn, email och mobilnummer!')
      return
    }

    if (formData.paymentMethod === 'kort' && (!formData.cardName || !formData.cardNumber)) {
      setError('Fyll i kortuppgifterna!')
      return
    }

    try {
      await createOrder({
        items: cartItems.map(item => ({
          product: item._id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        totalPrice: total,
        paymentMethod: formData.paymentMethod,
      })

      const orderedItems = cartItems.map(item => ({ ...item }))
      clearCart()
      navigate('/confirmation', {
        state: {
          items: orderedItems,
          total,
        },
      })
    } catch {
      setError('Något gick fel med betalningen!')
    }
  }

  return (
    <div>
      <Navbar />
      <div className="checkout-page">
        <h1>Betalning</h1>
        <div className="checkout-form">
          <div className="form-left">
            <label>Namn</label>
            <input type="text" name="name" placeholder="Namn" onChange={handleChange} />
            <label>Email</label>
            <input type="email" name="email" placeholder="exempel@exempel.com" onChange={handleChange} />
            <label>Mobilnummer</label>
            <input type="tel" name="phone" placeholder="0701234567" onChange={handleChange} />
          </div>

          <div className="form-right">
            <label>Betalningsmetod</label>
            <div className="payment-options">
              <label className={`payment-card ${formData.paymentMethod === 'kort' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="kort"
                  checked={formData.paymentMethod === 'kort'}
                  onChange={handleChange}
                />
                <span className="payment-icon">💳</span>
                <span>Kontokort</span>
              </label>
              <label className={`payment-card ${formData.paymentMethod === 'swish' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="swish"
                  checked={formData.paymentMethod === 'swish'}
                  onChange={handleChange}
                />
                <span className="payment-icon">📱</span>
                <span>Swish</span>
              </label>
            </div>

            {formData.paymentMethod === 'kort' ? (
              <>
                <label>Namn på kort</label>
                <input type="text" name="cardName" placeholder="Skriv in ditt namn här" onChange={handleChange} />
                <label>Kortnummer (4 siffror)</label>
                <input type="text" name="cardNumber" placeholder="XXXX" maxLength={4} onChange={handleChange} />
              </>
            ) : (
              <input type="text" name="swishInfo" value="Betala till 0701234567" readOnly className="swish-info" />
            )}
          </div>
        </div>
        {error && <p className="error">{error}</p>}
        <button className="pay-btn" onClick={handleSubmit}>Betala</button>
        <button className="back-link" onClick={() => navigate('/cart')}>Gå tillbaka</button>
      </div>
      <Footer />
    </div>
  )
}

export default Checkout