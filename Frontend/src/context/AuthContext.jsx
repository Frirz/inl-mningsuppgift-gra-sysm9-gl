import { createContext, useContext, useState } from 'react'
import { loginUser, registerUser } from '../services/api'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = async (formData) => {
    const data = await loginUser(formData)
    localStorage.setItem('token', data.accessToken)
    setUser({ name: data.name, email: data.email })
    return data
  }

  const register = async (formData) => {
    const data = await registerUser(formData)
    return data
  }

  const logout = () => {
    localStorage.removeItem('token')
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