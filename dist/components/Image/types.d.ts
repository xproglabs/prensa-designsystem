export declare type ImageBackgroundProps = {
    img_path?: string;
};
export declare type ImageHtmlProps = {
    custom_class?: string;
    title: string;
    layout_desktop: ImageLayoutProps;
    layout_mobile: ImageLayoutProps;
};
export declare type ImageLayoutProps = {
    enabled: boolean;
    height: string;
    path: string;
    type: string;
    width: string;
};
export declare type ImageProps = {
    amp: boolean;
    custom_class?: string;
    title: string;
    layout_desktop: ImageLayoutProps;
    layout_mobile: ImageLayoutProps;
};
