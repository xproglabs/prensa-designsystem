import React from 'react'

import { SideMenuContainer, SideMenuContent, SideMenuBackdrop, SideMenuSpacer } from './styles'
import { SideMenuProps } from './props'

export const SideMenu: React.FC<SideMenuProps> = ({
  children,
  close,
  innerSpace,
  open,
  size,
  css,
}) => {

  let container_css = {}
  let backdrop_css = {}
  let content_css = {}
  let spacer_css = {}

  if (css) {
    if (css.container) {
      container_css = { ...css.container }
    }
    if (css.backdrop) {
      backdrop_css = { ...css.backdrop }
    }
    if (css.content) {
      content_css = { ...css.content }
    }
    if (css.spacer) {
      spacer_css = { ...css.spacer }
    }
  }

  return (
    <SideMenuContainer
      className='pdsnews-SideMenu-root'
      css={container_css}
    >
      <SideMenuBackdrop
        className='pdsnews-SideMenu-backdrop'
        data-open-state={open}
        hidden={!open}
        onClick={close}
        css={backdrop_css}
      />
      <SideMenuContent
        className='pdsnews-SideMenu-content'
        data-open-state={open}
        hidden={!open}
        size={size}
        css={content_css}
      >
        <SideMenuSpacer
          className='pdsnews-SideMenu-spacer'
          innerSpace={innerSpace}
          css={spacer_css}
        >
          {children}
        </SideMenuSpacer>
      </SideMenuContent>
    </SideMenuContainer>
  )
}