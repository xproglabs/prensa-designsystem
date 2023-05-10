import React from 'react'

import { S } from './styled'
import { IBlock } from './types'

export const Block: React.FC<IBlock> = ({ children, ...otherProps }) => {
  return (
    <S.Block {...otherProps}>
      {children}
    </S.Block>
  )
}