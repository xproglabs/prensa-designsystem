import { Block } from 'prensa'
import React from 'react'

import { SideMenuAmpProps } from '../types'
import { StyledContainer } from './styled'

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
    <StyledContainer $backgroundColor={backgroundColor}>
      <amp-sidebar
        id={id}
        layout={layout}
        side={menuAnchor}
      >
        <Block px={px} py={py}>
          {children}
        </Block>
      </amp-sidebar>
    </StyledContainer>
  )
}

export default AmpMenu