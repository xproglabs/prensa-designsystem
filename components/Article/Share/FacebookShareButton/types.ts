export type FacebookShareButtonProps = {
  amp: boolean;
  facebookPath?: string;
  facebookProps: Object;
  fbappid: string;
  size?: string;
}

export type FacebookAmpContainerProps = {
  children?: any;
  facebookPath: string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  $size: string;
}

export type FacebookProps = {
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
}