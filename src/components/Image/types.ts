export type ImageBackgroundProps = {
  href?: string
}

export type ImageHtmlProps = {
  custom_class?: string;
  title: string;
  layout_desktop: ImageLayoutProps;
  layout_mobile: ImageLayoutProps;
}

export type ImageLayoutProps = {
  enabled: boolean;
  height: string;
  path: string;
  type: string;
  width: string;
}

export type ImageProps = {
  amp: boolean;
  custom_class?: string;
  title: string;
  layout_desktop: ImageLayoutProps;
  layout_mobile: ImageLayoutProps;
}