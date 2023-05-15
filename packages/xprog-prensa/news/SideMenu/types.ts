import { PrensaEngineCSS } from '@xprog/prensa-system'
import { ReactNode, MouseEventHandler } from 'react'

import { DrawerProps } from '../../primitives/types'
import { SideMenuContentType, SideMenuFooterType, SideMenuHeaderType } from './styles'

export type SideMenuContentProps = SideMenuContentType
export type SideMenuFooterProps = SideMenuFooterType
export type SideMenuHeaderProps = SideMenuHeaderType

export type SideMenuProps = {
  close: MouseEventHandler<HTMLDivElement>;
  css?: {
    drawer?: DrawerProps['css'];
    header?: PrensaEngineCSS;
    content?: PrensaEngineCSS;
    footer?: PrensaEngineCSS;
  };
  open: boolean;
  anchor?: DrawerProps['anchor'];
  innerSpace?: DrawerProps['innerSpace'];
  sections?: { header?: ReactNode; content?: ReactNode; footer?: ReactNode; };
  size?: DrawerProps['size'];
}