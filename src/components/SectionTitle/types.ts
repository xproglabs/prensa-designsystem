import { SpacingType } from '../Teaser/types'
import { IconProps } from '../Icon/types'
import { IconTokens } from '@prensa_tokens'

type AreaLayout = {
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
}
type LinkLayout = {
  hoverOpacity?: number;
}
type TextLayout = {
  color?: string;
  element?: string;
  font_family?: string;
  font_size?: [string, string];
  line_height?: [string, string];
  transform?: string;
}

/**
 * @description define section title layout props
 */
export interface SectionTitleLayout {
  area?: AreaLayout;
  link?: LinkLayout;
  icon?: IconProps;
  text?: TextLayout;
}

/**
 * @description define section component props
 */
export interface SectionTitleProps {
  color?: string;
  icon?: IconTokens;
  layout: SectionTitleLayout;
  title?: string;
  href?: string;
}

/**
 * @description define styled area box properties
 */
export interface StyledBoxProps {
  area: AreaLayout;
  children: any;
}

/**
 * @description define styled icon properties
 */
export interface StyledIconProps {
  icon: string;
}

/**
 * @description define styled title properties
 */
export interface StyledTitleProps extends TextLayout {
  children: any;
}