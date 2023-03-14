/* eslint-disable no-undef */
import { CarouselProps } from '../Carousel/types'

export type ItemProps = {
  caption: string;
  url: string;
}

/**
 * Prensa | Image Gallery
 */
export interface ImageGalleryProps extends Omit<Omit<Omit<CarouselProps, 'labels'>, 'children'>, 'axis'> {
  axis?: CarouselProps['axis'];
  captionProps?: any;
  componentCaption?: any;
  componentImage?: any;
  items: Array<ItemProps>;
  labels?: CarouselProps['labels'];
  height?: string;
  width?: string;
}