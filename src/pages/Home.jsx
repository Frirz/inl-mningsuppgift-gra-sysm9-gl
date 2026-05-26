import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import LatestProduct from '../components/LatestProduct'
import Footer from '../components/Footer'
import ShopCollection from '../components/ShopCollection'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LatestProduct />
      <ShopCollection />
      <Footer />
   </div>
  )
}

export default Home