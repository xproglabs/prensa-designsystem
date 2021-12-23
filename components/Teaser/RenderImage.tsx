import { ImageProps } from 'components/Image/types'
import { get } from 'lodash'
import React from 'react'

import ImageElement from '../Image'
import { parseImagePath } from '../Image/parser'
import { ImagePreviewLink } from '../Image/preview'
import { RenderOpacityMask } from './RenderOpacityMask'
import * as S from './styled'

type RenderImageProps = {
  amp?: boolean;
  domain: string;
  editable?: {
    enabled: boolean,
    state_of_image: any;
  };
  fallback_image_url?: string;
  image_circle?: boolean;
  item?: any;
  item_path?: string;
  layout?: any;
  opacityMask?: boolean;
  state_of_image?: any;
}

const RenderImage = ({
  amp,
  domain,
  editable,
  fallback_image_url,
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
  // get contentId from props
  let image_contentid = get(image_object, 'contentId', false)
  image_contentid = image_contentid || get(image_object, 'cid', false)
  // show new policy when saved
  if (editable && editable.enabled) {
    
    let image_cid = get(image_contentid.split(':'), '[0]', '')
    image_cid = get(image_cid.split(':'), '[0]', '').split('.')
    image_cid = `${get(image_cid, '[0]', '')}.${get(image_cid, '[1]', '')}`
    
    const image_cid_editing = editable?.state_of_image[`${image_cid}_cid`].current
    if (image_cid_editing) {
      image_contentid = image_cid_editing
    }
  }
  // parse data
  const image_caption = get(image_object, 'caption', '')
  const mobile_dim = get(layout, 'image.dimension[0]', '1x1')
  const desktop_dim = get(layout, 'image.dimension[1]', '1x1')
  const has_fallback_image = get(layout, 'image.fallback_image', false)
  const height = get(layout, 'image.height', 600)
  const layout_mobile = get(layout, 'image.layout[0]', 'responsive')
  const layout_desktop = get(layout, 'image.layout[1]', 'responsive')
  const mobile_height = get(layout, 'image.height[0]', 600)
  const mobile_width = get(layout, 'image.width[0]', 600)
  const desktop_height = get(layout, 'image.height[1]', 600)
  const desktop_width = get(layout, 'image.width[1]', 600)

  let image_path_mobile = ''
  let image_path_desktop = ''
  /**
   * Dataflow for defining image url
   *  1 image_contentid does not exist and fallback_image_url is defined (should render fallback_image_url)
   *  2 image_contentid does not exist as fallback_image_url (should render nothing)
   *  3 image_contentid exists and generate a valid path (should render CMS image)
   */
  if (!image_contentid || image_contentid === '') {
    if (has_fallback_image === true) {
      if (!fallback_image_url) {
        console.error('Prensa | Missing fallback_image_url prop in PageBlock component')
      } else {
        image_path_mobile = fallback_image_url
        image_path_desktop = fallback_image_url
      }
    } else {
      return null
    }
  } else {
    image_path_mobile = parseImagePath(mobile_dim, domain, image_contentid, 600)
    image_path_desktop = parseImagePath(desktop_dim, domain, image_contentid, 600)
  }

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

  const RenderImageForPreview = () => {
    return (
      <ImagePreviewLink
        editable={editable}
        image_props={{
          mobile_dim,
          desktop_dim
        }}
        item={item}>
        {opacityMask ?
          <RenderImageWithOpacityMask /> :
          <RenderImageElement />
        }
      </ImagePreviewLink>
    )
  }

  const RenderImageWithLink = () => {
    //Block image click when using opacity mask
    if (opacityMask) {
      return (
        <RenderImageWithOpacityMask/>
      )
    }
    return (
      <S.AreaLink href={item_path}>
        <RenderImageElement />
      </S.AreaLink>
    )
  }
  if (editable && editable.enabled) {
    return <RenderImageForPreview />
  }

  return <RenderImageWithLink />
}

export { RenderImage }