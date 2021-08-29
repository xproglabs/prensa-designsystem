import React from 'react'
import { withTheme } from 'styled-components'

const Carousel = ({
  children,
  height,
  querie
}) => {
  return (
    <>
      <amp-carousel
        layout="fixed"
        height={height[0]}
        media={`(max-width: ${querie})`}
        width='100%'
        type="carrossel">
        {children}
      </amp-carousel>
      <amp-carousel
        layout="fixed"
        height={height[1]}
        media={`(min-width: ${querie})`}
        width='100%'
        type="carrossel">
        {children}
      </amp-carousel>
    </>
  )
}

export default withTheme(Carousel)