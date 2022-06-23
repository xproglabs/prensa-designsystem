import { ColorTokens } from '@prensa_tokens'
import { HeightProps, WidthProps } from '@xprog/prensa-css-engine/props'

export type FacebookProps = {
  color?: ColorTokens | string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
}

export type FacebookShareButtonProps = {
  amp: boolean;
  color: ColorTokens;
  facebookPath?: string;
  facebookProps?: FacebookProps;
  fbappid: string;
  pageUrl: string;
  size?: HeightProps['$height'] | WidthProps['$width'];
}

export type FacebookAmpContainerProps = {
  children?: any;
  facebookPath: string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  $size?: HeightProps['$height'] | WidthProps['$width'];
}