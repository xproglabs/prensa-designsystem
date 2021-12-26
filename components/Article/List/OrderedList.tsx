import { ComponentType } from 'react'
import styled from 'styled-components'

import { OrderedListProps } from './types'


export const OrderedList: ComponentType<OrderedListProps> = styled.ol<OrderedListProps>`
  max-width: calc(${props => props.maxWidth} - 40px);
  width: 100%;
`