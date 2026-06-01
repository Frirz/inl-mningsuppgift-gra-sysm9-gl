import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <div className="login-page">
      <h1>Välkommen</h1>
      <div className="login-form">
        <input type="text" placeholder="Namn" />
        <input type="password" placeholder="Lösenord" />
        <button className="login-btn">Logga in</button>
        <p>Har du inget konto? <Link to="/register">Registrera dig</Link></p>
        <p><Link to="/">Gå tillbaka</Link></p>
      </div>
    </div>
  )
}

export default Login