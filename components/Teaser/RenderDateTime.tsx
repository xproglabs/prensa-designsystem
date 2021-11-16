import { get } from 'lodash'
import React from 'react'
import Typography from '../Typography'

import { dateDistance } from '../Util'
import { RenderDateTimeProps } from './RenderDateTimeTypes'

const RenderDatetime = ({ item, layout }: RenderDateTimeProps) => {

  const component_layout = get(layout, 'date_time', {})
  const datetime_enabled = get(component_layout, 'enabled', false)
  const text_color = get(component_layout, 'color', 'neutral3')
  const text_element = get(component_layout, 'element', 'span')
  const text_fontFamily = get(component_layout, 'fontFamily', 'primary')
  const text_fontSize = get(component_layout, 'fontSize', '14px')
  const text_fontWeight = get(component_layout, 'fontWeight', 300)
  const text_lineHeight = get(component_layout, 'lineHeight', '18px')
  const text_width = get(component_layout, 'width', '100%')

  // get time_formatted  
  let time_formatted = get(item, 'time_modifiedDate', false)
  if (!time_formatted || time_formatted == '') {
    time_formatted = get(item, 'time-modified', '')
  }
  if (!time_formatted || time_formatted == '') {
    time_formatted = get(item, 'updated', '')
  }
  if (!time_formatted || !datetime_enabled) {
    return null
  }
  let time_string = dateDistance(time_formatted, 2880)
  time_string = time_string && time_string.startsWith('Há') ?
    time_string.replace('Há', 'Atualizado há') :
    `Atualizado em ${time_string}`

  return (
    <Typography
      color={text_color}
      element={text_element}
      fontFamily={text_fontFamily}
      fontSize={text_fontSize}
      fontWeight={text_fontWeight}
      lineHeight={text_lineHeight}
      width={text_width}
    >
      {time_string}
    </Typography>
  )
}

export { RenderDatetime }