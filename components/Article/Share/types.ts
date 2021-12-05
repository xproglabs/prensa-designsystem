import { FacebookProps } from './FacebookShareButton/types'
import { TwitterProps } from './TwitterShareButton/types'
import { WhatsAppProps } from './WhatsAppShareButton/types'

export interface ShareProps {
  amp: boolean;
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