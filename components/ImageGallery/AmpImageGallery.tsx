import { map } from 'lodash'
import React from 'react'

import { AmpImage } from './AmpImage'
import { Caption } from './Caption'
import { Content } from './styled'
import { AmpImageGalleryProps } from './types'

const AmpImageGallery = ({ captionProps, items }: AmpImageGalleryProps) => {
  return (
    <amp-carousel
      lightbox={true}
      height='500'
      layout='responsive'
      type='slides'
      width='768'
    >
      {map(items, (item, key) => (
        <Content key={key}>
          <AmpImage
            alt={item.caption}
            src={item.value}
          />
          {captionProps?.enabled && <Caption {...captionProps}>{item.caption}</Caption>}
        </Content>
      ))}
    </amp-carousel>
  )
}

export { AmpImageGallery }