import React from 'react'

import Block from '../../Block'
import {
  CONTAINER,
  CONTENT,
} from './consts'

export const Container = ({ children }) => (
  <Block {...CONTAINER}>
    {children}
  </Block>
)

export const Content = ({ children }) => (
  <Block {...CONTENT}>
    {children}
  </Block>
)
