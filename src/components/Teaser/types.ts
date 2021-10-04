import { RelatedProps } from './RelatedTypes'

export type SpacingType = number | string | [number, number] | [string, string] | [number, string] | [string, number]

type BoxTypes = {
  align?: [string, string];
  aligny?: [string, string];
  height?: [string, string] | [string, string, string];
  pb?: SpacingType;
  pt?: SpacingType;
  mb?: SpacingType;
}

type Image = {
  dimension?: [string, string];
  enabled?: boolean;
  align?: [string, string];
  aligny?: [string, string];
  height?: [string, string];
  width?: [string, string];
  mt?: SpacingType;
  mr?: SpacingType;
  mb?: SpacingType;
  ml?: SpacingType;
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

type Title = {
  color?: string;
  element?: string;
  enabled?: boolean;
  font_size?: [string, string];
  line_height?: [string, string];
  mb?: SpacingType;
}

type WrapContent = {
  content_overlap?: boolean;
  align?: [string, string];
  aligny?: [string, string];
  height?: [string, string];
  width?: [string, string];
  mt?: SpacingType;
  mr?: SpacingType;
  mb?: SpacingType;
  ml?: SpacingType;
}

export type LayoutProps = {
  box?: BoxTypes;
  box_wrap?: WrapContent;
  carousel?: Object;
  datetime_enabled?: boolean;
  image?: Image;
  related?: Related;
  section?: Object;
  subject?: Subject;
  subtitle?: Subtitle;
  title?: Title;
}

export type TeaserProps = {
  color?: string;
  domain?: string;
  image_circle?: boolean;
  /**
   * @description expects an object with teaser data
   */
  item: Object;
  /**
   * @description expects an object with layout configuration for teaser
   */
  layout?: LayoutProps;
  /**
   * @description expects an object with layout configuration for related news
   */
  related?: RelatedProps;
}

