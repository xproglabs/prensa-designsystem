import { ColorTokens } from '@prensa_tokens'

import { FacebookProps } from './FacebookShareButton/types'
import { TelegramProps } from './TelegramShareButton/types'
import { TwitterProps } from './TwitterShareButton/types'
import { WhatsAppProps } from './WhatsAppShareButton/types'

export type ContainerProps = {
  align?: string;
  alignx?: string;
  aligny?: string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  width?: string;
}

export interface ShareProps {
  amp: boolean;
  enabled: boolean;
  color: ColorTokens;
  containerProps?: ContainerProps;
  pageUrl: string;
  size?: string;
  facebookPath?: string;
  facebookProps?: FacebookProps;
  fbappid: string;
  telegramPath?: string;
  telegramProps?: TelegramProps;
  twitterPath?: string;
  twitterProps?: TwitterProps;
  whatsappPath?: string;
  whatsappProps?: WhatsAppProps;
}