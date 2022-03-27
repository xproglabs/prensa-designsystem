import { ColorTokens, FontTokens } from '@prensa_tokens'

import { BlockProps } from '../NewBlock/props'

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
  className?: string;
  containerProps?: BlockProps;
  date?: string;
  dateTimeProps?: DateTimeProps;
  domain?: string;
  href?: string;
  image: ImageProps;
  imageWrapProps?: ImageWrapProps;
  name?: string;
  newsTitle?: string;
  newsTitleHref?: string;
  newsTitleProps?: NewsTitleProps;
  subtitleContainer?: any;
  title: string;
  titleProps?: TitleProps;
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