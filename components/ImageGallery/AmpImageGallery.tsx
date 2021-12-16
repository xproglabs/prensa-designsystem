import { map } from 'lodash'
import React from 'react'

import { AmpImageGalleryProps } from './types'

const AmpImageGallery = ({ items }: AmpImageGalleryProps) => {
  return (
    <amp-carousel
      lightbox={true}
      height='500'
      layout='responsive'
      type='slides'
      width='768'
    >
      {map(items, (item, key) => (
        <figure style={{ margin: '0' }} key={key}>
          <amp-img 
            alt={item.caption}
            src={item.value}
            layout='responsive'
            height='384'
            key={key}
            width='768'
          />
          <figcaption>    
            {item.caption}
          </figcaption>
        </figure>
      ))}
    </amp-carousel>
  )
}

export { AmpImageGallery }