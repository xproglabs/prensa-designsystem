import React from 'react'
import { 
  AuthorBioProps, 
  AuthorTitleProps, 
  ContainerCenterProps,
  ContainerProps,
  ContainerImageProps,
  ContainerMediasProps, 
  ContainerTitlesProps,
  ContentProps,
  ContentImageProps,
  ColumnTitleProps,
  ImageProps} from './types'
import Block from '../Block'
import Typography from '../Typography'
import {
  AUTHOR_BIO,
  AUTHOR_TITLE,
  CONTAINER,
  CONTAINER_CENTER,
  CONTAINER_IMAGE,
  CONTAINER_MEDIAS,
  CONTENT,
  CONTENT_IMAGE,
  COLUMN_TITLE,
  IMAGE,
  CONTAINER_TITLES
} from './consts'

export const AuthorBio = ({ 
  children, 
  color,
  fontSize,
  fontWeight,
}: AuthorBioProps ) => (
  <Typography 
    color={color}
    fontSize={fontSize}
    fontWeight={fontWeight}
    {...AUTHOR_BIO}>
    {children}
  </Typography>
)

export const AuthorTitle = ({ 
  children, 
  color,
  fontSize,
  fontWeight,
}: AuthorTitleProps ) => (
  <Typography 
    color={color}
    fontSize={fontSize}
    fontWeight={fontWeight}
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

export const ContainerCenter = ({ children }: ContainerCenterProps ) => (
  <Block {...CONTAINER_CENTER}>
    {children}
  </Block>
)

export const ContainerImage = ({ children }: ContainerImageProps) => (
  <Block {...CONTAINER_IMAGE}>
    {children}
  </Block>
)

export const ContainerMedias = ({ children }: ContainerMediasProps) => (
  <Block {...CONTAINER_MEDIAS}>
    {children}
  </Block>
)

export const ContainerTitles = ({ children }: ContainerTitlesProps) => (
  <Block {...CONTAINER_TITLES}>
    {children}
  </Block>
)

export const Content = ({ children }: ContentProps) => (
  <Block {...CONTENT}>
    {children}
  </Block>
)

export const ContentImage = ({ children }: ContentImageProps) => (
  <Block {...CONTENT_IMAGE}>
    {children}
  </Block>
)

export const ColumnTitle = ({ 
  children,
  color,
  fontSize,
  fontWeight,
  mb }: ColumnTitleProps) => (
  <Typography 
    color={color}
    fontSize={fontSize}
    fontWeight={fontWeight}
    mb={mb}
    {...COLUMN_TITLE}>
    {children}
  </Typography>
)