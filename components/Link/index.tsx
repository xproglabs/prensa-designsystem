import React from 'react'
import styled, { css } from 'styled-components'

import { LinkProps, StyledLinkProps } from './types'

const StyledLink = styled.a<StyledLinkProps>`
  color: inherit;
  cursor: pointer;
  ${props => props.textDecoration && css`
    text-decoration: ${props.textDecoration};
  `}
  ${props => props.hoverOpacity && css`
    &:hover {
      opacity: ${props.hoverOpacity};
    }
  `}
`
/**
 * Prensa | Link component
 * @description Link component is an abstraction for <a/>
 */
const Link = ({ children, path, ...otherProps }: LinkProps) => {

  if (!path) {
    return children
  }
  
  return (
    <StyledLink href={path} {...otherProps}>
      {children}
    </StyledLink>
  )
}

Link.defaultProps = {
  hoverOpacity: 1,
  textDecoration: 'none'
}

export default Link