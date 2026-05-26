import './Carousel.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Carousel({ images }) {
  const settings = {
     dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
  }

  return (
    <div className="slideshow">
      <Slider {...settings}>
        {images.map((bild, index) => (
          <div key={index} className="slideshow-item">
            <img src={bild} alt={`bild ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel