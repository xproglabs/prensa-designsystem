import { ComponentType } from 'react'
import styled from 'styled-components'

import { UnorderedListProps } from './types'

export const UnorderedList: ComponentType<UnorderedListProps> = styled.ul<UnorderedListProps>`
  max-width: calc(${props => props.maxWidth} - 40px);
  width: 100%;
`