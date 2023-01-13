import React from 'react'

import { DrawerContainer, DrawerContent, DrawerBackdrop, DrawerSpacer } from './styles'
import { DrawerProps } from './types'

export const Drawer: React.FC<DrawerProps> = ({
  anchor,
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
    <DrawerContainer
      className='pds-Drawer-container'
      css={container_css}
    >
      <DrawerBackdrop
        className='pds-Drawer-backdrop'
        data-open-state={open}
        hidden={!open}
        onClick={close}
        css={backdrop_css}
      />
      <DrawerContent
        className='pds-Drawer-content'
        data-open-state={open}
        hidden={!open}
        anchor={anchor}
        size={size}
        css={content_css}
      >
        <DrawerSpacer
          className='pds-Drawer-spacer'
          innerSpace={innerSpace}
          css={spacer_css}
        >
          {children}
        </DrawerSpacer>
      </DrawerContent>
    </DrawerContainer>
  )
}

Drawer.defaultProps = {
  anchor: 'left'
}