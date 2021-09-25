import { LayoutProps } from '../Teaser/types'

export type RenderSlotProps = {
  color?: string;
  column_items: number;
  column_padding: string;
  domain?: string;
  image_circle?: boolean;
  layout?: LayoutProps;
  layouts: Array<string>;
  slot: Array<any>;
  theme?: any;
}