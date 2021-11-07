import React from 'react'

import Block from '../Block'
import Typography from '../Typography'
import { ContainerProps, ContentProps, TitleProps, TitleAuthorProps, NewsTitleProps } from './types'

export const Container = ({ children, ...otherProps }: ContainerProps) => (
  <Block
    alignx='center'
    aligny='middle'
    b='1px'
    bgColor='white'
    borderColor='neutral9'
    height='max-content'
    px={2}
    py={2}
    radius='alternative'
    width='calc(100% - 32px)'
    {...otherProps}
  >
    {children}
  </Block>
)

export const Content = ({ children, ...otherProps }: ContentProps) => (
  <Block
    align='row'
    aligny='middle'
    width='100%'
    {...otherProps}
  >
    {children}
  </Block>
)

export const Image = ({ children, ...otherProps }) => (
  <Block
    bgColor='neutral2'
    height='40px'
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
    mr={2}
    {...otherProps}
  >
    {children}
  </Block>
)

export const Title = ({ children, ...otherProps }: TitleProps) => (
  <Typography
    color='neutral2'
    element='label'
    fontSize='16px'
    fontWeight={700}
    mb={1}
    width='100%'
    {...otherProps}
  >
    {children}
  </Typography>
)

export const NewsTitle = ({ children, ...otherProps }: NewsTitleProps) => (
  <Typography
    color='neutral2'
    element='label'
    fontSize='16px'
    fontWeight={700}
    mb={2}
    width='100%'
    {...otherProps}
  >
    {children}
  </Typography>
)

export const TitleAuthor = ({ children, ...otherProps }: TitleAuthorProps) => (
  <Typography
    color='neutral5'
    element='span'
    fontSize='14px'
    fontWeight={400}
    widht='100%'
    {...otherProps}
  >
    {children}
  </Typography>
)

export const TitleWrapper = ({ children, ...otherProps }) => (
  <Block
    align='column'
    width='100%'
    {...otherProps}
  >
    {children}
  </Block>
)
