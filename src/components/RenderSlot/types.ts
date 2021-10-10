import { ReactElement } from 'react'

import { LayoutProps } from '../Teaser/types'

export type RenderSlotProps = {
  bgcolor?: string;
  color?: string;
  column_items: number;
  column_padding: number;
  domain?: string;
  image_circle?: boolean;
  layout?: LayoutProps;
  layouts: Array<string>;
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