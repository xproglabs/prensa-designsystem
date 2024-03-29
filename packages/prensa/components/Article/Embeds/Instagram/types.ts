export interface InstagramEmbedProps {
  amp: boolean;
  ampElementProps?: Object;
  elementProps?: Object;
  fbappid: string;
  /**
   * Required value for building instagram access_token access_token={app-id}|{client-token}. NOT required when using AMP version.
   * https://developers.facebook.com/docs/instagram/oembed/
   */
  fbclienttoken?: string;
  height?: Array<string>;
  url: string;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
  width?: Array<string>;
} 