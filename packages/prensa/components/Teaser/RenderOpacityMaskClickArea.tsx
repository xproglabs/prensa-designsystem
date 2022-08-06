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
  mr,
  ml,
  mt,
  mb,
  pr,
  pl,
  pt,
  pb,
  opacity_mask,
  width
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
        mr={mr}
        ml={ml}
        mt={mt}
        mb={mb}
        pr={pr}
        pl={pl}
        pt={pt}
        pb={pb}
        restrictedClickArea
        width={width}
      >
        {children}
      </ImagePreviewLink>
    )
  }

  return (
    <Link
      align={align}
      alignx={alignx}
      aligny={aligny}
      height={height}
      href={item_path}
      mr={mr}
      ml={ml}
      mt={mt}
      mb={mb}
      pr={pr}
      pl={pl}
      pt={pt}
      pb={pb}
      width={width}
    >
      {children}
    </Link>
  )
}

export { RenderOpacityMaskClickArea }