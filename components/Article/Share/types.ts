import { ColorTokens } from '@prensa_tokens'

import { StyledBlockProps } from '../../Block/props'
import { FacebookProps } from './FacebookShareButton/types'
import { LinkedinProps } from './LinkedinShareButton/types'
import { TelegramProps } from './TelegramShareButton/types'
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
  linkedinPath?: string;
  linkedinProps?: LinkedinProps;
  telegramPath?: string;
  telegramProps?: TelegramProps;
  twitterPath?: string;
  twitterProps?: TwitterProps;
  whatsappPath?: string;
  whatsappProps?: WhatsAppProps;
}