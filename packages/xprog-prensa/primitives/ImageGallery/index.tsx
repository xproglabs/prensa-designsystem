import map from 'lodash/map'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import { Caption } from './Caption'
import { ControlButton } from './ControlButton'
import { WebImageGalleryProps } from './types'

const WebImageGallery = ({
  captionProps,
  componentCaption: RenderCaption,
  componentImage: Image,
  items
}: WebImageGalleryProps) => {
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
      {map(items, (item, key) => (
        <React.Fragment key={key}>
          <Image alt={item?.caption} src={item?.url} />
          {captionProps?.enabled && RenderCaption && (
            <RenderCaption captionProps={captionProps} textValue={item.caption} />
          )}
          {captionProps?.enabled && !RenderCaption && (
            <Caption {...captionProps}>{item.caption}</Caption>
          )}
        </React.Fragment>
      ))}
    </Carousel>
  )
}

export { WebImageGallery }
