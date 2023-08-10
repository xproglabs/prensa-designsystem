import { PrensaEngineCSS } from '@xprog/prensa-system'

export type FooterCSSPropType = {
  containerCss?: PrensaEngineCSS;
  slotTopCss?: PrensaEngineCSS;
  slotMiddleCss?: PrensaEngineCSS;
  slotBottomCss?: PrensaEngineCSS;
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