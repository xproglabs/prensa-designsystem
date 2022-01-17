import { get } from 'lodash'
import { Link } from 'prensa'
import React from 'react'

import { ImagePreviewLink } from '../Image/preview'

const RenderOpacityMaskClickArea = ({
  align,
  alignx,
  aligny,
  height,
  children,
  editable,
  layout,
  item,
  item_path,
  opacity_mask
}: any) => {

  if (!opacity_mask) {
    return children
  }

  const mobile_dim = get(layout, 'image.dimension[0]', '1x1')
  const desktop_dim = get(layout, 'image.dimension[1]', '1x1')

  if (editable?.enabled) {
    return (
      <ImagePreviewLink
        align={align}
        alignx={alignx}
        aligny={aligny}
        height={height}
        editable={editable}
        image_props={{ mobile_dim, desktop_dim }}
        item={item}
        restrictedClickArea
      >
        {children}
      </ImagePreviewLink>
    )
  }

  return (
    <Link
      height={height}
      href={item_path}
    >
      {children}
    </Link>
  )
}

export { RenderOpacityMaskClickArea }