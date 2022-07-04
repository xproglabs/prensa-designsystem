import React from 'react'

import Block from '../Block'
import Typography from '../Typography'
import {
  BioProps,
  ContainerProps,
  ContentWrapProps,
  EmailProps,
  ImageContainerProps,
  ImageProps,
  NameProps,
  PositionProps,
  SocialMediasWrapProps,
  TextWrapProps,
  TitleProps,
} from './props'

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
export const Email = ({ children, ...otherProps }: EmailProps) => (
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
export const Position = ({ children, ...otherProps }: PositionProps) => (
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
    align='column'
    aligny='middle'
    alignx='center'
    width='100%'
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
    mb={mb} 
    mr={mr}
    width={['100%', 'unset']}
  >
    {children}
  </Block>
)

// Wraps
export const ContentWrap = ({ children }: ContentWrapProps) => (
  <Block
    align={['column', 'row']}
    aligny={['middle', 'middle']}
    px={2}
    py={2}
    width='calc(100% - 32px)'
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
    height={size}
    minWidth={size}
    width={size}
    {...otherProps}
  >
    {children}
  </Block>
)
export const SocialMediasWrap = ({ children }: SocialMediasWrapProps) => (
  <Block
    align={['row', 'row']}
    alignx={['center', 'left']}
    aligny={['top', 'top']}
    width='100%'
  >
    {children}
  </Block>
)
export const TextWrap = ({ children }: TextWrapProps) => (
  <Block align='column' width='100%'>
    {children}
  </Block>
)

