import React from 'react'

import AmpMenu from './AmpMenu'
import Menu from './Menu'
import { SideMenuProps } from './types'

/**
 * Prensa | SideMenu
 */
const SideMenu = ({ amp, ...otherProps }: SideMenuProps) => {
  if (amp) {
    return <AmpMenu {...otherProps} />
  } else {
    return <Menu {...otherProps} />
  }
}

SideMenu.defaultProps = {
  backgroundColor: 'white',
  menuAnchor: 'left',
  width: 'max-content'
}

export default SideMenu