import { map } from 'lodash'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { ControlButton } from './ControlButton'
import { Image } from './styled'
import { WebImageGalleryProps } from './types'

const WebImageGallery = ({ items }: WebImageGalleryProps) => {

  const renderArrowPrev = (onClick, hasArrow) => {
    return hasArrow && <ControlButton onClick={onClick} />
  }

  const renderArrowNext = (onClick, hasArrow) => {
    return hasArrow && <ControlButton onClick={onClick} isNext />
  }

  return (
    <Carousel
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      renderArrowPrev={renderArrowPrev}
      renderArrowNext={renderArrowNext}
    >
      {map(items, item => <Image src={item.value} />)}
    </Carousel>
  )
}

export { WebImageGallery }