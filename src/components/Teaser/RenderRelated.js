import { get, map } from 'lodash'
import React from 'react'

import * as S from './styled'

const RenderRelated = ({ color, items, layout }) => {
  const font_color = color ? color : get(layout, 'related.color', 'primary1')
  const font_size = get(layout, 'related.font_size', ['14px', '14px'])
  const line_height = get(layout, 'related.line_height', ['16px', '16px'])
  const mb = get(layout, 'related.mb', [2, 2])
  return (
    <S.Related
      color={font_color}
      font_size={font_size}
      line_height={line_height}
      mb={mb}>
      {(map(items, (item, key) => {
        return (
          <p key={key}>
            {item.name}
          </p>
        )
      }))}
    </S.Related>
  )
}

export { RenderRelated }