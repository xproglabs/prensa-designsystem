import React from 'react'
import styled from 'styled-components'

const ImagePreviewArea = styled.a`
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
  children,
  editable,
  image_props,
  item
}: any) => {

  const handlePreviewClick = item => {
    editable.image_load(editable, item, image_props)
  }

  const handleAreaClick = event => {
    if (!editable || !editable.image_load || event.target.id !== 'preview-area') {
      return undefined
    }
    handlePreviewClick(item)
  }

  return (
    <ImagePreviewArea 
      id='preview-area'
      onClick={handleAreaClick}
    >
      {children}
    </ImagePreviewArea>
  )
}