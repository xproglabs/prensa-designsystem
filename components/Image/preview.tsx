import { align, height, margin, padding, width } from 'prensa/styled-system'
import React from 'react'
import styled from 'styled-components'

const ImagePreviewArea: any = styled.a`
  ${align};
  ${height};
  ${margin};
  ${padding};
  ${width};
  color: inherit;
  cursor: pointer;
  text-decoration: none;
  white-space: normal;
  &:hover {
    opacity: 0.9;
  }
`

export const ImagePreviewLink = ({
  align,
  alignx,
  aligny,
  children,
  editable,
  height,
  image_props,
  item,
  mr,
  ml,
  mt,
  mb,
  pr,
  pl,
  pt,
  pb,
  restrictedClickArea,
  width = '100%'
}: any) => {

  const previewAreaId = `preview-area-${item.cid}`

  const handlePreviewClick = item => {
    editable.image_load(editable, item, image_props)
  }

  const handleAreaClick = event => {
    if (restrictedClickArea && event.target.id !== previewAreaId) {
      return undefined
    }
    if (!editable || !editable.image_load) {
      return undefined
    }
    handlePreviewClick(item)
  }

  return (
    <ImagePreviewArea
      align={align}
      alignx={alignx}
      aligny={aligny}
      id={previewAreaId}
      mr={mr}
      ml={ml}
      mt={mt}
      mb={mb}
      onClick={handleAreaClick}
      pr={pr}
      pl={pl}
      pt={pt}
      pb={pb}
      $height={height}
      $width={width}
    >
      {children}
    </ImagePreviewArea>
  )
}