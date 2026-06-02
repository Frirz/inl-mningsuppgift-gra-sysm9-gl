import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addItem = (product) => {
    setCartItems(prev => {
      const existing = prev.find(i => i._id === product._id)
      if (existing) {
        return prev.map(i => i._id === product._id ? { ...i, quantity: i.quantity + 1 } : i)
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(i => i._id !== id))
  }

  const changeQuantity = (id, quantity) => {
    if (quantity < 1) return removeItem(id)
    setCartItems(prev => prev.map(i => i._id === id ? { ...i, quantity } : i))
  }

  const clearCart = () => setCartItems([])

  const total = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, changeQuantity, clearCart, total }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}