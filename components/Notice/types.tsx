import { RadiusTokens, ColorTokens } from '@prensa_tokens'
import { ReactNode } from 'react'

export type SpacingType = number | string
export type ResponsiveSpacingType = Array<string | number>

export type NoticeProps = {
  buttonProps?: string;
  containerProps?: ContainerProps;
  children?: ReactNode;
  subject?: string;
  subjectProps?: string;
  subtitle?: string;
  subtitleProps?: string;
  title?: string;
  titleProps?: string;
}

export type ContainerProps = {
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

export type ButtonFileProps = {
  children?: ReactNode;
}

export type ButtonWrapProps = {
  children?: ReactNode;
}

export type SubjectProps = {
  children?: ReactNode;
}

export type SubtitleProps = {
  children?: ReactNode;
}

export type TextWrapProps = {
  children?: ReactNode;
}

export type TitleProps = {
  children?: ReactNode;
}