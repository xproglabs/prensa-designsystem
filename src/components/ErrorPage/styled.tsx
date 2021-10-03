import React from 'react'
import { PageTitleProps, ButtonProps, MessageProps } from './types'
import Block from '../Block'
import Button from '../Button'
import Typography from '../Typography'
import {
  BUTTON_GO_BACK,
  CONTAINER_ERROR,
  CONTENT_ERROR,
  MESSAGE,
  PAGE_TITLE
} from './consts'

export const ButtonGoBack = ({
  buttonAction,
  children,
  color
}: ButtonProps) => (
  <Button
    {...BUTTON_GO_BACK}
    color={color}
    on={buttonAction}
  >
    {children}
  </Button>
)

export const ContainerError = ({ children }) => (
  <Block {...CONTAINER_ERROR}>
    {children}
  </Block>
)

export const ContentError = ({ children }) => (
  <Block {...CONTENT_ERROR}>
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
