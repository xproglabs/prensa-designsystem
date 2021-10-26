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
  layout?: LayoutProps;
  layouts: Array<string>;
  min_height?: [string, string];
  preview: PageBlockPreview;
  slot: Array<any>;
  /**
   * @description spaceA prop expects a element or React Component to be rendered before teaser content
   */
  spaceA?: ReactElement;
  /**
   * @description spaceB prop expects a element or React Component to be rendered after teaser content
   */
  spaceB?: ReactElement;
  theme?: any;
}