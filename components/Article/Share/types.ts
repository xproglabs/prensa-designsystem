import { ColorTokens } from '@prensa_tokens'

import { CopyLinkButtonProps } from './CopyLinkButton/props'
import { FacebookProps } from './FacebookShareButton/types'
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
  domain?: string;
  pageUrl: string;
  size?: string;
  copyLinkUrl?: string;
  copyLinkProps?: CopyLinkButtonProps;
  facebookPath?: string;
  facebookProps?: FacebookProps;
  fbappid: string;
  twitterPath?: string;
  twitterProps?: TwitterProps;
  whatsappPath?: string;
  whatsappProps?: WhatsAppProps;
}