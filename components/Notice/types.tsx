import { RadiusTokens, ColorTokens } from '@prensa_tokens'
import { ReactNode } from 'react'

export type SpacingType = number | string
export type ResponsiveSpacingType = Array<string | number>

export type NoticeProps {
  buttonProps?: ButtonPdfProps;
  containerProps?: ContainerProps;
  children?: ReactNode;
  subject?: string;
  subjectProps?: SubjectProps;
  subtitle?: string;
  subtitleProps?: string;
  title?: string;
  titleProps?: TitleProps;
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