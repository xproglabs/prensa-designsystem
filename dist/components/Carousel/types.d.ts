declare type ResponsiveHeight = [string, string];
declare type Queries = 'sm' | 'md' | 'lg' | 'xl';
declare type CarouselType = 'carousel' | 'slides';
declare type CarouselLayoutTypes = 'fill' | 'fixed' | 'fixed-height' | 'flex-item' | 'intrinsic' | 'nodisplay' | 'responsive';
export declare type CarouselProps = {
    children?: any;
    enabled: boolean;
    /**
     * @description Expects an array of strings. Each string represents a height
     * @example ['250', '250'] | ['250px', '250px']
     */
    height: ResponsiveHeight;
    layout?: CarouselLayoutTypes;
    mb?: [string | number, string | number];
    /**
     * @description Expects a breakpoint from theme queries property.
     * @example <Carousel querie='md' />
     */
    querie: Queries;
    theme?: any;
    type?: CarouselType;
};
export declare type CarouselLayoutProps = {
    enabled: boolean;
    /**
     * @description Expects an array of strings. Each string represents a height
     * @example ['250', '250'] | ['250px', '250px']
     */
    height: ResponsiveHeight;
    layout?: CarouselLayoutTypes;
    mb?: [string | number, string | number];
    /**
     * @description Expects a breakpoint from theme queries property.
     * @example <Carousel querie='md' />
     */
    querie: Queries;
    type?: CarouselType;
};
export {};
