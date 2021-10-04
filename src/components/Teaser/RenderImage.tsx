import { get } from 'lodash'
import React from 'react'

import AmpImage from '../Image'
import { parseImagePath } from '../Image/parser'
import * as S from './styled'

const RenderImage = ({ domain, image_circle, item, item_path, layout }) => {
  // get image object from props
  let image_object = get(item, 'image', false)
  if(!image_object) {
    image_object = get(item, 'img', false)
  }
  const image_enabled = get(layout, 'image.enabled', false)
  // get contentId from props
  let image_contentid = get(image_object, 'contentId', false)
  image_contentid = image_contentid || get(image_object, 'cid', false)
  if (!image_contentid || !image_enabled) {
    return <></>
  }
  // parse data
  const image_caption = get(image_object, 'caption', '')
  const mobile_dim = get(layout, 'image.dimension[0]', '1x1')
  const desktop_dim = get(layout, 'image.dimension[1]', '1x1')
  const height = get(layout, 'image.height', 600)
  const layout_mobile = get(layout, 'image.layout[0]', 'responsive')
  const layout_desktop = get(layout, 'image.layout[1]', 'responsive')
  const mobile_height = get(layout, 'image.height[0]', 600)
  const mobile_width = get(layout, 'image.width[0]', 600)
  const desktop_height = get(layout, 'image.height[1]', 600)
  const desktop_width = get(layout, 'image.width[1]', 600)
  const image_path_mobile = parseImagePath(mobile_dim, domain, image_contentid, 600)
  const image_path_desktop = parseImagePath(desktop_dim, domain, image_contentid, 600)
  return (
    <S.AreaLink href={item_path}>
      <S.Image
        image_circle={image_circle}
        height={height}>
        <AmpImage
          custom_class={image_circle == true ? 'image-with-radius' : ''}
          title={image_caption}
          mobile_layout={layout_mobile}
          mobile_path={image_path_mobile}
          mobile_height={mobile_height}
          mobile_width={mobile_width}
          desktop_layout={layout_desktop}
          desktop_path={image_path_desktop}
          desktop_height={desktop_height}
          desktop_width={desktop_width}
        />
      </S.Image>
    </S.AreaLink>
  )
}

export { RenderImage }