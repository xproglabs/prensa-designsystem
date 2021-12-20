export type ItemProps = {
  caption: string;
  value: string;
}

export type CaptionProps = {
  fontFamily?: string;
  fontSize?: [string, string];
  lineHeight?: [string, string];
}

export type ContainerProps = {
  $width: string;
  $height: string;
}

// AMP Image Gallery component
export type AmpImageGalleryProps = {
  captionProps?: CaptionProps;
  items: Array<ItemProps>;
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