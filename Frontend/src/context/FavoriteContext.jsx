import { createContext, useContext, useMemo, useState } from 'react'
import { useAuth } from './AuthContext'

const FavoriteContext = createContext()

function getFavoritesKey(user) {
  return user?.email ? `favorites:${user.email}` : 'favorites:guest'
}

function getStoredFavorites(key) {
  try {
    const storedFavorites = localStorage.getItem(key)
    return storedFavorites ? JSON.parse(storedFavorites) : []
  } catch {
    return []
  }
}

export function FavoriteProvider({ children }) {
  const { user } = useAuth()
  const favoritesKey = useMemo(() => getFavoritesKey(user), [user])
  const [savedFavorites, setSavedFavorites] = useState(() => ({
    key: favoritesKey,
    items: getStoredFavorites(favoritesKey),
  }))
  const favorites = savedFavorites.key === favoritesKey
    ? savedFavorites.items
    : getStoredFavorites(favoritesKey)

  const saveFavorites = (nextFavorites) => {
    localStorage.setItem(favoritesKey, JSON.stringify(nextFavorites))
    setSavedFavorites({ key: favoritesKey, items: nextFavorites })
  }

  const toggleFavorite = (product) => {
    const exists = favorites.some(item => item._id === product._id)
    const nextFavorites = exists
      ? favorites.filter(item => item._id !== product._id)
      : [...favorites, product]

    saveFavorites(nextFavorites)
  }

  const isFavorite = (id) => favorites.some(item => item._id === id)

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  )
}

export function useFavorites() {
  return useContext(FavoriteContext)
}
