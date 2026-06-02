import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'
import { createOrder } from '../services/api'
import './Checkout.css'

function Checkout() {
  const { cartItems, total, clearCart } = useCart()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardName: '',
    cardNumber: '',
    paymentMethod: 'kort'
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.cardName || !formData.cardNumber) {
      setError('Fyll i alla fält!')
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
      clearCart()
      navigate('/confirmation')
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
          </div>
          <div className="form-right">
            <label>Namn på kort</label>
            <input type="text" name="cardName" placeholder="Skriv in ditt namn här" onChange={handleChange} />
            <label>Kortnummer (4 siffror)</label>
            <input type="text" name="cardNumber" placeholder="XXXX" maxLength={4} onChange={handleChange} />
          </div>
        </div>
        {error && <p className="error">{error}</p>}
        <button className="pay-btn" onClick={handleSubmit}>Betala</button>
        <button className="back-link" onClick={() => navigate('/cart')}>← Gå tillbaka</button>
      </div>
      <Footer />
    </div>
  )
}

export default Checkout