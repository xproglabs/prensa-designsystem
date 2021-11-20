import { Block } from 'prensa'
import React from 'react'
import { withTheme } from 'styled-components'

import { SideMenuWebProps } from '../types'
import { Backdrop, Content } from './styled'

const Menu = ({
  backgroundColor,
  children,
  close,
  menuAnchor,
  open,
  px,
  py,
  width,
}: SideMenuWebProps) => {

  if (!open) {
    return null
  }

  return (
    <Block>
      <Backdrop onClick={close} />
      <Content
        px={px}
        py={py}
        menuAnchor={menuAnchor}
        $backgroundColor={backgroundColor}
        $width={width}
      >
        {children}
      </Content>
    </Block>
  )
}

export default withTheme(Menu)