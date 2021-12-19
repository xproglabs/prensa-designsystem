// import { ImageProps } from 'components/Image/types'
// import { get } from 'lodash'
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
  item
}) => {
  const handlePreviewClick = (item) => {
    if (!editable || !editable.image_load) {
      return false
    }
    return editable.image_load(item)
  }
  return (
    <ImagePreviewArea onClick={() => handlePreviewClick(item)}>
      {children}
    </ImagePreviewArea>
  )
}