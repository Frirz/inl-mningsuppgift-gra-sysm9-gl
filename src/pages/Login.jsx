import { Link } from 'react-router-dom'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'

function Login() {
  return (
    <div>
      <Navbar />
      <main className="page-section">
        <h2>Login</h2>
        <form>
          <label>
            Email
            <input type="email" name="email" autoComplete="email" />
          </label>
          <label>
            Password
            <input type="password" name="password" autoComplete="current-password" />
          </label>
          <button type="submit">Login</button>
        </form>
        <Link to="/register">Create account</Link>
      </main>
      <Footer />
    </div>
  )
}

export default Login
