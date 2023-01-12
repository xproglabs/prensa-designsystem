import React from 'react'

import { PrensaEngineCSSProp } from '../../types'

export type CarouselCSSProp = {
  container?: PrensaEngineCSSProp;
  root?: PrensaEngineCSSProp;
  carousel?: PrensaEngineCSSProp;
  slider?: PrensaEngineCSSProp;
  sliderThumbsWrapper?: PrensaEngineCSSProp;
  sliderThumbsAnimated?: PrensaEngineCSSProp;
  slide?: PrensaEngineCSSProp;
  controlArrow?: PrensaEngineCSSProp;
  controlDots?: PrensaEngineCSSProp;
  controlDotsDot?: PrensaEngineCSSProp;
}

export interface CarouselProps {
  children: any;
  axis: 'horizontal' | 'vertical';
  labels: { leftArrow: string; rightArrow: string; item: string; };
  css?: CarouselCSSProp;
  ariaLabel?: string | undefined;
  autoFocus?: boolean;
  autoPlay?: boolean;
  centerMode?: boolean;
  centerSlidePercentage?: number;
  className?: string;
  dynamicHeight?: boolean;
  emulateTouch?: boolean;
  infiniteLoop?: boolean;
  interval?: number;
  onClickItem?: (index: number, item: React.ReactNode) => void;
  onClickThumb?: (index: number, item: React.ReactNode) => void;
  onChange?: (index: number, item: React.ReactNode) => void;
  onSwipeStart?: (event: React.TouchEvent) => void;
  onSwipeEnd?: (event: React.TouchEvent) => void;
  onSwipeMove?: (event: React.TouchEvent) => boolean;
  preventMovementUntilSwipeScrollTolerance?: boolean;
  renderArrowPrev?: (clickHandler: () => void, hasPrev: boolean, label: string) => React.ReactNode;
  renderArrowNext?: (clickHandler: () => void, hasNext: boolean, label: string) => React.ReactNode;
  renderIndicator?: (clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void, isSelected: boolean, index: number, label: string) => React.ReactNode;
  renderItem?: (item: React.ReactNode, options?: { isSelected: boolean; isPrevious: boolean; }) => React.ReactNode;
  renderThumbs?: (children: React.ReactChild[]) => React.ReactChild[];
  selectedItem?: number;
  showArrows?: boolean;
  showStatus?: boolean;
  showIndicators?: boolean;
  showThumbs?: boolean;
  statusFormatter?: (currentItem: number, total: number) => string;
  stopOnHover?: boolean;
  swipeable?: boolean;
  swipeScrollTolerance?: number;
  thumbWidth?: number;
  transitionTime?: number;
  useKeyboardArrows?: boolean;
  verticalSwipe?: 'natural' | 'standard';
  height?: number | string;
  width?: number | string;
  animationHandler?: 'slide' | 'fade';
  // swipeAnimationHandler: SwipeAnimationHandler;
  // stopSwipingHandler: StopSwipingHandler;
}