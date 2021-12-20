import { ColorTokens, RadiusTokens } from '@prensa_tokens'

import { EditAreaType, EditButtonsType } from '../EditArea/types'
import { RelatedItemProps } from './RelatedTypes'
import { RelatedProps } from './RelatedTypes'
import { RenderDateTimeLayoutProps } from './RenderDateTimeTypes'
import { NumberLayout } from './RenderNumber'
import { SubjectLayout } from './RenderSubject'

export type SpacingType = number | string | [number, number] | [string, string] | [number, string] | [string, number]

type BoxTypes = {
  align?: [string, string];
  alignx?: [string, string];
  aligny?: [string, string];
  background?: string;
  height?: [string, string] | [string, string, string];
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
  /**
   * @description Enable fallback image behaviour using a boolean
   * Requires fallback_image_url prop defined in PageBlock component
   */
  fallback_image?: boolean;
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
  font_weight?: number;
  enabled?: boolean;
  icon?: RelatedItemProps['icon'];
  line_height?: [string, string];
  mb?: SpacingType;
  mr?: SpacingType;
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
  font_weight?: number | number;
  line_height?: [string, string];
  mb?: SpacingType;
}
export type LayoutProps = {
  box?: BoxTypes;
  box_wrap?: BoxWrap;
  date_time?: RenderDateTimeLayoutProps;
  image?: Image;
  image_circle?: boolean;
  number?: NumberLayout;
  opacity_mask?: boolean;
  related?: Related;
  section?: Object;
  subject?: SubjectLayout;
  subtitle?: Subtitle;
  title?: Title;
}
export type TeaserProps = {
  /**
   * @description define if uses an amp image or html image
   */
  amp?: boolean;
  color?: ColorTokens | string;
  domain?: string;
  /**
   * @description expects a boolean with editable option
   */
  editable?: EditAreaType;
  edit_buttons?: EditButtonsType;
  eventTracking?: any;
  fallback_image_url?: string;
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
  number: number;
  related?: RelatedProps;
  /**
   * @description expects a object of states to cover the editable fields
   */
  states?: any;
  slot_position?: number;
}
