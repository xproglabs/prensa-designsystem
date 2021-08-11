import { get } from 'lodash'
import React from 'react'

import * as S from './styled'

const RenderTitle = ({ layout, item_path, item_title }) => {
  const title_enabled = get(layout, 'title.enabled', false)

  if (!item_title || !title_enabled) {
    return false
  }

  const font_size = get(layout, 'title.font_size', ['32px', '44px'])
  const line_height = get(layout, 'title.line_height', ['36px', '48px'])
  const mb = get(layout, 'title.mb', [2, 2])

  return (
    <S.Title
      font_size={font_size}
      line_height={line_height}
      mb={mb}
    >
      <S.AreaLink
        href={item_path}
      >
        {item_title}
      </S.AreaLink>
    </S.Title>
  )
}

export { RenderTitle }