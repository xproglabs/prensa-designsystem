import React from 'react'
import { withTheme } from 'styled-components'

import Block from '../NewBlock'
import { CarouselProps } from './types'

const Carousel = ({
  autoplay,
  children,
  delay,
  enabled,
  height,
  loop,
  mb,
  querie,
  theme,
  type,
}: CarouselProps) => {

  if (!enabled) return null

  let querie_value = theme.queries[querie]
  const carousel_autoplay = autoplay ? '' : undefined

  return (
    <Block
      height={height}
      mb={mb}
      width='100%'
    >
      <amp-carousel
        autoplay={carousel_autoplay}
        delay={delay}
        layout='fixed-height'
        loop={loop}
        height={height[0]}
        media={`(max-width: ${querie_value})`}
        type={type}
      >
        {children}
      </amp-carousel>
      <amp-carousel
        autoplay={carousel_autoplay}
        delay={delay}
        layout='fixed-height'
        loop={loop}
        height={height[1]}
        media={`(min-width: ${querie_value})`}
        type={type}
      >
        {children}
      </amp-carousel>
    </Block>
  )
}

Carousel.defaultProps = {
  height: ['250px', '250px'],
  layout: 'fixed-height',
  querie: 'md',
  mb: [undefined, undefined],
  type: 'slides'
}

export default withTheme(Carousel)