import { align } from '@xprog/prensa-css-engine/align'
import { border } from '@xprog/prensa-css-engine/border'
import { height } from '@xprog/prensa-css-engine/height'
import { margin } from '@xprog/prensa-css-engine/margin'
import { padding } from '@xprog/prensa-css-engine/padding'
import { width } from '@xprog/prensa-css-engine/width'
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
function displayCSS({ $display }: any) {
  if (!$display) {
    return ''
  }
  return css`
    display: ${$display};
  `
}

export const StyledLink: ComponentType<StyledLinkProps> | any = styled.a`
  cursor: pointer;
  ${align};
  ${border};
  ${colorCSS};
  ${displayCSS};
  ${height};
  ${textDecorationCSS};
  ${hoverStateCSS};
  ${margin};
  ${padding};
  ${width};
`