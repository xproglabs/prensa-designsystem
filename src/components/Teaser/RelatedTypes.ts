import {
  LayoutProps,
  SpacingType
} from './types'


export interface RelatedItemProps {
  children: any;
  color: string;
  font_size: Array<String>;
  line_height: Array<String>;
  item_path: String;
  mb?: SpacingType;
}

export interface RelatedProps {
  color?: string;
  enabled?: boolean;
  items?: Array<RelatedTeaserProps>;
  layout?: LayoutProps['related'];
}

export interface RelatedTeaserProps {
  name: string;
}