import { FacebookProps } from './FacebookShareButton/types';
import { TwitterProps } from './TwitterShareButton/types';
import { WhatsAppProps } from './WhatsAppShareButton/types';
export declare type ContainerProps = {
    align?: string;
    alignx?: string;
    aligny?: string;
    mt?: number | string;
    mr?: number | string;
    mb?: number | string;
    ml?: number | string;
    width?: string;
};
export interface ShareProps {
    amp: boolean;
    containerProps?: ContainerProps;
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