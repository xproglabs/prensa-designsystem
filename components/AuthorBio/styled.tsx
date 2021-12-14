import { Block, Link, Typography } from 'prensa'
import React from 'react'

import {
  BioProps,
  ContainerProps,
  ContentWrapProps,
  ImageContainerProps,
  ImageProps,
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
    width='calc(100% - 2px)'
    {...otherProps}
  >
    {children}
  </Block>
)
export const ImageContainer = ({
  children,
  mb = [2, '0px'],
  mr = [undefined, 2]
}: ImageContainerProps) => (
  <Block
    alignx='center'
    mb={mb[0]} 
    mr={mr[0]}
    width='100%'
    lg={{
      width: 'unset',
      mb: mb[1],
      mr: mr[1],
    }}
  >
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
export const ImageWrap = ({ 
  children,
  size = ['80px', '104px'],
  ...otherProps
}: ImageProps) => (
  <Block 
    height={size[0]}
    minWidth={size[0]}
    width={size[0]}
    lg={{
      height: size[1],
      minWidth: size[1],
      width: size[1]
    }}
    {...otherProps}
  >
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

