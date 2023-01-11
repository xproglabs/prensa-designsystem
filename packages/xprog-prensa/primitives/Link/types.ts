import { DetailedHTMLProps, AnchorHTMLAttributes, ReactElement, ReactNode } from 'react'

import { PrensaEngineCSSProp } from '../../types'

export interface LinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  bypass?: boolean;
  children?: ReactElement | ReactNode | any;
  component?: ReactElement | ReactNode | any;
  componentProps?: any;
  componentOptions?: { renderOnlyCustomLink?: boolean; };
  css?: PrensaEngineCSSProp
}