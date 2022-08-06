import { FontTokens, ColorTokens } from '@prensa_tokens'
import { ReactNode } from 'react'

export type SpacingType = number | string

export interface PageTitleProps {
  children?: ReactNode;
  containerProps?: ContainerProps;
  color?: ColorTokens | string;
  element?: string;
  fontSize?: string;
  fontWeight?: string | number;
  hasSelect?: boolean;
  lineHeight?: string;
  mb?: SpacingType;
  mbTitle?: SpacingType;
  mt?: SpacingType;
  px?: SpacingType;
  title?: string;
  titleProps?: TitleProps;
  transform?: string;
  items?: any;
  item?: any;
}

export type ContainerProps = {
  children?: ReactNode;
  mb?: SpacingType;
  mt?: SpacingType;
}

export type ContainerSelectProps = {
  children?: ReactNode;
}

export type ContentSelectProps = {
  children?: ReactNode;
}

export type TitleProps = {
  children?: ReactNode;
  color?: ColorTokens | string;
  element?: string;
  fontFamily?: FontTokens;
  fontSize?: string;
  fontWeight?: string | number;
  lineHeight?: string;
  mb?: SpacingType;
  transform?: string;
  title?: string;
}