import { Block, Typography } from 'prensa'
import React from 'react'

import {
  BioProps,
  ContainerProps,
  ContentWrapProps,
  ImageContainerProps,
  ImageWrapProps,
  NameProps,
  SocialMediasWrapProps,
  TextWrapProps,
  TitleProps,
} from './types'

export const Bio = ({ children, ...otherProps }: BioProps) => (
  <Typography
    element='span'
    mb={2}
    textAlign='center'
    width='100%'
    lg={{ textAlign: 'left' }}
    {...otherProps}
  >
    {children}
  </Typography>
)
export const Name = ({ children, ...otherProps }: NameProps) => (
  <Typography
    element='span'
    mb={2}
    textAlign='center'
    width='100%'
    lg={{ textAlign: 'left' }}
    {...otherProps}
  >
    {children}
  </Typography>
)
export const Title = ({ children, ...otherProps }: TitleProps) => (
  <Typography
    element='span'
    textAlign='center'
    width='100%'
    lg={{ textAlign: 'left' }}
    {...otherProps}
  >
    {children}
  </Typography>
)

// Containers
export const Container = ({ children, ...otherProps }: ContainerProps) => (
  <Block
    aligny='middle'
    alignx='center'
    mx={2}
    width='calc(100% - 32px)'
    {...otherProps}
  >
    {children}
  </Block>
)
export const ImageContainer = ({ children }: ImageContainerProps) => (
  <Block alignx='center' width='100%' lg={{ width: 'unset' }}>
    {children}
  </Block>
)

// Wraps
export const ContentWrap = ({ children }: ContentWrapProps) => (
  <Block
    align='column'
    aligny='middle'
    px={2}
    py={2}
    width='calc(100% - 32px)'
    lg={{ align: 'row' }}
  >
    {children}
  </Block>
)
export const ImageWrap = ({ children }: ImageWrapProps) => (
  <Block height='80px' mb={2} width='80px' lg={{ height: '104px', mr: 2, width: '104px' }}>
    {children}
  </Block>
)
export const SocialMediasWrap = ({ children }: SocialMediasWrapProps) => (
  <Block
    align='row'
    alignx='center'
    width='100%'
    lg={{ custom: 'justify-content: flex-start' }}
  >
    {children}
  </Block>
)
export const TextWrap = ({ children }: TextWrapProps) => (
  <Block align='column' width='100%'>
    {children}
  </Block>
)

