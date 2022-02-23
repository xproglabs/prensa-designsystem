import { Block } from 'prensa'
import React from 'react'
import { withTheme } from 'styled-components'

import { CarouselProps } from './types'

const Carousel = ({
  children,
  enabled,
  height,
  mb,
  querie,
  theme,
  type,
  autoplay,
  delay
}: CarouselProps) => {

  if (!enabled) return null

  let querie_value = theme.queries[querie]

  return (
    <Block
      width='100%'
      height={height[0]}
      mb={mb[0]}
      lg={{ height: height[1], mb: mb[1] }}
    >
      <amp-carousel
        autoplay={autoplay}
        delay={delay}
        layout='fixed-height'
        height={height[0]}
        media={`(max-width: ${querie_value})`}
        type={type}>
        {children}
      </amp-carousel>
      <amp-carousel
        autoplay={autoplay}
        delay={delay}
        layout='fixed-height'
        height={height[1]}
        media={`(min-width: ${querie_value})`}
        type={type}>
        {children}
      </amp-carousel>
    </Block>
  )
}

Carousel.defaultProps = {
  autoplay: false,
  delay: 6000,
  height: ['250px', '250px'],
  layout: 'fixed-height',
  querie: 'md',
  mb: [undefined, undefined],
  type: 'slides'
}

export default withTheme(Carousel)