import { SpacingType } from '../Teaser/types'

type AreaLayout = {
  pt?: SpacingType;
  pr?: SpacingType;
  pb?: SpacingType;
  pl?: SpacingType;
  mt?: SpacingType;
  mr?: SpacingType;
  mb?: SpacingType;
  ml?: SpacingType;
}
/**
 * @description define section title layout props
 */
export interface SectionTitleLayout {
  area: AreaLayout;
  color?: string;
  element?: string;
  font_family?: string;
  font_size?: [string, string];
  line_height?: [string, string];
  icons?: Array<any>;
  transform?: string;
}
/**
 * @description define section component props
 */
export interface SectionTitleProps {
  color?: string;
  icon?: string;
  layout: SectionTitleLayout;
  title?: string;
  path?: string;
}
/**
 * @description define styled area link properties
 */
export interface StyledAreaProps {
  children: any;
  path: string;
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
export interface StyledTitleProps extends SectionTitleLayout {
  children: any;
  color: string;
}