/// <reference types="react" />
declare type RenderImageProps = {
    amp?: boolean;
    domain: string;
    editable?: {
        enabled: boolean;
        state_of_image?: any;
    };
    fallback_image_url?: string;
    image_circle?: boolean;
    item?: any;
    item_path?: string;
    layout?: any;
    opacityMask?: boolean;
    state_of_image?: any;
};
declare const RenderImage: ({ amp, domain, editable, fallback_image_url, image_circle, item, item_path, layout, opacityMask }: RenderImageProps) => JSX.Element;
export { RenderImage };
