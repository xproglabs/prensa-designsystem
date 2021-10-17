import { ReactElement } from 'react'

import { CarouselProps } from '../../components/Carousel/types'
import { PageBlockPreview } from '../PageBlock/types'
import { LayoutProps } from '../Teaser/types'

export type RenderSlotProps = {
  bgcolor?: string;
  carousel?: CarouselProps;
  color?: string;
  column_items: number;
  column_padding: number;
  domain?: string;
  layout?: LayoutProps;
  layouts: Array<string>;
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