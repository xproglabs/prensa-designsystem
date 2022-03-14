import { ColorTokens } from '@prensa_tokens'

export type WhatsAppProps = {
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
}

export type WhatsAppShareButtonProps = {
  amp: boolean;
  color: ColorTokens;
  pageUrl: string;
  size?: string;
  whatsappPath?: string;
  whatsappProps?: WhatsAppProps;
}

export type WhatsAppAmpContainerProps = {
  children?: any;
  whatsappPath: string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  $size?: string;
}