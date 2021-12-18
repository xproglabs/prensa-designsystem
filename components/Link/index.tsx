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
  href,
  height,
  path,
  textDecoration,
  ...otherProps
}: LinkProps) => {

  if (!path && !href) {
    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    )
  }

  return (
    <StyledLink
      href={path || href}
      $color={color}
      $textDecoration={textDecoration}
      $height={height}
      {...otherProps}
    >
      {children}
    </StyledLink>
  )
}

export default Link