import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import { useAuth } from '../context/AuthContext'
import { getOrders } from '../services/api'
import './Orders.css'

function Orders() {
  const { user } = useAuth()
  const [orders, setOrders] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!user) {
      return
    }

    getOrders()
      .then(data => {
        setOrders(data)
        setError('')
      })
      .catch(() => setError('Kunde inte hämta dina beställningar.'))
  }, [user])

  const loading = user && orders === null && !error

  return (
    <div>
      <Navbar />
      <div className="orders-page">
        <h1>Beställningar</h1>

        {!user ? (
          <div className="orders-message">
            <p>Du måste vara inloggad för att se dina beställningar.</p>
            <Link to="/login">Logga in</Link>
          </div>
        ) : loading ? (
          <p>Laddar beställningar...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : orders.length === 0 ? (
          <p>Du har inte gjort någon beställning än.</p>
        ) : (
          <div className="orders-list">
            {orders.map(order => (
              <div className="order-card" key={order._id}>
                <div className="order-header">
                  <h2>Beställning</h2>
                  <span>{new Date(order.createdAt).toLocaleDateString('sv-SE')}</span>
                </div>

                <div className="order-items">
                  {order.items.map(item => (
                    <div className="order-item" key={`${order._id}-${item.product}`}>
                      <span>{item.name}</span>
                      <span>{item.quantity} st</span>
                      <span>{item.price * item.quantity} kr</span>
                    </div>
                  ))}
                </div>

                <div className="order-total">
                  <span>Total</span>
                  <span>{order.totalPrice} kr</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Orders
