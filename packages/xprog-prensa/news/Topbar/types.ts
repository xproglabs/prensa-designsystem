import { ReactNode } from 'react'

import { ComponentFromPropsType } from '../../hooks'
import { PrensaEngineCSSProp } from '../../types'

export type TopbarCSSProp = {
  cssContainer?: PrensaEngineCSSProp;
  cssContainerTopHolder?: PrensaEngineCSSProp;
  cssContainerTop?: PrensaEngineCSSProp;
  cssContainerTopSlotLeft?: PrensaEngineCSSProp;
  cssContainerTopSlotCenter?: PrensaEngineCSSProp;
  cssContainerTopSlotRight?: PrensaEngineCSSProp;
  cssContainerMiddleHolder?: PrensaEngineCSSProp;
  cssContainerMiddle?: PrensaEngineCSSProp;
  cssContainerMiddleSlotLeft?: PrensaEngineCSSProp;
  cssContainerMiddleSlotCenter?: PrensaEngineCSSProp;
  cssContainerMiddleSlotRight?: PrensaEngineCSSProp;
  cssContainerBottomHolder?: PrensaEngineCSSProp;
  cssContainerBottom?: PrensaEngineCSSProp;
  cssContainerBottomLeft?: PrensaEngineCSSProp;
  cssContainerBottomCenter?: PrensaEngineCSSProp;
  cssContainerBottomRight?: PrensaEngineCSSProp;
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