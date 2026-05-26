import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <h1>Ellis Art & Tattoo</h1>

      <ul>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar