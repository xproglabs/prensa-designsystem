import React from 'react'

import { AmpImageGallery } from './AmpImageGallery'
import { Container } from './styled'
import { ImageGalleryProps } from './types'
import { WebImageGallery } from './WebImageGallery'

const ImageGallery = ({
  amp,
  captionProps,
  items,
  height,
  width
}: ImageGalleryProps) => {

  const RenderGallery = () => {
    if (amp) {
      return (
        <AmpImageGallery
          captionProps={captionProps}
          items={items}
        />
      )
    } else {
      return (
        <WebImageGallery
          captionProps={captionProps}
          items={items}
        />
      )
    }
  }

  return (
    <Container $height={height} $width={width}>
      <RenderGallery />
    </Container>
  )
}

ImageGallery.defaultProps = {
  caption: {
    fontFamily: 'secondary',
    fontSize: ['14px', '14px'],
    lineHeight: ['130%', '130%']
  },
  height: '500px',
  width: '768px'
}

export { ImageGallery }