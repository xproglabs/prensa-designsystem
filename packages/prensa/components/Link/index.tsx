import React from 'react'

import { StyledLink } from './styled'
import { LinkProps } from './types'

/**
 * Prensa | Link component
 * @description Link component is an abstraction for <a/>
 */
const Link = ({
  ariaLabel,
  children,
  color,
  display,
  href,
  height,
  path,
  radius,
  textDecoration,
  width,
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
      aria-label={ariaLabel}
      href={path || href}
      $color={color}
      $display={display}
      $textDecoration={textDecoration}
      $height={height}
      $radius={radius}
      $width={width}
      {...otherProps}
    >
      {children}
    </StyledLink>
  )
}

export default Link