import { Block } from 'prensa'
import React from 'react'

import { AmpMenuContainer } from '../styled'
import { SideMenuAmpProps } from '../types'

const AmpMenu = ({
  backgroundColor,
  children,
  id,
  layout,
  menuAnchor,
  px,
  py
}: SideMenuAmpProps) => {
  return (
    <AmpMenuContainer $backgroundColor={backgroundColor}>
      <amp-sidebar
        id={id}
        layout={layout}
        side={menuAnchor}
      >
        <Block px={px} py={py}>
          {children}
        </Block>
      </amp-sidebar>
    </AmpMenuContainer>
  )
}

export default AmpMenu