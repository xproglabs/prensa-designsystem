import { LayoutProps } from './types'

export type ItemProps = {
  time_modifiedDate?: string;
  'time-modified'?: string;
  updated?: string;
}

export type RenderDateTimeLayoutProps = {
  enabled?: boolean;
  color?: string;
  element?: string;
  format?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: number;
  lineHeight?: string;
  width?: string;
}

export type RenderDateTimeProps = {
  item: ItemProps;
  layout: LayoutProps;
}