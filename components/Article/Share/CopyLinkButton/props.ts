import { ColorTokens } from '@prensa_tokens'

export interface CopyLinkButtonProps {
  amp?: boolean;
  color?: ColorTokens;
  domain: string;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
  size?: string;
  url: string;
}