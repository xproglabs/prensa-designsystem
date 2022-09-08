import React from 'react'

import { Drawer } from '../../primitives'
import { SideMenuContent, SideMenuFooter, SideMenuHeader } from './styles'
import { SideMenuProps } from './types'

export const SideMenu: React.FC<SideMenuProps> = ({ css, open, close, innerSpace, sections, size }) => {
  return (
    <Drawer
      close={close}
      open={open}
      size={size}
      innerSpace={innerSpace}
      css={css.drawer}
    >
      <SideMenuHeader css={css?.header}>
        {sections && sections.header}
      </SideMenuHeader>
      <SideMenuContent css={css?.content}>
        {sections && sections.content}
      </SideMenuContent>
      <SideMenuFooter css={css?.footer}>
        {sections && sections.footer}
      </SideMenuFooter>
    </Drawer>
  )
}

SideMenu.defaultProps = {
  size: 'lg'
}