import { map } from 'lodash'
import React from 'react'

import { Teaser } from '../component'
import * as S from './styles'
import * as t from './types'

const Related: React.FC<t.RelatedProps> = ({
  css,
  customProps,
  items,
  layout,
  linkProps
}) => {
  return (
    <S.RelatedContainer css={css} customProps={customProps}>
      {map(items, (item, key) => (
        <Teaser {...layout} {...item} linkProps={linkProps} key={key} />
      ))}
    </S.RelatedContainer>
  )
}

export { Related }
