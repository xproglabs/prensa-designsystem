import React from 'react'

import * as S from './styled'

const RenderCircle = ({ most_read_circle }) => {
  const is_enabled = most_read_circle && most_read_circle.enabled
  if (!is_enabled)
    return <></>
  return (
    <S.Circle
      most_read_circle={most_read_circle}>
        1
    </S.Circle>
  )
}

export { RenderCircle }