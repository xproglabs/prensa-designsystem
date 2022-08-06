import { get } from 'lodash'
import { padding } from 'prensa/styled-system'
import { FC } from 'react'
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

function getHeight({ theme, $height }: any) {
  if (typeof $height === 'string') {
    return `height: ${$height};`
  }
  else {
    return `
      height: ${$height[0]};
      @media (min-width: ${theme.queries.md}) {
        height: ${$height[1]};
      }
    `
  }
}

function getResponsiveWidth({ theme, $width }: any) {
  return `
    width: ${$width[0]};
    @media (min-width: ${theme.queries.md}) {
      width: ${$width[1]};
    }
  `
}

export const Backdrop: FC<BackdropProps> = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  z-index: 10;
`
export const Content: FC<ContentProps> = styled.div<ContentProps>`
  ${padding};
  ${getMenuPosition};
  ${getBackgroundColor};
  ${getHeight};
  ${getResponsiveWidth};
  display: block;
  overflow-y: auto;
  position: fixed;
  top: 0px;
  z-index: 100;
`
export const AmpMenuContainer: FC<AmpMenuContainerProps> = styled.div<AmpMenuContainerProps>`
  amp-sidebar {
    ${padding};
    ${getBackgroundColor};
    ${getHeight};
    ${getResponsiveWidth};
  }
`
export const WebMenuContainer: FC<WebMenuContainerProps> = styled.div`
  .Prensa_sidemenu_content[open] {
    animation-name: Prensa_Sidemenu_slideInLeft;
    animation-duration: 233ms;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0,0,.21,1);
  }
  .Prensa_sidemenu_content[hidden] {
    animation-name: Prensa_Sidemenu_slideOutLeft;
    animation-duration: 300ms;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0,0,.21,1);
    top: -8000px;
    transform: translateX(-100%);
    transition: top 0.01s 1s;
  }
  .Prensa_sidemenu_backdrop[open] {
    animation-name: Prensa_Sidemenu_backdropIn;
    animation-duration: 233ms;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0,0,.21,1);
  }
  .Prensa_sidemenu_backdrop[hidden] {
    animation-name: Prensa_Sidemenu_backdropOut;
    animation-duration: 300ms;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0,0,.21,1);
  }
  @keyframes Prensa_Sidemenu_slideInLeft {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(0%); }
  }
  @keyframes Prensa_Sidemenu_slideOutLeft {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
  }
  @keyframes Prensa_Sidemenu_backdropIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes Prensa_Sidemenu_backdropOut {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }
`