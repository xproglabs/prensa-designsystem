import { get } from 'lodash'
import React from 'react'

import { EditArea } from '../EditArea'
import * as S from './styled'

const RenderSubject = ({
  color,
  editable,
  item,
  layout
}) => {
  const subject_enabled = get(layout, 'subject.enabled', false)
  let subject_value = get(item, 'subject', '')

  if (!subject_enabled) {
    return <></>
  }

  if (editable && editable.enabled) {
    if (!subject_value || subject_value == '') {
      subject_value = ' '
    }
  }

  if (!subject_value) {
    return <></>
  }
  const bg_color = get(layout, 'subject.bg_color', 'primary1')
  const font_color = color ? color : get(layout, 'subject.color', 'white')
  const font_size = get(layout, 'subject.font_size', ['14px', '14px'])
  const line_height = get(layout, 'subject.line_height', ['16px', '16px'])
  const mb = get(layout, 'subject.mb', ['0px', '0px'])
  return (
    <S.Subject
      bg_color={bg_color}
      color={font_color}
      font_size={font_size}
      line_height={line_height}
      mb={mb}>
      <EditArea {...editable}>
        {subject_value}
      </EditArea>
    </S.Subject>
  )
}

export { RenderSubject }