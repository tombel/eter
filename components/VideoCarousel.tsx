import Carousel from 'react-spring-3d-carousel'
import { useState, useEffect } from 'react'
import { config } from 'react-spring'

export interface VideoCarouselProps {
  width: string
  height: string
  margin: string
  slides: {
    key: number
    content: JSX.Element
  }[]
  offset: number
  showControls: boolean
}

export default function VideoCarousel({
  width,
  height,
  margin,
  slides,
  offset,
  showControls,
}: VideoCarouselProps): JSX.Element {
  const table = slides.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) }
  })

  const [offsetRadius, setOffsetRadius] = useState(2)
  const [showArrows, setShowArrows] = useState(false)
  const [goToSlide, setGoToSlide] = useState(null)
  const [cards] = useState(table)

  useEffect(() => {
    setOffsetRadius(offset)
    setShowArrows(showControls)
  }, [offset, showArrows])

  return (
    <div style={{ width: width, height: height, margin: margin }}>
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={false}
        animationConfig={config.gentle}
        offsetFn={() => ({ opacity: 1 })}
      />
    </div>
  )
}
