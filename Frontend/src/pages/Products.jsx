import { useState, useEffect } from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import ProductFilter from '../components/FilterBar'
import './Products.css'

function Products() {
  const [products, setProducts] = useState([])
  const [activeFilter, setFilter] = useState('Alla')

 useEffect(() => {
  fetch('http://localhost:3000/api/products')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setProducts(data)
    })
    .catch(err => console.error(err))
}, [])

  const filteredProducts = activeFilter === 'Alla'
    ? products
    : products.filter(p => p.category === activeFilter)

  return (
    <div>
      <Navbar />
      <div className="products-page">
        <h1>Produkter</h1>
        <ProductFilter activeFilter={activeFilter} setFilter={setFilter} />
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Products