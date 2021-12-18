import { RadiusTokens, ColorTokens, FontTokens } from '@prensa_tokens'

export type SpacingType = number | string

export type AuthorNameProps = {
  children?: any;
  color?: ColorTokens;
  fontFamily?: FontTokens;
  fontSize?: string;
  fontWeight?: string;
  mt?: SpacingType;
  mr?: SpacingType;
  mb?: SpacingType;
  ml?: SpacingType;
}
export interface AuthorProfileProps {
  amp?: boolean;
  authorNameProps?: AuthorNameProps;
  containerProps?: ContainerProps;
  date?: string;
  dateTimeProps?: DateTimeProps;
  href?: string;
  image: ImageProps;
  imageWrapProps?: ImageWrapProps;
  name?: string;
  newsTitle?: string;
  newsTitleHref?: string;
  newsTitleProps?: NewsTitleProps;
  title: string;
  titleProps?: TitleProps;
}

export type ContainerProps = {
  align?: string;
  alignx?: string;
  aligny?: string;
  background?: string;
  bt?: string;
  br?: string;
  bb?: string;
  bl?: string;
  b?: string;
  borderColor?: ColorTokens;
  borderStyle?: string;
  children?: any;
  height?: string;
  pt?: SpacingType;
  pr?: SpacingType;
  pb?: SpacingType;
  pl?: SpacingType;
  mt?: SpacingType;
  mr?: SpacingType;
  mb?: SpacingType;
  ml?: SpacingType;
  radius?: RadiusTokens;
  width?: string;
}
export type ContentProps = {
  align?: string;
  alignx?: string;
  aligny?: string;
  children: any;
  px?: SpacingType;
  py?: SpacingType;
  pt?: SpacingType;
  pr?: SpacingType;
  pb?: SpacingType;
  pl?: SpacingType;
  width?: string;
}

export type DateTimeProps = {
  children?: any;
  color?: ColorTokens;
  fontFamily?: FontTokens;
  fontSize?: string;
  fontWeight?: string;
  mt?: SpacingType;
  mr?: SpacingType;
  mb?: SpacingType;
  ml?: SpacingType;
}

export type ImageProps = {
  desktop_path: string;
  height?: [string, string];
  mobile_path: string;
  title: string;
  width?: [string, string];
}

export type ImageWrapProps = {
  children?: any;
  height?: string;
  minWidth?: string;
  mr?: SpacingType;
  width?: string;
}

export type NewsTitleProps = {
  children?: any;
  color?: ColorTokens;
  fontFamily?: FontTokens;
  fontSize?: string;
  fontWeight?: string;
  mt?: SpacingType;
  mr?: SpacingType;
  mb?: SpacingType;
  ml?: SpacingType;
}

export type TitleProps = {
  children?: any;
  color?: ColorTokens;
  fontFamily?: FontTokens;
  fontSize?: string;
  fontWeight?: string;
  mt?: SpacingType;
  mr?: SpacingType;
  mb?: SpacingType;
  ml?: SpacingType;
}