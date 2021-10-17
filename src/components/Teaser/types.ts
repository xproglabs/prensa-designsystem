import {
  EditAreaType,
  EditButtonsType
} from '../EditArea/types'
import { RelatedProps } from './RelatedTypes'
import { RenderDateTimeLayoutProps } from './RenderDateTimeTypes'

export type SpacingType = number | string | [number, number] | [string, string] | [number, string] | [string, number]

type BoxTypes = {
  align?: [string, string];
  alignx?: [string, string];
  aligny?: [string, string];
  background?: string;
  border?: string;
  height?: [string, string] | [string, string, string];
  pt?: SpacingType;
  pr?: SpacingType;
  pb?: SpacingType;
  pl?: SpacingType;
  mt?: SpacingType;
  mr?: SpacingType;
  mb?: SpacingType;
  ml?: SpacingType;
}
type BoxWrap = {
  content_overlap?: boolean;
  align?: [string, string];
  alignx?: [string, string];
  aligny?: [string, string];
  height?: [string, string];
  width?: [string, string];
  mt?: SpacingType;
  mr?: SpacingType;
  mb?: SpacingType;
  ml?: SpacingType;
}
type Image = {
  align?: [string, string];
  aligny?: [string, string];
  dimension?: [string, string];
  enabled?: boolean;
  height?: [string, string];
  layout?: [string, string];
  mt?: SpacingType;
  mr?: SpacingType;
  mb?: SpacingType;
  ml?: SpacingType;
  width?: [string, string];
  wrap_width?: [string, string];
}
type Related = {
  color?: string;
  font_size?: [string, string];
  enabled?: boolean;
  line_height?: [string, string];
  mb?: SpacingType;
}
type Subject = {
  bg_color?: string;
  color?: string;
  enabled?: boolean;
  font_size?: [string, string];
  line_height?: [string, string];
  mb?: SpacingType;
}
type Subtitle = {
  color?: string;
  font_size?: [string, string];
  enabled?: boolean;
  line_height?: [string, string];
}
export type Title = {
  color?: string;
  element?: string;
  enabled?: boolean;
  font_family?: string;
  font_size?: [string, string];
  line_height?: [string, string];
  mb?: SpacingType;
}
export type LayoutProps = {
  box?: BoxTypes;
  box_wrap?: BoxWrap;
  date_time?: RenderDateTimeLayoutProps;
  image?: Image;
  image_circle?: boolean;
  related?: Related;
  section?: Object;
  subject?: Subject;
  subtitle?: Subtitle;
  title?: Title;
}
export type TeaserProps = {
  color?: string;
  domain?: string;
  /**
   * @description expects a boolean with editable option
   */
  editable?: EditAreaType;
  edit_buttons?: EditButtonsType;
  /**
   * @description expects an object with teaser data
   */
  item: any;
  /**
   * @description expects an object with layout configuration for teaser
   */
  layout?: LayoutProps;
  /**
   * @description expects an object with layout configuration for related news
   */
  related?: RelatedProps;
  /**
   * @description expects a object of states to cover the editable fields
   */
  states?: any;
}
