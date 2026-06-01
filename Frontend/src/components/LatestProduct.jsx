import { Link } from 'react-router-dom'
import './LatestProduct.css'
import Carousel from '../components/Carousel'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'



function LatestProduct() {
  return (
    <div className="latest-product">
<div className="latest-product-text">
      <h2>Our Latest Products</h2>
      <p>Check out our newest arrivals!</p>
      <Link className="link" to="/Products">
        SHOP NOW
      </Link>
        </div>
      <div className="latest-product-carousel">
      <Carousel images={[img2, img1]} />
         </div>
      </div>
      
  )
}

export default LatestProduct