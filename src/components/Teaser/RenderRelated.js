import { get } from 'lodash'
import React from 'react'

import * as S from './styled'

const RenderRelated = ({ color, item, layout }) => {
  if(!item)
    return false

  const related_enabled = get(layout, 'related.enabled', false)
  const related_value = get(item, 'related', '')

  if (!related_value || !related_enabled) {
    return false
  }

  const bg_color = get(layout, 'related.bg_color', 'primary1')
  const font_color = color ? color : get(layout, 'related.color', 'white')
  const font_size = get(layout, 'related.font_size', ['14px', '14px'])
  const line_height = get(layout, 'related.line_height', ['16px', '16px'])
  const mb = get(layout, 'related.mb', [2, 2])

  return (
    <S.Subject
      bg_color={bg_color}
      color={font_color}
      font_size={font_size}
      line_height={line_height}
      mb={mb}>
      {related_value} 
    </S.Subject>
  )
}

export { RenderRelated }