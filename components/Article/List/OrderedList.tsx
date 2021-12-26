import { ComponentType } from 'react'
import styled from 'styled-components'

import { OrderedListProps } from './types'

function renderMaxWidth({ maxWidth }: any) {
  return `max-width: calc(${maxWidth} - 40px)`
}

export const OrderedList: ComponentType<OrderedListProps> = styled.ol<OrderedListProps>`
  ${renderMaxWidth};
`