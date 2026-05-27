import { Link } from 'react-router-dom'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'

function Register() {
  return (
    <div>
      <Navbar />
      <main className="page-section">
        <h2>Create account</h2>
        <form>
          <label>
            Name
            <input type="text" name="name" autoComplete="name" />
          </label>
          <label>
            Email
            <input type="email" name="email" autoComplete="email" />
          </label>
          <label>
            Password
            <input type="password" name="password" autoComplete="new-password" />
          </label>
          <button type="submit">Register</button>
        </form>
        <Link to="/login">Already have an account?</Link>
      </main>
      <Footer />
    </div>
  )
}

export default Register
