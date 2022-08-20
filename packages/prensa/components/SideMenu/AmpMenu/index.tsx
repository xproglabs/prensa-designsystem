import React from 'react'

import { AmpMenuContainer } from '../styled'
import { SideMenuAmpProps } from '../types'

const AmpMenu = ({
  backgroundColor,
  children,
  height,
  id,
  layout,
  menuAnchor,
  px,
  py,
  width
}: SideMenuAmpProps) => {
  return (
    <AmpMenuContainer
      px={px}
      py={py}
      $backgroundColor={backgroundColor}
      $height={height}
      $width={width}
    >
      <amp-sidebar
        id={id}
        layout={layout}
        side={menuAnchor}
      >
        {children}
      </amp-sidebar>
    </AmpMenuContainer>
  )
}

export default AmpMenu