import React from 'react'

import { Block } from '../../../primitives/Block'
import * as t from './types'

const RelatedContainer: React.FC<t.RelatedContainerProps> = ({
  css,
  children,
  customProps,
  defaultCss
}) => (
  <Block
    {...customProps}
    className={`TeaserRelated ${customProps?.className || ''}`}
    css={{ ...defaultCss, ...css }}
  >
    {children}
  </Block>
)

RelatedContainer.defaultProps = {
  defaultCss: {
    align: ['column', 'left', 'top'],
    width: '100%'
  }
}

export { RelatedContainer }
