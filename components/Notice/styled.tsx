import { Block, Button, Typography } from 'prensa'
import React from 'react'

import {
  ButtonWrapProps,
  ButtonFileProps,
  ContainerProps,
  SubjectProps,
  SubtitleProps,
  TextWrapProps,
  TitleProps
} from './props'

export const ButtonFile = ({ children, ...otherProps  }: ButtonFileProps) => (
  <Button
    size='40px'
    lg={{ size: '32px' }}
    {...otherProps}
  >
    {children}
  </Button>
)

export const ButtonWrap = ({ children }: ButtonWrapProps) => (
  <Block
    align='column'
    alignx='left'
    width='100%'
    lg={{ width: 'auto' }}
  >
    {children}
  </Block>
)

export const Container = ({ children, ...otherProps }: ContainerProps) => (
  <Block
    align='column'
    aligny='middle'
    alignx='center'
    px={2}
    py={2}
    custom='gap: 16px;'
    lg={{ align: 'row', custom: 'flex: none; order: 0; flex-grow: 0; gap: 40px;' }}
    {...otherProps}
  >
    {children}
  </Block>
)


export const TextWrap = ({ children }: TextWrapProps) => (
  <Block 
    align='column' 
    width='100%'
  >
    {children}
  </Block>
)

export const Subject = ({ children, ...otherProps }: SubjectProps) => (
  <Typography
    element='span'
    textAlign='left'
    width='100%'
    {...otherProps}
  >
    {children}
  </Typography>
)

export const Subtitle = ({ children, ...otherProps }: SubtitleProps) => (
  <Typography
    element='span'
    textAlign='left'
    width='100%'
    {...otherProps}
  >
    {children}
  </Typography>
)

export const Title = ({ children, ...otherProps }: TitleProps) => (
  <Typography
    element='span'
    textAlign='left'
    width='100%'
    {...otherProps}
  >
    {children}
  </Typography>
)