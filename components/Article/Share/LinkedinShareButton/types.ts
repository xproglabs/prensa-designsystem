import { ColorTokens } from '@prensa_tokens'

export type LinkedinProps = {
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
}

export type LinkedinShareButtonProps = {
  amp: boolean;
  color: ColorTokens;
  pageUrl: string;
  linkedinPath?: string;
  linkedinProps?: LinkedinProps;
  size?: string;
}

export type LinkedinAmpContainerProps = {
  children?: any;
  linkedinPath: string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  $size?: string;
}