import React from 'react'

import { Block } from '../../index'
import * as t from './types'

const Container: React.FC<t.ContainerProps> = ({
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

Container.defaultProps = {
  defaultCss: {
    align: ['column', 'center', 'middle'],
    mb: '$4',
    width: '100%'
  }
}

export { Container }
