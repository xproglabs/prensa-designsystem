import { map } from 'lodash'
import React from 'react'

import { AmpImage } from './AmpImage'
import { Caption } from './Caption'
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
        <React.Fragment>
          <AmpImage
            key={key}
            alt={item.caption}
            src={item.value}
          />
          <Caption>{item.caption}</Caption>
        </React.Fragment>
      ))}
    </amp-carousel>
  )
}

export { AmpImageGallery }