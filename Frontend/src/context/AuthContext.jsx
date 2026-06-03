import { createContext, useContext, useState } from 'react'
import { loginUser, registerUser } from '../services/api'

const AuthContext = createContext()

function getStoredUser() {
  try {
    const storedUser = localStorage.getItem('user')
    return storedUser ? JSON.parse(storedUser) : null
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getStoredUser)

  const login = async (formData) => {
    const data = await loginUser(formData)
    const loggedInUser = { name: data.name, email: data.email }
    localStorage.setItem('token', data.accessToken)
    localStorage.setItem('user', JSON.stringify(loggedInUser))
    setUser(loggedInUser)
    return data
  }

  const register = async (formData) => {
    const data = await registerUser(formData)
    return data
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
