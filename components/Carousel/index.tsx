import React from 'react'
import { withTheme } from 'styled-components'

import { CarouselProps } from './types'

const Carousel = ({
  children,
  enabled,
  height,
  querie,
  theme,
  type
}: CarouselProps) => {

  if (!enabled) return null

  let querie_value = theme.queries[querie]

  return (
    <React.Fragment>
      <amp-carousel
        layout='fixed-height'
        height={height[0]}
        media={`(max-width: ${querie_value})`}
        type={type}>
        {children}
      </amp-carousel>
      <amp-carousel
        layout='fixed-height'
        height={height[1]}
        media={`(min-width: ${querie_value})`}
        type={type}>
        {children}
      </amp-carousel>
    </React.Fragment>
  )
}

Carousel.defaultProps = {
  height: ['250', '250'],
  layout: 'fixed-height',
  querie: 'md',
  type: 'slides'
}

export default withTheme(Carousel)