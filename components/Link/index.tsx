import React from 'react'

import { StyledLink } from './styled'
import { LinkProps } from './types'

/**
 * Prensa | Link component
 * @description Link component is an abstraction for <a/>
 */
const Link = ({
  children,
  color,
  path,
  textDecoration,
  ...otherProps
}: LinkProps) => {

  if (!path) {
    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    )
  }

  return (
    <StyledLink
      href={path}
      $color={color}
      $textDecoration={textDecoration}
      {...otherProps}
    >
      {children}
    </StyledLink>
  )
}

export default Link