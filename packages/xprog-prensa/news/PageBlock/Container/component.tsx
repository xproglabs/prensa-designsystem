import React from 'react'

import { Block } from '../../../primitives/Block'
import { ContainerProps } from './types'

export const PageBlockContainer: React.FC<ContainerProps> = ({
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
