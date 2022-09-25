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

const ImageFile: React.FC<t.ImageFileProps> = ({
  css,
  children,
  customProps,
  defaultCss
}) => (
  <Block
    className={`TeaserImage ${customProps?.className || ''}`}
    css={{ ...defaultCss, ...css }}
  >
    {children}
  </Block>
)

ImageFile.defaultProps = {
  defaultCss: {
    align: ['column', 'center', 'top'],
    my: 0,
    width: '100%'
  }
}

export { ImageContainer, ImageFile }
