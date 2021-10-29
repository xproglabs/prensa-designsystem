import React from 'react'
import { ContainerProps, AuthorTitleProps, ColumnTitleProps } from './types'
import Block from '../Block'
import Typography from '../Typography'
import {
  AUTHOR_TITLE,
  CONTAINER,
  CONTENT,
  COLUMN_TITLE,
  IMAGE,
  CONTAINER_TITLES
} from './consts'

export const AuthorTitle = ({ 
  children, 
  color,
  fontSize,
  fontWeight
}: AuthorTitleProps ) => (
  <Typography 
    fontSize={fontSize}
    fontWeight={fontWeight}
    color={color}
    {...AUTHOR_TITLE}>
    {children}
  </Typography>
)

export const Container = ({ 
  b,
  bgColor,
  borderColor,
  children 
}: ContainerProps) => (
  <Block 
    b={b}
    bgColor={bgColor}
    borderColor={borderColor}
    {...CONTAINER}>
    {children}
  </Block>
)

export const Content = ({ children }) => (
  <Block {...CONTENT}>
    {children}
  </Block>
)

export const ColumnTitle = ({ 
  children,
  color,
  fontSize,
  fontWeight }: ColumnTitleProps) => (
  <Typography 
    color={color}
    fontSize={fontSize}
    fontWeight={fontWeight}
    {...COLUMN_TITLE}>
    {children}
  </Typography>
)

export const Image = ({ children, radius }) => (
  <Block 
    radius={radius}
    {...IMAGE}>
    {children}
  </Block>
)

export const ContainerTitles = ({ children }) => (
  <Block {...CONTAINER_TITLES}>
    {children}
  </Block>
)
