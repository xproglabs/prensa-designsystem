import { LayoutProps } from './types'

export interface RelatedItemProps {
  name: string;
}

export interface RelatedProps {
  children: any;
  color: string;
  font_size: Array<String>;
  line_height: Array<String>;
  mb: Array<String>;
}

export interface RelatedRenderProps {
  color: string;
  items?: Array<RelatedItemProps>;
  layout: LayoutProps;
}