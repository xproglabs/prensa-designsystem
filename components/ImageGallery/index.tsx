import React from 'react'

import { AmpImageGallery } from './AmpImageGallery'
import { Container } from './styled'
import { ImageGalleryProps } from './types'
import { WebImageGallery } from './WebImageGallery'

const captionDefaultProps: ImageGalleryProps['captionProps'] = {
  fontFamily: 'secondary',
  fontSize: ['14px', '14px'],
  height: '48px',
  lineHeight: ['130%', '130%']
}

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
          captionProps={{ 
            ...captionDefaultProps,
            ...captionProps
          }}
          items={items}
        />
      )
    } else {
      return (
        <WebImageGallery
          captionProps={{ 
            ...captionDefaultProps,
            ...captionProps
          }}
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
  height: ['408px', '548px'],
  width: ['100%', '768px']
}

export { ImageGallery }