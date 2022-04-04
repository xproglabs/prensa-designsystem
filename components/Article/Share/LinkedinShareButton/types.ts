import { ColorTokens } from '@prensa_tokens'

export type LinkedinProps = {
  enabled?: boolean;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
}

export type LinkedinShareButtonProps = {
  amp: boolean;
  color: ColorTokens;
  enabled?: boolean;
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