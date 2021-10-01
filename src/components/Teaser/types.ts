import { RelatedItemProps } from './RelatedTypes'

export type SpacingType = number | string | [number, number] | [string, string] | [number, string] | [string, number]

type BoxTypes = {
  align?: [string, string];
  aligny?: [string, string];
  height?: [string, string] | [string, string, string];
  pb?: SpacingType;
  pt?: SpacingType;
  mb?: SpacingType;
}

type BoxWrap = {
  content_overlap?: boolean;
  align?: [string, string];
  aligny?: [string, string];
  height?: [string, string];
  mb?: SpacingType;
  mt?: SpacingType;
  width?: [string, string];
}

type Image = {
  dimension?: [string, string];
  enabled?: boolean;
  height?: [string, string];
  width?: [string, string];
  box?: [string, string];
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

export type LayoutProps = {
  box?: BoxTypes;
  box_wrap?: BoxWrap;
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
  related?: RelatedItemProps;
}

