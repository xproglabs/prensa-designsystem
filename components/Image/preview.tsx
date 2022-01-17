import { align, height } from 'prensa/styled-system'
import React from 'react'
import styled from 'styled-components'

const ImagePreviewArea = styled.a`
  ${align};
  ${height};
  color: inherit;
  cursor: pointer;
  text-decoration: none;
  width: 100%;
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
  restrictedClickArea,
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
      onClick={handleAreaClick}
      $height={height}
    >
      {children}
    </ImagePreviewArea>
  )
}