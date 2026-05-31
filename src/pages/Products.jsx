import { useState } from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import ProductFilter from '../components/FilterBar'
import './Products.css'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'

const produkter = [
  { id: 1, name: 'Big Sticker', price: 99, category: 'Big Stickers', image: img2 },
  { id: 2, name: 'Big Sticker 2', price: 99, category: 'Big Stickers', image: img2 },
  { id: 3, name: 'smal sticker 1', price: 199, category: 'Smal Stickers', image: img1 },
  { id: 4, name: 'Smal sticker 2', price: 199, category: 'Smal Stickers', image: img1 },
  { id: 5, name: 'Smal Sticker 3', price: 299, category: 'Smal Stickers', image: img2 },
  { id: 6, name: 'Smal Sticker 4', price: 299, category: 'Smal Stickers', image: img2 },
]

function Products() {
  const [activeFilter, setFilter] = useState('Alla')

  const filteredProducts = activeFilter === 'Alla'
    ? produkter
    : produkter.filter(p => p.category === activeFilter)

  return (
    <div>
      <Navbar />
      <div className="products-page">
        <h1>Produkter</h1>
        <ProductFilter activeFilter={activeFilter} setFilter={setFilter} />
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Products