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

export interface BioProps {
  children?: ReactNode;
  color?: ColorTokens;
  element?: string;
  fontFamily?: FontTokens;
  fontSize?: string;
  fontWeight?: number;
  mb?: SpacingType;
}
export interface EmailProps {
  children?: ReactNode;
  color?: ColorTokens;
  element?: string;
  fontFamily?: FontTokens;
  fontSize?: string;
  fontWeight?: number;
  mb?: SpacingType;
}
export interface NameProps {
  children?: ReactNode;
  color?: ColorTokens;
  element?: string;
  fontFamily?: FontTokens;
  fontSize?: string;
  fontWeight?: number;
  mb?: SpacingType;
}
export interface PositionProps {
  children?: ReactNode;
  color?: ColorTokens;
  element?: string;
  fontFamily?: FontTokens;
  fontSize?: string;
  fontWeight?: number;
  mb?: SpacingType;
}
export interface TitleProps {
  children?: ReactNode;
  color?: ColorTokens;
  element?: string;
  fontFamily?: FontTokens;
  fontSize?: string;
  fontWeight?: number;
  mb?: SpacingType;
}

// Containers
export interface ContainerProps {
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
export interface ImageContainerProps {
  children?: ReactNode;
  mb?: ResponsiveSpacingType;
  mr?: ResponsiveSpacingType;
}

// Wraps
export interface ContentWrapProps {
  children?: ReactNode;
}
export interface ImageProps {
  children?: ReactNode;  
  size?: Array<string>;
}
export interface SocialMediasWrapProps {
  children?: ReactNode;
}
export interface TextWrapProps {
  children?: ReactNode;
}

export interface IconProps {
  color?: ColorTokens;
  href: string;
}