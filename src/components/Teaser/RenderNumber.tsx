import { get } from 'lodash'

import { LayoutProps } from './types'
import React from 'react'

import * as S from './NumberContainer'

type RenderNumberProps = {
  borderColor?: string;
  layout: LayoutProps;
  number: number;
  numberContainer?: object;
}

const RenderNumber = ({
  layout,
  number
}: RenderNumberProps) => {
  const circle_layout = get(layout, 'most_read_circle')
  if (!circle_layout?.enabled)
    return <></>
  return (
    <S.NumberContainer
      color={circle_layout?.color}
      borderColor={circle_layout?.border_color}
      fontSize={circle_layout?.font_size}
      fontFamily={circle_layout?.font_family}
      height={circle_layout?.height}
      radius={circle_layout?.radius}
      width={circle_layout?.width}>
      {number}
    </S.NumberContainer>
  )
}

export default RenderNumber