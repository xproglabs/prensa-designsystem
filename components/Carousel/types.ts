type ResponsiveHeight = [string, string]
type Queries = 'sm' | 'md' | 'lg' | 'xl'
type CarouselType = 'carousel' | 'slides'
type CarouselLayoutTypes = 'fill' | 'fixed' | 'fixed-height' | 'flex-item' | 'intrinsic' | 'nodisplay' | 'responsive'

export type CarouselProps = {
  children?: any;
  enabled: boolean;
  delay?: string;
  autoplay?: string;
  loop?: string;
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
}

export type CarouselLayoutProps = {
  delay?: string;
  autoplay?: string;
  loop?: string;
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
}