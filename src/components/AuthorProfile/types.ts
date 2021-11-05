import { RadiusTokens } from '@prensa_tokens'

export type SpacingType = number | string

export type ContainerProps = {
  align?: string;
  alignx?: string;
  aligny?: string;
  background?: string;
  children: any;
  height?: string;
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
  borderColor?: string;
  borderStyle?: string;
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
export type ImageProps = {
  mobile_path: string;
  desktop_path: string;
  height: [string, string];
  title: string;
  width: [string, string];
}
export type TitleProps = {
  children: any;
  color: string;
  fontFamily?: string;
  fontSize: string;
  fontWeight: string;
  mb: SpacingType;
}
export type TitleAuthorProps = {
  children: any;
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  mb?: SpacingType;
}
export interface AuthorProfileProps {
  amp: boolean;
  authorTitle: string;
  children: any;
  columnTitle: string;
  containerProps?: ContainerProps;
  image: ImageProps;
  titleProps?: TitleProps;
  titleAuthorProps?: TitleAuthorProps;
}