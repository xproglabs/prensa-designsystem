import {
  LayoutProps,
  SpacingType
} from './types'

export interface RelatedAreaProps {
  children: any;
}

export interface RelatedItemProps {
  name: string;
}

export interface RelatedProps {
  children: any;
  color: string;
  font_size: Array<String>;
  line_height: Array<String>;
  item_path: String;
  mb?: SpacingType;
}

export interface RelatedRenderProps {
  color?: string;
  enabled?: boolean;
  items?: Array<RelatedItemProps>;
  layout?: LayoutProps['related'];
}