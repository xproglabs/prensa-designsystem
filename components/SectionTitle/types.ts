import { ColorTokens, IconTokens } from '@prensa_tokens'
import { BorderStyleProps } from '@xprog/prensa-css-engine/props'
import { ReactElement } from 'react'

import { IconProps } from '../Icon/types'
import { SpacingType } from '../Teaser/types'

interface AreaLayout extends BorderStyleProps {
  b?: string;
  bt?: string;
  br?: string;
  bb?: string;
  bl?: string;
  borderColor?: ColorTokens;
  borderStyle?: string;
  pt?: SpacingType;
  pr?: SpacingType;
  pb?: SpacingType;
  pl?: SpacingType;
  mt?: SpacingType;
  mr?: SpacingType;
  mb?: SpacingType;
  ml?: SpacingType;
  width?: Array<string>;
}
interface LinkLayout {
  hoverOpacity?: number;
}
interface IconLayout extends IconProps {
  component?: ReactElement;
}
interface TextLayout {
  color?: ColorTokens;
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
  icon?: IconLayout;
  text?: TextLayout;
}

/**
 * @description define section component props
 */
export interface SectionTitleProps {
  color?: ColorTokens;
  href?: string;
  icon?: IconTokens;
  layout: SectionTitleLayout;
  title?: string;
  /**
   * WARNING: DEPRECATED use href instead
   */
  path?: string;
  theme: Object;
}

/**
 * @description define styled area box properties
 */
export interface StyledBoxProps {
  area: AreaLayout;
  children: any;
}

/**
 * @description define styled title properties
 */
export interface StyledTitleProps extends TextLayout {
  children: any;
}