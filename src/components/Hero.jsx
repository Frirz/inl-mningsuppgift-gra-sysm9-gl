import { Link } from 'react-router-dom'
import './Hero.css'
import heroImage from '../images/hero.png'

function Hero() {
  return (

   <div className="hero">
    <img src={heroImage} alt="Hero" className="hero-image" />
    <div className="hero-text">
      <h2>MODERN DESIGN</h2>
      <h1>FAKE TATTOOS</h1>
      <Link className="link" to="/Products">
        SHOP NOW
      </Link>
    </div>
   </div>

   
  )
}

export default Hero