import React from 'react'
import { ContainerProps, ColumnTitleProps, NewsTitleProps } from './types'
import Block from '../Block'
import Typography from '../Typography'
import {
  NEWS_TITLE,
  CONTAINER,
  CONTENT,
  CONTENT_IMAGE,
  COLUMN_TITLE,
  IMAGE,
  CONTAINER_TITLES
} from './consts'

export const NewsTitle = ({ 
  children, 
  color,
  fontSize,
  fontWeight,
  mb
}: NewsTitleProps ) => (
  <Typography 
  color={color}
    fontSize={fontSize}
    fontWeight={fontWeight}
    mb={mb[0]}
    lg={{
      mb:mb[1],
    }}
    {...NEWS_TITLE}>
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

export const ContentImage = ({ children }) => (
  <Block {...CONTENT_IMAGE}>
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
