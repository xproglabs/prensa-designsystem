import { PrensaEngineCSS } from '@xprog/prensa-system/types'
import { ReactNode } from 'react'

import { ComponentFromPropsType } from '../../hooks'

export type TopbarCSSProp = {
  cssContainer?: PrensaEngineCSS;
  cssContainerTopHolder?: PrensaEngineCSS;
  cssContainerTop?: PrensaEngineCSS;
  cssContainerTopSlotLeft?: PrensaEngineCSS;
  cssContainerTopSlotCenter?: PrensaEngineCSS;
  cssContainerTopSlotRight?: PrensaEngineCSS;
  cssContainerMiddleHolder?: PrensaEngineCSS;
  cssContainerMiddle?: PrensaEngineCSS;
  cssContainerMiddleSlotLeft?: PrensaEngineCSS;
  cssContainerMiddleSlotCenter?: PrensaEngineCSS;
  cssContainerMiddleSlotRight?: PrensaEngineCSS;
  cssContainerBottomHolder?: PrensaEngineCSS;
  cssContainerBottom?: PrensaEngineCSS;
  cssContainerBottomLeft?: PrensaEngineCSS;
  cssContainerBottomCenter?: PrensaEngineCSS;
  cssContainerBottomRight?: PrensaEngineCSS;
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