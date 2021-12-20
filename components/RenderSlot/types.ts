import { ReactElement } from 'react'

import { CarouselProps } from '../../components/Carousel/types'
import { PageBlockPreview } from '../PreviewProvider/types'
import { LayoutProps } from '../Teaser/types'

export type RenderSlotProps = {
  amp?: boolean,
  bgcolor?: string;
  carousel?: CarouselProps;
  color?: string;
  column_items: number;
  column_padding: number;
  domain?: string;
  eventTracking?: Object;
  fallback_image_url?: string;
  layout?: LayoutProps;
  layouts: Array<string>;
  min_height?: [string, string];
  /**
   * @description order prop expects an array of two strings, prop name and order asc | desc
   */
  order?: boolean | [string, 'asc' | 'desc'];
  preview: PageBlockPreview;
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
  space_bottom?: Array<number>;
  theme?: any;
}