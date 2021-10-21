import { IconTokens } from '@prensa_tokens'

import {
  LayoutProps,
  SpacingType
} from './types'

export interface RelatedItemProps {
  children: any;
  color: string;
  font_size: Array<String>;
  font_weight: number;
  icon?: IconTokens;
  line_height: Array<String>;
  item_path: string;
  mb?: SpacingType;
  mr?: SpacingType;
  theme: Object;
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