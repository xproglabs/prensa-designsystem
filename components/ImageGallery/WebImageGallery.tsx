import { map } from 'lodash'
import React from 'react'

import { ControlButton } from './ControlButton'
import { Image, WebCarousel } from './styled'
import { WebImageGalleryProps } from './types'

const WebImageGallery = ({ items }: WebImageGalleryProps) => {

  const renderArrowPrev = (onClick, hasArrow) => {
    return hasArrow && <ControlButton onClick={onClick} />
  }

  const renderArrowNext = (onClick, hasArrow) => {
    return hasArrow && <ControlButton onClick={onClick} isNext />
  }

  return (
    <WebCarousel
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      renderArrowPrev={renderArrowPrev}
      renderArrowNext={renderArrowNext}
    >
      {map(items, item => <Image src={item.value} />)}
    </WebCarousel>
  )
}

export { WebImageGallery }