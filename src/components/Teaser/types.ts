import { ReactElement } from 'react'

type BoxTypes = {
  align: [string, string];
  aligny: [string, string];
  pb: [number, number];
  pt: [number, number];
  mb: [number, number];
  height: [string, string, string];
}

type BoxWrap = {
  content_overlap: boolean;
  align: [string, string];
  aligny: [string, string]; 
  height: [string, string];
  mb: [number, number];
  mt: [number, number];
  width: [string, string];
}

type Image = {
  dimensions: [string, string];
  enabled: boolean;
  height: [number, number];
  width: [number, number];
  box: [string, string];
  mb: [number, number];
  ml: [number, number];
}

type Subject = {
  bg_color: string;
  color: string;
  font_size: [string, string];
  enabled: boolean;
  line_height: [string, string];
  mb: [number, number];
}

type Subtitle = {
  color: string;
  font_size: [string, string];
  enabled: boolean;
  line_height: [string, string];
}

type Title = {
  color: string;
  element: string;
  enabled: boolean;
  font_size: [string, string];
  line_height: [string, string];
  mb: [number, number];
}

export type LayoutProps = {
  box?: BoxTypes;
  box_wrap?: BoxWrap;
  image?: Image;
  datetime_enabled?: boolean;
  subject?: Subject;
  subtitle?: Subtitle;
  title?: Title;
}

export type TeaserProps = {
  color?: string;
  domain?: string;
  image_circle?: boolean;
  item: Object;
  layout?: LayoutProps;
  /**
   * @description spaceA prop expects a element or React Component to be rendered before teaser content
   */
  spaceA?: ReactElement;
  /**
   * @description spaceB prop expects a element or React Component to be rendered after teaser content
   */
  spaceB?: ReactElement;
}
