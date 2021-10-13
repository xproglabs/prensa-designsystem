import React from 'react'
import styled, { css } from 'styled-components'

interface LinkProps {
  opacity?: number
}
const Link = styled.a<LinkProps>`
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
interface AreaLinkProps {
  children: any;
  hoverOpacity?: number;
  path: string;
}
/**
 * Section Area Link
 * @description wrap the icon and title
 * @param children react component
 * @param hover define mouse hover opacity
 * @param path link to click the area
 * @returns a component as a React element
 */
export const AreaLink = ({
  children,
  hoverOpacity,
  path
}: AreaLinkProps) => {
  if(path) {
    return (
      <Link
        href={path}
        opacity={hoverOpacity}>
        {children}
      </Link>
    )
  }
  return children
}


export default Link