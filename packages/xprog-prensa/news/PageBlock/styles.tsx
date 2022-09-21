import React from 'react'

import { Block } from '../../index'
import * as t from './types'

const Container: React.FC<t.Container> = (props) => (
  <Block
    className='PageBlock'
    css={{
      ...props.defaultCss,
      ...props.customCss
    }}
  >
    {props.children}
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