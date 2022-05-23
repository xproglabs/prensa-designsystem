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
    lg={{ custom: 'align-items: flex-start', width: 'auto' }}
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
    custom='gap: 16px'
    lg={{ align: 'row', custom: 'flex: none; order: 0; flex-grow: 0; gap: 40px' }}
    
    {...otherProps}
  >
    {children}
  </Block>
)


export const TextWrap = ({ children }: NoticeProps) => (
  <Block 
    align='column' 
    width='100%'
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