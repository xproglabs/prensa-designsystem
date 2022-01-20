import { CaptionProps } from '../ImageGallery/Caption/types';
export declare type ItemProps = {
    caption: string;
    value: string;
};
export declare type ContainerProps = {
    $width: string;
    $height: string;
};
export declare type AmpImageGalleryProps = {
    captionProps?: CaptionProps;
    items: Array<ItemProps>;
};
export declare type WebImageGalleryProps = {
    captionProps?: CaptionProps;
    items: Array<ItemProps>;
};
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
