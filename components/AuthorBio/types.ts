import { RadiusTokens, ColorTokens, FontTokens } from '@prensa_tokens'

export type SpacingType = number | string

/**
 * Prensa | AuthorBio
 * @description AuthorBio component
 */
export interface AuthorBioProps {
  bio: string;
  bioProps: BioProps;
  containerProps: ContainerProps;
  name: string;
  nameProps: NameProps;
  title: string;
  titleProps: TitleProps;
  hideFacebook: boolean;
  hideInstagram: boolean;
  hideLinkedin: boolean;
  hideTwitter: boolean;
}
export interface BioProps {
  color?: ColorTokens;
  element: string;
  fontFamily?: FontTokens;
  fontSize?: string;
  fontWeight?: number;
  mb?: SpacingType;
}
export interface NameProps {
  color?: ColorTokens;
  element: string;
  fontFamily?: FontTokens;
  fontSize?: string;
  fontWeight?: number;
  mb?: SpacingType;
}
export interface TitleProps {
  color?: ColorTokens;
  element: string;
  fontFamily?: FontTokens;
  fontSize?: string;
  fontWeight?: number;
  mb?: SpacingType;
}
export interface ContainerProps {
  children?: any;
  mx: SpacingType;
  my: SpacingType;
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