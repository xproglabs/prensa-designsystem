import { map } from 'lodash'
import React from 'react'

import { AmpImage } from './AmpImage'
import { Caption } from './Caption'
import { Content } from './styled'
import { AmpImageGalleryProps } from './types'

const AmpImageGallery = ({
  captionProps,
  height='548',
  width='768',
  items
}: AmpImageGalleryProps) => {
  return (
    <amp-carousel
      lightbox={true}
      height={height}
      layout='responsive'
      type='slides'
      width={width}
    >
      {map(items, (item, key) => (
        <Content key={key}>
          <AmpImage alt={item.caption} src={item.value} />
          {captionProps?.enabled && (
            <Caption amp={true} {...captionProps}>
              {item.caption}
            </Caption>
          )}
        </Content>
      ))}
    </amp-carousel>
  )
}

export { AmpImageGallery }
