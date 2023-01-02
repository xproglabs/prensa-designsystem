import { CaptionProps } from '../ImageGallery/Caption/types'

export type ItemProps = {
  caption: string;
  url: string;
}

export type ContainerProps = {
  $width: string;
  $height: string;
}

// AMP Image Gallery component
export type AmpImageGalleryProps = {
  captionProps?: CaptionProps;
  items: Array<ItemProps>;
  height: string;
  width: string;
}

// WEB Image Gallery component
export type WebImageGalleryProps = {
  captionProps?: CaptionProps;
  componentImage?: any;
  items: Array<ItemProps>;
}

/**
 * Prensa | Image Gallery
 */
export interface ImageGalleryProps {
  captionProps?: CaptionProps;
  items: Array<ItemProps>;
  height?: string;
  width?: string;
}