import { map } from 'lodash'
import React from 'react'

import { Caption } from './Caption'
import { ControlButton } from './ControlButton'
import { Content, WebCarousel } from './styled'
import { WebImageGalleryProps } from './types'
import { WebImage } from './WebImage'

const WebImageGallery = ({ captionProps, items }: WebImageGalleryProps) => {

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
      {map(items, (item, key) =>
        <Content key={key}>
          <WebImage src={item.value} />
          {captionProps?.enabled && <Caption {...captionProps}>{item.caption}</Caption>}
        </Content>
      )}
    </WebCarousel>
  )
}

export { WebImageGallery }