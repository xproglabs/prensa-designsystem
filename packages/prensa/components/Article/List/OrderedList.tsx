import { FC } from 'react'
import styled from 'styled-components'

import { OrderedListProps } from './types'

export const OrderedList: FC<OrderedListProps> = styled.ol<OrderedListProps>`
  max-width: calc(${props => props.maxWidth} - 40px);
  width: calc(100% - 40px);
`