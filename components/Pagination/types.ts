import { ColorTokens, FontTokens, RadiusTokens } from '@prensa_tokens'

/**
 * Prensa Design System | Pagination component
 */
export interface PaginationComponentProps {
  indicatorLayout?: IndicatorLayoutProps;
  numFound: number;
  path: string;
  query?: QueryProps;
  rows: number;
  showArrows?: boolean;
  start: number;
}

export type ArrowButtonProps = {
  borderColor?: ColorTokens;
  color?: ColorTokens;
  direction: 'left' | 'right';
  height?: string;
  radius?: RadiusTokens;
  width?: string;
}

export type IndicatorLayoutProps = {
  bgColor?: ColorTokens;
  borderColor?: ColorTokens;
  color?: ColorTokens;
  fontFamily?: FontTokens;
  fontSize?: string;
  height?: string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  radius?: RadiusTokens;
  width?: string;
}

export type IndicatorProps = IndicatorLayoutProps & {
  children?: any;
  href?: string;
}

export type IconProps = {
  color?: ColorTokens;
}

type QueryProps = {
  term: string;
}