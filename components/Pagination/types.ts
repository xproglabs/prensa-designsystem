// export interface ArrowProps {
//   borderColor?: string;
//   color: string;
//   direction: 'left' | 'right';
//   fontFamily?: string;
//   fontSize?: string;
//   height?: string;
//   radius?: string;
//   width?: string;
// }

/**
 * Prensa Design System | Pagination component
 */
export interface PaginationComponentProps {
  indicatorLayout?: IndicatorLayoutProps;
  numFound: number;
  path: string;
  query: QueryProps;
  rows: number;
  start: number;
}

export type IndicatorLayoutProps = {
  bgColor?: string;
  borderColor?: string;
  color: string;
  fontFamily?: string;
  fontSize?: string;
  height?: string;
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