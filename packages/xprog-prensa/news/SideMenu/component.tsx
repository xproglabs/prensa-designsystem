import React from 'react'

import { Drawer } from '../../primitives'
import { SideMenuContent, SideMenuFooter, SideMenuHeader } from './styles'
import { SideMenuProps } from './types'

export const SideMenu: React.FC<SideMenuProps> = ({ css, open, close, sections, size }) => {
  return (
    <Drawer open={open} close={close} size={size}>
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