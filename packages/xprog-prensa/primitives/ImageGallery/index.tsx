import map from 'lodash/map'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import { Caption } from './Caption'
import { ControlButton } from './ControlButton'
import { WebImageGalleryProps } from './types'

const WebImageGallery = ({
  captionProps,
  componentCaption,
  componentImage,
  items
}: WebImageGalleryProps) => {

  const RenderCaption = componentCaption
  const RenderImage = componentImage

  const renderArrowPrev = (onClick, hasArrow) => {
    return hasArrow && <ControlButton onClick={onClick} />
  }

  const renderArrowNext = (onClick, hasArrow) => {
    return hasArrow && <ControlButton onClick={onClick} isNext />
  }

  const renderCaptionOriginalOrCustom = (item) => {
    if (captionProps.enabled && RenderCaption) {
      return (
        <RenderCaption
          captionProps={captionProps}
          textValue={item.caption}
        />
      )
    } else {
      return (
        <Caption {...captionProps}>
          {item.caption}
        </Caption>
      )
    }
  }

  return (
    <Carousel
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      renderArrowPrev={renderArrowPrev}
      renderArrowNext={renderArrowNext}
    >
      {map(items, (item, key) => (
        <React.Fragment key={key}>
          <RenderImage alt={item?.caption} src={item?.url} />
          {renderCaptionOriginalOrCustom(item)}
        </React.Fragment>
      ))}
    </Carousel>
  )
}

export { WebImageGallery }
