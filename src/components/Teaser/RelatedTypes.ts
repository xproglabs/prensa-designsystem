import { IconTokens } from '@prensa_tokens'
import { IconProps } from '../Icon/types'

import {
  LayoutProps,
  SpacingType
} from './types'

type RelatedItemIconProps = IconProps & {
  icon: IconTokens;
}

export interface RelatedItemProps {
  children: any;
  color: string;
  font_size: Array<String>;
  font_weight: number;
  icon?: RelatedItemIconProps;
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