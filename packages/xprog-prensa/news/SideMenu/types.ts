import { ReactNode, MouseEventHandler } from 'react'

import { DrawerProps, PrensaEngineCSSProp } from '../../types'

export type SideMenuProps = {
  close: MouseEventHandler<HTMLDivElement>;
  open: boolean;
  anchor?: DrawerProps['anchor'];
  css?: { header?: PrensaEngineCSSProp; content?: PrensaEngineCSSProp; footer?: PrensaEngineCSSProp; };
  innerSpace?: DrawerProps['innerSpace'];
  sections?: { header?: ReactNode; content?: ReactNode; footer?: ReactNode; };
  size?: DrawerProps['size'];
}