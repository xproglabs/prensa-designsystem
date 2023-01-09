export type ItemProps = {
  caption: string;
  url: string;
}

/**
 * Prensa | Image Gallery
 */
export interface ImageGalleryProps {
  captionProps?: any;
  componentCaption?: any;
  componentImage?: any;
  items: Array<ItemProps>;
  height?: string;
  width?: string;
}