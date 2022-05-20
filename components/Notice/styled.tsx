import { Block, Button, Typography } from 'prensa'
import React from 'react'

import {
  ContainerProps,
  NoticeProps,
  
} from './types'

export const ButtonPdf = ({ children, ...otherProps  }: NoticeProps) => (
  <Button
    size='40px'
    lg={{ size: '32px' }}
    {...otherProps}
  >
    {children}
  </Button>
)

export const ButtonWrap = ({ children }: NoticeProps) => (
  <Block
    align='column'
    alignx='left'
    width='100%'
    lg={{ custom: 'align-items: end', width: '20%' }}
  >
    {children}
  </Block>
)

export const Container = ({ children, ...otherProps }: ContainerProps) => (
  <Block
    aligny='middle'
    alignx='center'
    width='100%'
    {...otherProps}
  >
    {children}
  </Block>
)

export const ContentWrap = ({ children }: NoticeProps) => (
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

export const TextWrap = ({ children }: NoticeProps) => (
  <Block 
    align='column' 
    width='100%'
    lg={{ width: '80%' }}
  >
    {children}
  </Block>
)

export const Subject = ({ children, ...otherProps }: NoticeProps) => (
  <Typography
    element='span'
    textAlign='left'
    width='100%'
    {...otherProps}
  >
    {children}
  </Typography>
)

export const Subtitle = ({ children, ...otherProps }: NoticeProps) => (
  <Typography
    element='span'
    textAlign='left'
    width='100%'
    {...otherProps}
  >
    {children}
  </Typography>
)

export const Title = ({ children, ...otherProps }: NoticeProps) => (
  <Typography
    element='span'
    textAlign='left'
    width='100%'
    {...otherProps}
  >
    {children}
  </Typography>
)