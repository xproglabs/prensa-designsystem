import { get } from 'lodash'
import { ComponentType } from 'react'
import styled, { css } from 'styled-components'

import { StyledLinkProps } from './types'

function textDecorationCSS({ $textDecoration }: any) {
  if (!$textDecoration) {
    return ''
  }
  return css`
    text-decoration: ${$textDecoration};
  `
}
function hoverStateCSS({ hoverOpacity }: any) {
  if (!hoverOpacity) {
    return ''
  }
  return css`
    &:hover {
      opacity: ${hoverOpacity};
    }
  `
}
function colorCSS({ $color, theme }: any) {
  if (!$color) {
    return css`
      color: inherit;
    `
  }
  return css`
    color: ${get(theme, `colors.${$color}`, 'inherit')};
  `
}
function heightCSS({ $height }: any) {
  return css`
    height: ${$height};
  `
}

export const StyledLink: ComponentType<StyledLinkProps> | any = styled.a<StyledLinkProps>`
  cursor: pointer;
  ${colorCSS};
  ${heightCSS};
  ${textDecorationCSS};
  ${hoverStateCSS};
`