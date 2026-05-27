import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './Carousel.css'

function Carousel({ images }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const prev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const next = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <div className="slideshow-wrapper">
      <button className="slide-btn left" onClick={prev}>&#8249;</button>
      <div className="slideshow" ref={emblaRef}>
        <div className="slideshow-container">
          {images.map((bild, index) => (
            <div key={index} className="slideshow-item">
              <img src={bild} alt={`bild ${index}`} />
            </div>
          ))}
        </div>
      </div>
      <button className="slide-btn right" onClick={next}>&#8250;</button>
    </div>
  )
}

export default Carousel