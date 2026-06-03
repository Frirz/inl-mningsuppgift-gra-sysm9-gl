import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Navbar.css'

function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav>
      <h1 className="logo"><Link to="/">Ellis Art & Tattoo</Link></h1>

      <ul>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/favorites">Favoriter</Link></li>
        {user && <li><Link to="/orders">Beställningar</Link></li>}
        <li>
          {user ? (
            <button className="nav-link" type="button" onClick={handleLogout}>Logga ut</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
