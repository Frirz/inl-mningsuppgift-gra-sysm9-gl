import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Register.css'

function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    try {
      await register(formData)
      navigate('/login')
    } catch {
      setError('Något gick fel, försök igen!')
    }
  }

  return (
    <div className="register-page">
      <h1>Registrera dig</h1>
      <div className="register-form">
        <input type="text" name="name" placeholder="Namn" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Lösenord" onChange={handleChange} />
        {error && <p className="error">{error}</p>}
        <button className="register-btn" onClick={handleSubmit}>Registrera</button>
        <p>Har du redan ett konto? <Link to="/login">Logga in</Link></p>
         <p><Link to="/">Gå tillbaka</Link></p>
      </div>
    </div>
  )
}

export default Register