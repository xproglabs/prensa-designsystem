import React from 'react'

import { Carousel } from '../Carousel'
import { Caption } from './Caption'
import { ControlButton } from './ControlButton'
import { ImageGalleryProps } from './types'

const ImageGallery = ({
  captionProps,
  componentCaption,
  componentImage,
  items,
  ...otherProps
}: ImageGalleryProps) => {

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
      axis='horizontal'
      labels={{ item: '', leftArrow: 'Retroceder', rightArrow: 'Avançar' }}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      renderArrowPrev={renderArrowPrev}
      renderArrowNext={renderArrowNext}
      {...otherProps}
    >
      {items.map((item, key) => (
        <React.Fragment key={`slide${key}`}>
          {componentImage ?
            <RenderImage
              alt={item?.caption}
              src={item?.url}
            />
            :
            <img
              alt={item?.caption}
              src={item?.url}
            />
          }
          {renderCaptionOriginalOrCustom(item)}
        </React.Fragment>
      ))}
    </Carousel>
  )
}

export { ImageGallery }
