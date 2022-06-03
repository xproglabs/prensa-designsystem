import { ReactNode } from 'react'

export type SpacingType = number | string

export interface PageTitleProps {
  children?: ReactNode;
  color?: ColorTokens | string;
  element?: string;
  fontSize?: string;
  fontWeight?: string | number;
  lineHeight?: string;
  mb?: SpacingType;
  mbTitle?: SpacingType;
  mt?: SpacingType;
  px?: SpacingType;
  transform?: string;
}