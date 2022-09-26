import React from 'react'

import { Block } from '../../../primitives/Block'
import { PageBlockContainerProps } from './types'

export const PageBlockContainer: React.FC<PageBlockContainerProps> = ({
  css,
  children,
  customProps,
  defaultCss
}) => (
  <Block
    {...customProps}
    className={`PageBlock ${customProps?.className || ''}`}
    css={{ ...defaultCss, ...css }}
  >
    {children}
  </Block>
)

PageBlockContainer.defaultProps = {
  defaultCss: {
    align: ['column', 'center', 'middle'],
    mb: '$4',
    width: '100%'
  }
}
