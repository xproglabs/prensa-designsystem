import React from 'react'
import { ContainerProps } from './types'
import Block from '../../Block'
import Typography from '../../Typography'
import {
  AUTHOR_TITLE,
  CONTAINER,
  CONTENT,
  COLUMN_TITLE,
  IMAGE,
  TITLES
} from './consts'


export const Container = ({ 
  bgColor,
  children 
}: ContainerProps) => (
  <Block 
    bgColor={bgColor}
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
  fontWeight }) => (
  <Typography 
    color={color}
    fontSize={fontSize}
    fontWeight={fontWeight}
    {...COLUMN_TITLE}>
    {children}
  </Typography>
)

export const AuthorTitle = ({ 
  children, 
  color,
  fontSize,
  fontWeight
}) => (
  <Typography 
    fontSize={fontSize}
    fontWeight={fontWeight}
    color={color}
    {...AUTHOR_TITLE}>
    {children}
  </Typography>
)

export const Image = ({ children }) => (
  <Block 
    {...IMAGE}>
    {children}
  </Block>
)

export const Titles = ({ children }) => (
  <Block {...TITLES}>
    {children}
  </Block>
)
