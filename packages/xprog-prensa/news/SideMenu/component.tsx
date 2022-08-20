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
  return (
    <SideMenuContainer
      className='pdsnews-SideMenu-root'
      css={css && css.container && css.container}
    >
      <SideMenuBackdrop
        className='pdsnews-SideMenu-backdrop'
        data-open-state={open}
        hidden={!open}
        onClick={close}
        css={css && css.backdrop && css.backdrop}
      />
      <SideMenuContent
        className='pdsnews-SideMenu-content'
        data-open-state={open}
        hidden={!open}
        size={size}
        css={css && css.content && css.content}
      >
        <SideMenuSpacer
          className='pdsnews-SideMenu-spacer'
          innerSpace={innerSpace}
          css={css && css.spacer && css.spacer}
        >
          {children}
        </SideMenuSpacer>
      </SideMenuContent>
    </SideMenuContainer>
  )
}