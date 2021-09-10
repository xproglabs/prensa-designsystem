import React from 'react'

import * as S from './styled'

const RenderNumber = ({ has_number, number }) => {

  if (!has_number) {
    return false
  }

  const number_parsed = number + 1

  return (
    <S.Number>
      {number_parsed}
    </S.Number>
  )
}

export { RenderNumber }