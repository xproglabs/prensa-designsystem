import { Typography } from 'prensa'
import React from 'react'
import styled from 'styled-components'

import Block from '../Block'
import { BlockProps } from '../Block/props'
import {
  AuthorNameProps,
  DateTimeProps,
  ImageWrapProps,
  TitleProps,
  NewsTitleProps
} from './types'

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

export const Container = ({ children, ...otherProps }: BlockProps) => (
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
    width='calc(100% - 32px - 2px)'
    {...otherProps}
  >
    {children}
  </Block>
)

export const Content = ({ children, className, ...otherProps }: BlockProps) => (
  <Block
    align='row'
    aligny='middle'
    className={className}
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
    custom='cursor: pointer;'
    element='label'
    fontSize='16px'
    fontWeight={700}
    mb={0.5}
    width='100%'
    {...otherProps}
  >
    {children}
  </Typography>
)

export const TitleWrapper = ({ children, ...otherProps }) => (
  <Block
    align='column'
    aligny='top'
    width='calc(100% - 48px - 16px)'
    {...otherProps}
  >
    {children}
  </Block>
)

export const ResponsiveWrap = styled.div`
  width: 100%;
`