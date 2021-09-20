import { get } from 'lodash'
import React from 'react'

import { dateDistance } from '../Util'
import * as S from './styled'

const RenderDatetime = ({ item, layout }) => {
  const datetime_enabled = get(layout, 'datetime_enabled', false)
  const time_article_modified = get(item, 'time-modified', '')
  const time_formatted = get(item, 'time_modifiedDate', time_article_modified)

  if (!time_formatted || !datetime_enabled) {
    return false
  }

  let time_string = dateDistance(time_formatted, 2880)
  time_string = time_string && time_string.startsWith('Há') ?
    time_string.replace('Há', 'Atualizado há') :
    `Atualizado em ${time_string}`

  return (
    <S.Datetime>
      {time_string}
    </S.Datetime>
  )
}

export { RenderDatetime }