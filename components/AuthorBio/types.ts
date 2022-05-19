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
  email?: string;
  emailProps?: string;
  href?: string;
  imagePath: string;
  imageProps?: ImageProps;
  minHeight?: string;
  name?: string;
  nameProps?: NameProps;
  position?: string;
  positionProps?: PositionProps;
  title?: string;
  titleProps?: TitleProps;
  emailUrl?: string;
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
export type EmailProps = {
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
export type PositionProps = {
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
  bt?: SpacingType;
  br?: SpacingType;
  bb?: SpacingType;
  bl?: SpacingType;
  b?: SpacingType;
  bgColor?: ColorTokens;
  borderColor?: ColorTokens;
  borderStyle?: string;
  minHeight?: string;
  maxWidth?: string;
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