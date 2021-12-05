export type TwitterProps = {
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
}

export type TwitterShareButtonProps = {
  amp: boolean;
  pageUrl: string;
  twitterPath?: string;
  twitterProps?: TwitterProps;
  size?: string;
}

export type TwitterAmpContainerProps = {
  children?: any;
  twitterPath: string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  $size?: string;
}