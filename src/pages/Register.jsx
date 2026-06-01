import { Link } from 'react-router-dom'
import './Register.css'

function Register() {
  return (
    <div className="register-page">
      <h1>Registrera dig</h1>
      <div className="register-form">
        <input type="text" placeholder="Namn" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Lösenord" />
        <button className="register-btn">Registrera</button>
        <p>Har du redan ett konto? <Link to="/login">Logga in</Link></p>
        <p><Link to="/">Gå tillbaka</Link></p>
      </div>
    </div>
  )
}

export default Register