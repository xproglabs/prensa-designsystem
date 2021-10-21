import { ImageProps } from 'components/Image/types'
import { get } from 'lodash'
import React from 'react'

import ImageElement from '../Image'
import { parseImagePath } from '../Image/parser'
import * as S from './styled'
import { RenderOpacityMask } from './RenderOpacityMask'

type RenderImageProps = {
  amp?: boolean;
  domain: string;
  editable?: {
    enabled: boolean
  };
  image_circle?: boolean;
  item?: any;
  item_path?: string;
  layout?: any;
  opacityMask?: boolean;
}

const RenderImage = ({
  amp,
  domain,
  editable,
  image_circle,
  item,
  item_path,
  layout,
  opacityMask
}: RenderImageProps) => {
  // get image object from props
  let image_object = get(item, 'image', false)
  if (!image_object) {
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
  // prepare image props to render hybrid image ( amp / html )
  const image_props: ImageProps = {
    amp: amp,
    custom_class: image_circle == true ? 'image-with-radius' : '',
    title: image_caption,
    layout_mobile: {
      enabled: image_path_mobile && image_path_mobile != '',
      height: mobile_height,
      path: image_path_mobile,
      type: layout_mobile,
      width: mobile_width,
    },
    layout_desktop: {
      enabled: image_path_desktop && image_path_desktop != '',
      height: desktop_height,
      path: image_path_desktop,
      type: layout_desktop,
      width: desktop_width,
    }
  }

  const RenderImageElement = () => (
    <S.Image
      image_circle={image_circle}
      height={height}
    >
      <ImageElement {...image_props} />
    </S.Image>
  )

  const RenderImageWithOpacityMask = () => (
    <React.Fragment>
      <RenderImageElement />
      <RenderOpacityMask
        enabled={opacityMask}
        layout_desktop={image_props.layout_desktop}
        layout_mobile={image_props.layout_mobile}
      />
    </React.Fragment>
  )

  const RenderImageForPreview = () => (
    <React.Fragment>
      {opacityMask ? <RenderImageWithOpacityMask /> : <RenderImageElement />}
    </React.Fragment>
  )

  const RenderImageWithLink = () => (
    <S.AreaLink href={item_path}>
      {opacityMask ? <RenderImageWithOpacityMask /> : <RenderImageElement />}
    </S.AreaLink>
  )

  if (editable && editable.enabled) {
    return <RenderImageForPreview />
  }

  return <RenderImageWithLink />
}

export { RenderImage }