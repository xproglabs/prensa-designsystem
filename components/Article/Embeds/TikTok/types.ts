export type TikTokProps = {
  amp: boolean;
  ampElementProps?: AmpElementProps;
  elementProps?: Object;
  height?: Array<string>;
  url: string;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
  width?: Array<string>;
}

type AmpElementProps = {
  height?: string;
  layout?: string;
  width?: string;
}