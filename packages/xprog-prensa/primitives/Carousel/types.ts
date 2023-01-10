import { CarouselProps as ReactResponsiveCarouselProps } from 'react-responsive-carousel'

export type CarouselItemType = {
  id: string;
}

export interface CarouselProps extends ReactResponsiveCarouselProps {
  children: any;
}