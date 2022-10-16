import { ReactNode } from 'react'

import { ComponentFromPropsType } from '../../hooks'

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
  slotTopLeft?: ComponentFromPropsType;
  slotTopCenter?: ComponentFromPropsType;
  slotTopRight?: ComponentFromPropsType;
  slotMiddleLeft?: ComponentFromPropsType;
  slotMiddleCenter?: ComponentFromPropsType;
  slotMiddleRight?: ComponentFromPropsType;
  slotBottomLeft?: ComponentFromPropsType;
  slotBottomCenter?: ComponentFromPropsType;
  slotBottomRight?: ComponentFromPropsType;
}