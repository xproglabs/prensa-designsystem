import React from 'react'
import {
  AuthorBioProps,
  AuthorTitleProps,
  ContainerProps,
  ContainerImageProps,
  ContainerMediasProps,
  ContainerTitlesProps,
  ContentProps,
  ContentImageProps,
  ColumnTitleProps,
  ImageProps
} from './types'
import Block from '../Block'
import Typography from '../Typography'

export const AuthorBio = ({ children, ...otherProps }: AuthorBioProps) => (
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

export const AuthorTitle = ({ children, ...otherProps }: AuthorTitleProps) => (
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

export const ContainerMedias = ({ children }: ContainerMediasProps) => (
  <Block
    align='row'
    alignx='center'
    width='100%'
    lg={{ custom: `justify-content: flex-start` }}>
    {children}
  </Block>
)

export const ContentWrap = ({ children }: ContentProps) => (
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

export const ImageContainer = ({ children }: ContainerImageProps) => (
  <Block alignx='center' width='100%' lg={{ width: 'unset' }}>
    {children}
  </Block>
)

export const ImageWrap = ({ children }: ContentImageProps) => (
  <Block height='80px' mb={2} width='80px' lg={{ height: '104px', mr: 2, width: '104px' }}>
    {children}
  </Block>
)

export const TextWrap = ({ children }: ContainerTitlesProps) => (
  <Block align='column' width='100%'>
    {children}
  </Block>
)

export const Title = ({ children, ...otherProps }: ColumnTitleProps) => (
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