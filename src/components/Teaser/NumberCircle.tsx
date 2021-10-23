import { ColorTokens } from '@prensa_tokens'
import React from 'react'

import * as S from './NumberCircleStyled'

type NumberCircleProps = {
  color: ColorTokens | string;
  enabled: boolean;
  number: number;
}

const NumberCircle = ({
  color,
  enabled,
  number
}: NumberCircleProps) => {
  if (!enabled)
    return <></>
  return (
    <S.Circle
      color={color}>
      {number}
    </S.Circle>
  )
}

export default NumberCircle