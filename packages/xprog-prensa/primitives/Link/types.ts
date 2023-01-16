import { DetailedHTMLProps, AnchorHTMLAttributes, ReactElement, ReactNode } from 'react'

import { PrensaEngineCSSProp } from '../../types'

type LinkExtendedProps = Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'ref'>

export interface LinkProps extends LinkExtendedProps {
  bypass?: boolean;
  children?: ReactElement | ReactNode | any;
  component?: ReactElement | ReactNode | any;
  componentProps?: any;
  componentOptions?: { renderOnlyCustomLink?: boolean; };
  css?: PrensaEngineCSSProp
}