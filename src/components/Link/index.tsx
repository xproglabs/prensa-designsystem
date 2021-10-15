import React from 'react'
import styled, { css } from 'styled-components'

import * as Types from './types'

/**
 * Section Link Area
 * @description render if section title path exists
 * @param children react component to be rendered
 * @param hover define mouse hover opacity
 * @param path define link to click the area
 * @returns a component as a React element
 */
export const LinkArea = ({
  children,
  hoverOpacity,
  path
}: Types.LinkAreaProps) => {
  if(!path) {
    return children
  }
  return (
    <Link
      href={path}
      opacity={hoverOpacity}>
      {children}
    </Link>
  )
}

/**
 * Section Link
 * @description wrap the icon and the title
 * @param children expects a react component
 * @param hover define mouse hover opacity
 * @param path define link to click the area
 * @returns a component as a React element
 */
const Link = styled.a<Types.LinkProps>`
  color: inherit;
  cursor: pointer;
  text-decoration: none;
  width: 100%;

  ${props => props.opacity && css`
    &:hover {
      opacity: ${props.opacity};
    }
  `}
`
Link.defaultProps = {
  opacity: 1
}

export default Link