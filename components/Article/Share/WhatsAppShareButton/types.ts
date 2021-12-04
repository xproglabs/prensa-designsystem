export type WhatsAppProps = {
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
}

export type WhatsAppShareButtonProps = {
  amp: boolean;
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
}