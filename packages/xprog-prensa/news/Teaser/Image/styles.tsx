import React from 'react'

import { Block } from '../../../primitives/Block'
import * as t from './types'

const ImageContainer: React.FC<t.ImageContainerProps> = ({
  css,
  children,
  customProps,
  defaultCss
}) => (
  <Block
    {...customProps}
    className={`TeaserImageContainer ${customProps?.className || ''}`}
    css={{ ...defaultCss, ...css }}
  >
    {children}
  </Block>
)

ImageContainer.defaultProps = {
  defaultCss: {
    align: ['column', 'left', 'top'],
    aspectRatio: 2 / 1,
    backgroundColor: '$basicBlackAlpha100',
    width: '100%'
  }
}

const ImageWrap: React.FC<t.ImageWrapProps> = ({
  css,
  customProps,
  defaultCss,
  image,
  wrapImage
}) => {
  const WrapImage = wrapImage
  return (
    <Block
      className={`TeaserImage ${customProps?.className || ''}`}
      css={{ ...defaultCss, ...css }}>
      {WrapImage ? <WrapImage {...image} /> : <img alt={image?.alt} src={image?.url} />}
    </Block>
  )
}

ImageWrap.defaultProps = {
  defaultCss: {
    align: ['column', 'center', 'top'],
    my: 0,
    width: '100%',
    img: {
      width: '100%'
    }
  }
}

export { ImageContainer, ImageWrap }
