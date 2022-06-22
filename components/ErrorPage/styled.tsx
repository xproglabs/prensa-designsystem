import React from 'react'

import Button from '../Button'
import Block from '../NewBlock'
import Typography from '../Typography'
import {
  BUTTON_GO_BACK,
  CONTAINER_ERROR,
  CONTENT_ERROR,
  MESSAGE,
  PAGE_TITLE
} from './consts'
import { PageTitleProps, ButtonProps, MessageProps } from './types'

export const ButtonGoBack = ({
  buttonAction,
  children,
  color,
  path
}: ButtonProps) => (
  <Button
    {...BUTTON_GO_BACK}
    color={color}
    on={buttonAction}
    path={path}
    pr='0px'
    pl='0px'>
    {children}
  </Button>
)

export const ContainerError = ({ children }) => (
  <Block {...CONTAINER_ERROR}>
    {children}
  </Block>
)

export const ContentError = ({ alignx, children }) => (
  <Block {...CONTENT_ERROR}
    alignx={alignx}
  >
    {children}
  </Block>
)

export const Message = ({ children }: MessageProps) => (
  <Typography {...MESSAGE}>
    {children}
  </Typography>
)

export const PageTitle = ({
  color,
  children
}: PageTitleProps) => (
  <Typography
    {...PAGE_TITLE}
    color={color}
  >
    {children}
  </Typography>
)
