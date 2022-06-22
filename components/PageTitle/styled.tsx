import { Typography } from 'prensa'
import React from 'react'

import Block from '../NewBlock'
import {
  ContainerProps,
  ContainerSelectProps,
  ContentSelectProps,
  TitleProps
} from './types'

export const Container = ({ children, ...otherProps }: ContainerProps) => (
  <Block
    align='column'
    alignx='center'
    aligny='middle'
    px={2}
    width='calc(100% - 32px)'
    {...otherProps}
  >
    {children}
  </Block>
)

export const ContainerSelect = ({ children }: ContainerSelectProps) => (
  <Block
    maxWidth='1280px'
    width='100%'
    alignx='left'
  >
    {children}
  </Block>
)

export const ContentSelect = ({ children }: ContentSelectProps) => (
  <Block
    custom='select { border-color: #D7D7D7; width: 100%; height: 40px; }'
    width='100%'
    lg={{ width: '396px' }}
  >
    {children}
  </Block>
)

export const Title = ({ children, ...otherProps }: TitleProps) => (
  <Typography
    custom='max-width: 1280px'
    width='100%'
    {...otherProps}
  >
    {children}
  </Typography>
)