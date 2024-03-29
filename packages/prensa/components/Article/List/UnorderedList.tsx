import { FC } from 'react'
import styled from 'styled-components'

import { UnorderedListProps } from './types'

export const UnorderedList: FC<UnorderedListProps> = styled.ul<UnorderedListProps>`
  max-width: calc(${props => props.maxWidth} - 40px);
  width: calc(100% - 40px);
`