import { ColorTokens } from '@prensa_tokens'

export type TelegramProps = {
  enabled?: boolean;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
}

export type TelegramShareButtonProps = {
  amp: boolean;
  color: ColorTokens;
  pageUrl: string;
  telegramPath?: string;
  telegramProps?: TelegramProps;
  size?: string;
}

export type TelegramAmpContainerProps = {
  children?: any;
  telegramPath: string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  $size?: string;
}