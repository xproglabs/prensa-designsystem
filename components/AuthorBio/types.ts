import { RadiusTokens, ColorTokens, FontTokens } from '@prensa_tokens'
import { ReactNode } from 'react'

export type SpacingType = number | string
export type ResponsiveSpacingType = Array<string | number>

/**
 * Prensa | AuthorBio
 * @description AuthorBio component
 */
export interface AuthorBioProps {
  amp: boolean;
  bio?: string;
  bioProps?: BioProps;
  containerProps?: ContainerProps;
  href?: string;
  imagePath: string;
  imageProps?: ImageProps;
  name?: string;
  nameProps?: NameProps;
  title?: string;
  titleProps?: TitleProps;
  facebookUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
}

export type BioProps = {
  children?: ReactNode;
  color?: ColorTokens;
  element?: string;
  fontFamily?: FontTokens;
  fontSize?: string;
  fontWeight?: number;
  mb?: SpacingType;
}
export type NameProps = {
  children?: ReactNode;
  color?: ColorTokens;
  element?: string;
  fontFamily?: FontTokens;
  fontSize?: string;
  fontWeight?: number;
  mb?: SpacingType;
}
export type TitleProps = {
  children?: ReactNode;
  color?: ColorTokens;
  element?: string;
  fontFamily?: FontTokens;
  fontSize?: string;
  fontWeight?: number;
  mb?: SpacingType;
}

// Containers
export type ContainerProps = {
  children?: ReactNode;
  bgColor?: ColorTokens;
  mx?: SpacingType;
  my?: SpacingType;
  pt?: SpacingType;
  pr?: SpacingType;
  pb?: SpacingType;
  pl?: SpacingType;
  mt?: SpacingType;
  mr?: SpacingType;
  mb?: SpacingType;
  ml?: SpacingType;
  bt?: string;
  br?: string;
  bb?: string;
  bl?: string;
  b?: string;
  borderColor?: ColorTokens;
  borderStyle?: string;
  radius?: RadiusTokens;
  width?: string;
}
export type ImageContainerProps = {
  children?: ReactNode;
  mb?: ResponsiveSpacingType;
  mr?: ResponsiveSpacingType;
}

// Wraps
export type ContentWrapProps = {
  children?: ReactNode;
}
export type ImageProps = {
  children?: ReactNode;  
  size?: Array<string>;
}
export type SocialMediasWrapProps = {
  children?: ReactNode;
}
export type TextWrapProps = {
  children?: ReactNode;
}

export type IconProps = {
  color?: ColorTokens;
  href: string;
}