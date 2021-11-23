import React from 'react'

import Block from '../Block'
import Typography from '../Typography'
import { AuthorNameProps, ContainerProps, ContentProps, ImageWrapProps, TitleProps, NewsTitleProps } from './types'

export const AuthorName = ({ children, ...otherProps }: AuthorNameProps) => (
  <Typography
    color='neutral5'
    element='span'
    fontSize='14px'
    fontWeight={400}
    width='100%'
    {...otherProps}
  >
    {children}
  </Typography>
)

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

export const DateTime = ({ children, ...otherProps }: DateTimeProps) => (
  <Typography
    color='neutral3'
    element='span'
    fontSize='12px'
    fontWeight={400}
    width='100%'
    {...otherProps}
  >
    {children}
  </Typography>
)

export const Image = ({ children, ...otherProps }) => (
  <Block
    bgColor='neutral2'
    height='48px'
    width='48px'
    {...otherProps}
  >
    {children}
  </Block>
)

export const ImageWrap = ({ children, ...otherProps }: ImageWrapProps) => (
  <Block
    height='48px'
    width='48px'
    minWidth='48px'
    mr={2}
    {...otherProps}
  >
    {children}
  </Block>
)

export const NewsTitle = ({ children, ...otherProps }: NewsTitleProps) => (
  <Typography
    color='neutral2'
    element='label'
    fontSize='20px'
    fontWeight={700}
    lineHeight='110%'
    mb={2}
    width='100%'
    {...otherProps}
  >
    {children}
  </Typography>
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

export const TitleWrapper = ({ children, ...otherProps }) => (
  <Block
    align='column'
    width='100%'
    {...otherProps}
  >
    {children}
  </Block>
)
