import { ComponentType } from 'react'
import styled from 'styled-components'

import { UnorderedListProps } from './types'

function renderMaxWidth({ maxWidth }: any) {
  return `max-width: calc(${maxWidth} - 40px)`
}

export const UnorderedList: ComponentType<UnorderedListProps> = styled.ul<UnorderedListProps>`
  ${renderMaxWidth};
`