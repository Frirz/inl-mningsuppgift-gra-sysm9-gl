import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Login.css'

function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    try {
      await login(formData)
      navigate('/')
    } catch {
      setError('Email eller lösenord är fel!')
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Välkommen</h1>
        <div className="login-form">
          <input type="email" name="email" placeholder="Email" onChange={handleChange} />
          <input type="password" name="password" placeholder="Lösenord" onChange={handleChange} />
          {error && <p className="error">{error}</p>}
          <button className="login-btn" onClick={handleSubmit}>Logga in</button>
          <p>Har du inget konto? <Link to="/register">Registrera dig</Link></p>
          <p><Link to="/">gå tillbaka</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login