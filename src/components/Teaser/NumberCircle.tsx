import { get } from 'lodash'

import { LayoutProps } from './types'
import React from 'react'

import * as S from './NumberCircleStyled'

type NumberCircleProps = {
  borderColor?: string;
  layout: LayoutProps;
  number: number;
}

const NumberCircle = ({
  layout,
  number
}: NumberCircleProps) => {
  const circle_layout = get(layout, 'most_read_circle')
  if (!circle_layout?.enabled)
    return <></>
  return (
    <S.Circle
      color={circle_layout?.color}
      borderColor={circle_layout?.border_color}
      fontSize={circle_layout?.font_size}
      fontFamily={circle_layout?.font_family}
      pt={circle_layout?.pt}
      pr={circle_layout?.pr}
      pb={circle_layout?.pb}
      pl={circle_layout?.pl}
      mt={circle_layout?.mt}
      mr={circle_layout?.mr}
      mb={circle_layout?.mb}
      ml={circle_layout?.ml}
      height={circle_layout?.height}
      radius={circle_layout?.radius}
      width={circle_layout?.width}>
      {number}
    </S.Circle>
  )
}

export default NumberCircle