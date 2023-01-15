import { PrensaEngineCSSProp } from '../../types'

export type FooterCSSPropType = {
  containerCss?: PrensaEngineCSSProp;
  slotTopCss?: PrensaEngineCSSProp;
  slotMiddleCss?: PrensaEngineCSSProp;
  slotBottomCss?: PrensaEngineCSSProp;
}

export interface FooterProps {
  css?: FooterCSSPropType;
  slotTop?: any;
  slotTopProps?: any;
  slotTopOptions?: any;
  slotMiddle?: any;
  slotMiddleProps?: any;
  slotMiddleOptions?: any;
  slotBottom?: any;
  slotBottomProps?: any;
  slotBottomOptions?: any;
}