import { get } from 'lodash'
import { dimensions, padding } from 'prensa/styled-system'
import { ComponentType } from 'react'
import styled from 'styled-components'

import { ContentProps, BackdropProps, AmpMenuContainerProps, WebMenuContainerProps } from './types'

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

function getBackgroundColor({ $backgroundColor, theme }: any) {
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
  z-index: 100;
  @media (min-width: ${props => props.theme.queries.md}) {
    width: max-content;
  }
`
export const AmpMenuContainer: ComponentType<AmpMenuContainerProps> = styled.div`
  amp-sidebar {
    ${getBackgroundColor};
  }
`
export const WebMenuContainer: ComponentType<WebMenuContainerProps> = styled.div`
  .Prensa_sidemenu_content[open] {
    animation-name: Prensa_Sidemenu_slideInLeft;
    animation-duration: 233ms;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0,0,.21,1);
  }
  .Prensa_sidemenu_content[hidden] {
    animation-name: Prensa_Sidemenu_slideOutLeft;
    animation-duration: 233ms;
    animation-fill-mode: backwards;
    animation-timing-function: cubic-bezier(0,0,.21,1);
    transform: translateX(-100%);
    top: -8000px;
    transition: top 0.01s 1s;
  }
  .Prensa_sidemenu_backdrop[open] {
    transform: none;
    animation: none;
  }
  .Prensa_sidemenu_backdrop[hidden] {
    transform: translateX(-100%);
  }
  @keyframes Prensa_Sidemenu_slideInLeft {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(0%); }
  }
  @keyframes Prensa_Sidemenu_slideOutLeft {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
  }
`