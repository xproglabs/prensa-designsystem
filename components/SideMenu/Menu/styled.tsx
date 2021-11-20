import { get } from 'lodash'
import { dimensions, padding } from 'prensa/styled-system'
import { ComponentType } from 'react'
import styled from 'styled-components'

import { ContentProps, BackdropProps } from '../types'

function getMenuPosition({ menuAnchor }: any) {
  if (menuAnchor === 'left') {
    return `
      left: 0px;
    `
  }
  if (menuAnchor === 'right') {
    return `
      right: 0px;
    `
  }
}

export function getBackgroundColor({ $backgroundColor, theme }: any) {
  const color = get(theme.colors, $backgroundColor, '')
  return `background-color: ${color};`
}

export const Backdrop: ComponentType<BackdropProps> = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  z-index: 10;
`
export const Content: ComponentType<ContentProps> = styled.div`
  ${dimensions};
  ${padding};
  ${getMenuPosition};
  ${getBackgroundColor};
  display: block;
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  top: 0px;
  z-index: 11;
  @media (min-width: ${props => props.theme.queries.md}) {
    width: max-content;
  }
`