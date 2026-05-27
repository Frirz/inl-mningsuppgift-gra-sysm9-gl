import { Link } from 'react-router-dom'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'

function Confirmation() {
  return (
    <div>
      <Navbar />
      <main className="page-section">
        <h2>Thank you</h2>
        <p>Your order has been received.</p>
        <Link to="/">Back to home</Link>
      </main>
      <Footer />
    </div>
  )
}

export default Confirmation
