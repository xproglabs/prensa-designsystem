import React from 'react'
import styled, { css } from 'styled-components'

import { LinkProps, StyledLinkProps } from './types'

const StyledLink = styled.a<StyledLinkProps>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: inherit;
  cursor: pointer;
  text-decoration: none;
  width: 100%;

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
const Link = ({
  children,
  href,
  hoverOpacity
}: LinkProps) => {

  if (!href) {
    return children
  }
  
  return (
    <StyledLink href={href} hoverOpacity={hoverOpacity}>
      {children}
    </StyledLink>
  )
}

Link.defaultProps = {
  hoverOpacity: 1
}

export default Link