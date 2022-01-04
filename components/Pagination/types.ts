/**
 * Prensa Design System | Pagination component
 */
export interface PaginationComponentProps {
  indicatorLayout?: IndicatorLayoutProps;
  numFound: number;
  path: string;
  query?: QueryProps;
  rows: number;
  start: number;
}

export type ArrowButtonProps = {
  borderColor?: string;
  color?: string;
  direction: 'left' | 'right';
  height?: string;
  radius?: string;
  width?: string;
}

export type IndicatorLayoutProps = {
  bgColor?: string;
  borderColor?: string;
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  height?: string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  radius?: string;
  width?: string;
}

export type IndicatorProps = IndicatorLayoutProps & {
  children?: any;
  href?: string;
}

type QueryProps = {
  term: string;
}