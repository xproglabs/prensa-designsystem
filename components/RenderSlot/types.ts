import { ReactElement } from 'react'

import { CarouselLayoutProps } from '../../components/Carousel/types'
import { PageBlockPreview } from '../PreviewProvider/types'
import { LayoutProps } from '../Teaser/types'

export type RenderSlotProps = {
  amp?: boolean,
  bgcolor?: string;
  carousel?: CarouselLayoutProps;
  color?: string;
  column_items: number;
  column_padding: number;
  domain?: string;
  eventTracking?: Object;
  fallback_image_url?: string;
  layout?: LayoutProps;
  layouts: Array<string>;
  more?: boolean;
  more_link?: string;
  more_title?: string;
  min_height?: [string, string];
  /**
   * @description order prop expects an array of two strings, prop name and order asc | desc
   */
  order?: boolean | [string, 'asc' | 'desc'];
  preview: PageBlockPreview;
  pagination?: boolean;
  search_len?: any;
  site_data: any;
  slot: Array<any>;
  slot_parser: any;
  slot_position?: number;
  /**
   * @description spaceA prop expects a element or React Component to be rendered before teaser content
   */
  spaceA?: ReactElement;
  /**
   * @description spaceB prop expects a element or React Component to be rendered after teaser content
   */
  spaceB?: ReactElement;
  spaceTopLeft?: ReactElement;
  spaceTopCenter?: ReactElement;
  spaceTopRight?: ReactElement;
  space_bottom?: Array<number>;
  space_bottom_column?: Array<number>;
  space_bottom_column_color?: Array<number>;
  theme?: any;
}