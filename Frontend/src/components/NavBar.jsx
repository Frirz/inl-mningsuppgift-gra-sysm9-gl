import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Navbar.css'

function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const handleLogout = () => {
    logout()
    closeMenu()
    navigate('/')
  }

  return (
    <nav>
      <div className="nav-top">
        <h1 className="logo"><Link to="/" onClick={closeMenu}>Ellis Art & Tattoo</Link></h1>
        <button
          className="menu-btn"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Öppna meny"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <ul className={menuOpen ? 'nav-menu open' : 'nav-menu'}>
        <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
        <li><Link to="/cart" onClick={closeMenu}>Cart</Link></li>
        <li><Link to="/favorites" onClick={closeMenu}>Favoriter</Link></li>
        {user && <li><Link to="/orders" onClick={closeMenu}>Beställningar</Link></li>}
        <li>
          {user ? (
            <button className="nav-link" type="button" onClick={handleLogout}>Logga ut</button>
          ) : (
            <Link to="/login" onClick={closeMenu}>Login</Link>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
