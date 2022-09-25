import React from 'react'

import { Block } from '../../../primitives/Block'
import { Typography } from '../../../primitives/Typography'
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
    backgroundColor: '$basicBlackAlpha100'
  }
}

const ImageFile: React.FC<t.ImageFileProps> = ({
  css,
  children,
  customProps,
  defaultCss
}) => (
  <Typography
    as='p'
    className={`TeaserImage ${customProps?.className || ''}`}
    css={{ ...defaultCss, ...css }}
  >
    {children}
  </Typography>
)

ImageFile.defaultProps = {
  defaultCss: {
    align: ['column', 'center', 'top'],
    my: 0,
    height: '120px',
    width: '1em'
  }
}

export { ImageContainer, ImageFile }
