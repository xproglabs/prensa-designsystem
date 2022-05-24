import { ColorTokens } from '@prensa_tokens'

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
  size?: string;
}

export type FacebookAmpContainerProps = {
  children?: any;
  facebookPath: string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  $size?: string;
}