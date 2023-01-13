import React from 'react'

import { Block } from '../../primitives/Block'
import * as t from './types'

const TeaserStyled: React.FC<t.TeaserStyledProps> = ({
  css,
  children,
  customProps,
  defaultCss
}) => (
  <Block
    {...customProps}
    className={`Teaser ${customProps?.className || ''}`}
    css={{ ...defaultCss, ...css }}
  >
    {children}
  </Block>
)

TeaserStyled.defaultProps = {
  defaultCss: {
    align: ['column', 'left', 'top'],
    backgroundColor: '$basicWhiteAlpha900',
    p: '$4',
    width: 'calc(100% - $8)'
  }
}

const TeaserWrap: React.FC<t.TeaserStyledProps> = ({
  css,
  children,
  customProps,
  defaultCss
}) => (
  <Block
    {...customProps}
    className={`TeaserWrap ${customProps?.className || ''}`}
    css={{ ...defaultCss, ...css }}
  >
    {children}
  </Block>
)

TeaserWrap.defaultProps = {
  defaultCss: {
    align: ['column', 'left', 'top'],
    width: '100%'
  }
}

export { TeaserStyled, TeaserWrap }
