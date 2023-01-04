export type ItemProps = {
  caption: string;
  url: string;
}

export type ContainerProps = {
  $width: string;
  $height: string;
}

// WEB Image Gallery component
export type WebImageGalleryProps = {
  captionProps?: any;
  componentCaption?: any;
  componentImage?: any;
  items: Array<ItemProps>;
}

/**
 * Prensa | Image Gallery
 */
export interface ImageGalleryProps {
  captionProps?: any;
  items: Array<ItemProps>;
  height?: string;
  width?: string;
}