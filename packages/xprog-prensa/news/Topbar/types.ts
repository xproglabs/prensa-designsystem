import { ReactNode, ElementType } from 'react'

export type TopbarCSSProp = {
  cssContainer?: any;
  cssContainerTop?: any;
  cssContainerTopSlotLeft?: any;
  cssContainerTopSlotCenter?: any;
  cssContainerTopSlotRight?: any;
  cssContainerMiddle?: any;
  cssContainerMiddleSlotLeft?: any;
  cssContainerMiddleSlotCenter?: any;
  cssContainerMiddleSlotRight?: any;
  cssContainerBottom?: any;
  cssContainerBottomLeft?: any;
  cssContainerBottomCenter?: any;
  cssContainerBottomRight?: any;
}

export type TopbarProps = {
  children?: ReactNode;
  css?: TopbarCSSProp;
  slotTopLeft?: ElementType;
  slotTopCenter?: ElementType;
  slotTopRight?: ElementType;
  slotMiddleLeft?: ElementType;
  slotMiddleCenter?: ElementType;
  slotMiddleRight?: ElementType;
  slotBottomLeft?: ElementType;
  slotBottomCenter?: ElementType;
  slotBottomRight?: ElementType;
}