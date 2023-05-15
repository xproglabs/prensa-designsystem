import { PrensaEngineCSS } from '@xprog/prensa-system/types'
import { DetailedHTMLProps, AnchorHTMLAttributes, ReactElement, ReactNode } from 'react'

type LinkExtendedProps = Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'ref'>

export interface LinkProps extends LinkExtendedProps {
  bypass?: boolean;
  children?: ReactElement | ReactNode | any;
  component?: ReactElement | ReactNode | any;
  componentProps?: any;
  componentOptions?: { renderOnlyCustomLink?: boolean; };
  css?: PrensaEngineCSS;
}