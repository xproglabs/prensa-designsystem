import React from 'react'

import Icon from '../../components/Icon'

/**
 * IconMenu example component
 * @param props 
 * @returns Prensa Icon component with SVG path
 */
const IconMenu = props => {
  return (
    <Icon width="18px" height="12px" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"/>
    </Icon>
  )
}

export const ICONS = {
  IconMenu: <IconMenu/>
}