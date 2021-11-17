import { RadiusTokens, ColorTokens, FontTokens } from '@prensa_tokens'

export type SpacingType = number | string
export interface AuthorBioProps {
  children?: any;
  color?: ColorTokens;
  element: string;
  fontFamily?: FontTokens;
  fontSize?: string;
  fontWeight?: number;
  mb?: SpacingType;
}

export interface AuthorTitleProps {
  children?: any;
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

// export interface ContainerProps {
//   authorBio?: string;
//   authorBioProps?: AuthorBioProps
//   authorTitle?: string;
//   authorTitleProps?: AuthorTitleProps;
//   b?: string;
//   bgColor?: string;
//   borderColor?: string;
//   children?: any;
//   color?: string;
//   columnTitle?: string;
//   columnTitleProps?: ColumnTitleProps;
//   containerProps?: ContainerProps;
//   fontSize?: string;
//   fontWeight?: number;
//   hasFacebook?: boolean;
//   hasInstagram?: boolean;
//   hasLinkedin?: boolean;
//   hasTwitter?: boolean;
//   mb?: string | number;
//   radius?: string;
// }

export interface ContainerImageProps {
  children?: any;
}

export interface ContainerMediasProps {
  children?: any;
}

export interface ContainerTitlesProps {
  children?: any;
}

export interface ContentProps {
  children?: any;
}

export interface ContentImageProps {
  children?: any;
}

export interface ColumnTitleProps {
  children?: any;
  color?: string;
  fontSize?: string;
  fontWeight?: number;
  mb?: string | number;
}

export interface ImageProps {
  children?: any;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  mb?: string | number;
}