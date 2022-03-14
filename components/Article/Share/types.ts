import { ColorTokens } from '@prensa_tokens'

import { StyledBlockProps } from '../../NewBlock/props'
import { FacebookProps } from './FacebookShareButton/types'
import { TwitterProps } from './TwitterShareButton/types'
import { WhatsAppProps } from './WhatsAppShareButton/types'

export interface ShareProps {
  amp: boolean;
  color: ColorTokens;
  containerProps?: StyledBlockProps;
  enabled: boolean;
  pageUrl: string;
  size?: string;
  facebookPath?: string;
  facebookProps?: FacebookProps;
  fbappid: string;
  twitterPath?: string;
  twitterProps?: TwitterProps;
  whatsappPath?: string;
  whatsappProps?: WhatsAppProps;
}