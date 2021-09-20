import { get } from 'lodash'
import React from 'react'

import * as S from './styled'

const RenderSubject = ({ color, item, layout }) => {

  const subject_enabled = get(layout, 'subject.enabled', false)
  const subject_value = get(item, 'subject', '')

  if (!subject_value || !subject_enabled) {
    return false
  }

  const bg_color = get(layout, 'subject.bg_color', ['14px', '14px'])
  const font_color = color ? color : get(layout, 'subject.color', ['14px', '14px'])
  const font_size = get(layout, 'subject.font_size', ['14px', '14px'])
  const line_height = get(layout, 'subject.line_height', ['16px', '16px'])
  const mb = get(layout, 'subject.mb', [2, 2])

  return (
    <S.Subject
      bg_color={bg_color}
      color={font_color}
      font_size={font_size}
      line_height={line_height}
      mb={mb}
    >
      {subject_value} 
    </S.Subject>
  )
}

export { RenderSubject }