import { CaptionProps } from '../ImageGallery/Caption/types'

export type ItemProps = {
  caption: string;
  value: string;
}

export type ContainerProps = {
  $width: string;
  $height: string;
}

export type CarouselProps = {
  delay?: string;
  autoplay?: string;
  controls?: string;
  loop?: string;
}

// AMP Image Gallery component
export type AmpImageGalleryProps = {
  captionProps?: CaptionProps;
  items: Array<ItemProps>;
  carouselProps?: CarouselProps;
}

// WEB Image Gallery component
export type WebImageGalleryProps = {
  captionProps?: CaptionProps;
  items: Array<ItemProps>;
}

/**
 * Prensa | Image Gallery
 */
export interface ImageGalleryProps {
  amp: boolean;
  captionProps?: CaptionProps;
  items: Array<ItemProps>;
  height?: string;
  width?: string;
}