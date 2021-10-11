import React from 'react'
import { withTheme } from 'styled-components'

type ResponsiveHeight = [string, string]
type Queries = 'sm' | 'md' | 'lg' | 'xl'

export type CarouselProps = {
  children?: any;
  enabled: boolean;
  /**
   * @description Expects an array of strings. Each string represents a height
   * @example ['250', '250'] | ['250px', '250px']
   */
  height: ResponsiveHeight;
  querie: Queries;
  theme?: any;
}

const Carousel = ({
  children,
  enabled,
  height,
  querie,
  theme
}: CarouselProps) => {

  if (!enabled) return null;

  let querie_value = theme.queries[querie]
  
  return (
    <React.Fragment>
      <amp-carousel
        layout='fixed'
        height={height[0]}
        media={`(max-width: ${querie_value})`}
        width='100%'
        type='carrossel'>
        {children}
      </amp-carousel>
      <amp-carousel
        layout='fixed'
        height={height[1]}
        media={`(min-width: ${querie_value})`}
        width='100%'
        type='carrossel'>
        {children}
      </amp-carousel>
    </React.Fragment>
  )
}

Carousel.defaultProps = {
  height: ['250', '250'],
  querie: 'md'
}

export default withTheme(Carousel)