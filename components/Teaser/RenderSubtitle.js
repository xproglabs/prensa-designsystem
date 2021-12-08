import { get } from 'lodash'
import React from 'react'

import * as S from './styled'

const RenderSubtitle = ({ item, layout }) => {
  const subtitle_enabled = get(layout, 'subtitle.enabled', false)
  const subtitle_value = get(item, 'subtitle', '')

  if (!subtitle_value || !subtitle_enabled) {
    return false
  }

  const color = get(layout, 'subtitle.color', 'neutral3')
  const font_size = get(layout, 'subtitle.font_size', ['14px', '14px'])
  const line_height = get(layout, 'subtitle.line_height', ['16px', '16px'])
  const mb = get(layout, 'subtitle.mb', ['0px', '0px'])

  return (
    <S.Subtitle
      color={color}
      font_size={font_size}
      line_height={line_height}
      mb={mb}
    >
      {subtitle_value}
    </S.Subtitle>
  )
}

export { RenderSubtitle }