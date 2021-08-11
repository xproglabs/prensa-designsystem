import { get } from 'lodash'
import React from 'react'

import Block from '../Block'
import AmpImage from '../Image'
import { path_absolute } from '../Image/pathAbsolute'
import * as S from './styled'

const RenderImage = ({ domain, image_circle, item, item_path, layout }) => {
  const image_enabled = get(layout, 'image.enabled', false)
  const image_object = get(item, 'image', false)
  const image_contentid = get(image_object, 'contentId', false)

  if (!image_contentid || !image_enabled) {
    return false
  }

  const image_caption = get(image_object, 'caption', '')
  const mobile_dim = get(layout, 'image.dimension[0]', '1x1')
  const height = get(layout, 'image.height', 600)
  const mobile_height = get(layout, 'image.height[0]', 600)
  const mobile_width = get(layout, 'image.width[0]', 600)
  const desktop_dim = get(layout, 'image.dimension[1]', '1x1')
  const desktop_height = get(layout, 'image.height[1]', 600)
  const desktop_width = get(layout, 'image.width[1]', 600)
  const image_box = get(layout, 'image.box', ['100%', '100%'])
  const image_path_mobile = path_absolute(mobile_dim, domain, image_contentid, 600)
  const image_path_desktop = path_absolute(desktop_dim, domain, image_contentid, 600)
  const image_mb = get(layout, 'image.mb', [0, 0])
  const image_ml = get(layout, 'image.ml', [0, 0])

  return (
    <Block
      mb={image_mb[0]}
      ml={image_ml[0]}
      lg={{
        mb: image_mb[1],
        ml: image_ml[1],
        width: image_box[1]
      }}
      width={image_box[0]}
    >
      <S.AreaLink
        href={item_path}
      >
        <S.Image
          image_circle={image_circle}
          height={height}
        >
          <AmpImage
            custom_class={image_circle == true ? 'image-with-radius' : ''}
            title={image_caption}
            mobile_layout="responsive"
            mobile_path={image_path_mobile}
            mobile_height={mobile_height}
            mobile_width={mobile_width}
            desktop_layout="responsive"
            desktop_path={image_path_desktop}
            desktop_height={desktop_height}
            desktop_width={desktop_width}
          />
        </S.Image>
      </S.AreaLink>
    </Block>
  )
}

export { RenderImage }