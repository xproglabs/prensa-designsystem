import React from 'react'

import Block from '../Block'
import Typography from '../Typography'
import { ContainerProps, AuthorTitleProps, ColumnTitleProps } from './types'

export const Container = ({ children, ...otherProps }: ContainerProps) => (
  <Block
    alignx='center'
    aligny='middle'
    height='80px'
    px={2}
    width='calc(100% - 32px)'
    {...otherProps}
  >
    {children}
  </Block>
)

export const Content = ({ children, ...otherProps }) => (
  <Block
    align='row'
    aligny='middle'
    px={2}
    width='calc(100% - 32px)'
    {...otherProps}
  >
    {children}
  </Block>
)

export const Image = ({ children, ...otherProps }) => (
  <Block
    bgColor='neutral2'
    height='40px'
    mr={2}
    width='40px'
    minWidth='40px'
    {...otherProps}
  >
    {children}
  </Block>
)

export const ImageWrap = ({ children, ...otherProps }) => (
  <Block
    height='40px'
    width='40px'
    {...otherProps}
  >
    {children}
  </Block>
)

export const Title = ({ children, ...otherProps }: ColumnTitleProps) => (
  <Typography
    element='label'
    mb={1}
    width='100%'
    {...otherProps}
  >
    {children}
  </Typography>
)

export const TitleAuthor = ({ children, ...otherProps }: AuthorTitleProps) => (
  <Typography
    element='span'
    widht='100%'
    {...otherProps}
  >
    {children}
  </Typography>
)

export const TitleWrap = ({ children, ...otherProps }) => (
  <Block
    align='column'
    width='100%'
    {...otherProps}
  >
    {children}
  </Block>
)
