import { RadiusTokens, ColorTokens } from '@prensa_tokens'
import { ReactNode } from 'react'

export type SpacingType = number | string
export type ResponsiveSpacingType = Array<string | number>

export interface NoticeProps {
  buttonProps?: any;
  containerProps?: ContainerProps;
  children?: ReactNode;
  subject?: string;
  subjectProps?: any;
  subtitle?: string;
  subtitleProps?: any;
  title?: string;
  titleProps?: any;
}

export interface ContainerProps {
  b?: SpacingType;
  bt?: SpacingType;
  br?: SpacingType;
  bb?: SpacingType;
  bl?: SpacingType;
  bgColor?: ColorTokens;
  borderColor?: ColorTokens;
  borderStyle?: string;
  children?: ReactNode;
  mx?: SpacingType;
  my?: SpacingType;
  mt?: SpacingType;
  mb?: SpacingType;
  ml?: SpacingType;
  mr?: SpacingType;
  pt?: SpacingType;
  pb?: SpacingType;
  pl?: SpacingType;
  pr?: SpacingType;
  radius?: RadiusTokens;
  width?: string;
}

export interface ButtonFileProps {
  children?: ReactNode;
}

export interface ButtonWrapProps {
  children?: ReactNode;
}

export interface SubjectProps {
  children?: ReactNode;
}

export interface SubtitleProps {
  children?: ReactNode;
}

export interface TextWrapProps {
  children?: ReactNode;
}

export interface TitleProps {
  children?: ReactNode;
}