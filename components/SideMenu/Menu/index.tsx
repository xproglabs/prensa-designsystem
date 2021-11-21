import React from 'react'

import { Backdrop, Content, WebMenuContainer } from '../styled'
import { SideMenuWebProps } from '../types'

const Menu = ({
  backgroundColor,
  children,
  close,
  height,
  menuAnchor,
  open,
  px,
  py,
  width,
}: SideMenuWebProps) => {
  return (
    <WebMenuContainer>
      <Backdrop
        className='Prensa_sidemenu_backdrop'
        open={open}
        hidden={!open}
        onClick={close}
      />
      <Content
        className='Prensa_sidemenu_content'
        open={open}
        hidden={!open}
        px={px}
        py={py}
        menuAnchor={menuAnchor}
        $backgroundColor={backgroundColor}
        $height={height}
        $width={width}
      >
        {children}
      </Content>
    </WebMenuContainer>
  )
}

export default Menu