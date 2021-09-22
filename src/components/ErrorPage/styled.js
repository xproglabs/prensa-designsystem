import React from 'react'

import Block from '../Block'
import Button from '../Button'
import Typography from '../Typography'
import {
  BUTTON_GO_BACK, 
  CONTAINER_ERROR,
  CONTENT_ERROR,
  MESSAGE, 
  PAGE_TITLE } from './consts'

export const ButtonGoBack = ({ buttonAction, children, color }) =>
  <Button
    {...BUTTON_GO_BACK}
    color={color}
    on={buttonAction}>
    {children}
  </Button>

export const ContainerError = ({ children }) =>
  <Block
    {...CONTAINER_ERROR}>
    {children}
  </Block>

export const ContentError = ({ children }) =>
  <Block
    {...CONTENT_ERROR}>
    {children}
  </Block>

export const Message = ({ text  }) =>
  <Typography
    dangerouslySetInnerHTML={text}
    {...MESSAGE}>
  </Typography>

export const PageTitle = ({ color, text }) =>
  <Typography
    color={color}
    dangerouslySetInnerHTML={text}
    {...PAGE_TITLE}>
  </Typography>
