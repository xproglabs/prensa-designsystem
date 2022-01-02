import { getColor, margin } from 'prensa/styled-system'
import { ComponentType } from 'react'
import styled from 'styled-components'

import { parseFontFamily } from '../../Typography/parsers'
import { ListItemProps } from './types'

export const ListItem: ComponentType<ListItemProps> = styled.li<ListItemProps>`
  ${margin};
  ::marker {
    ${getColor};
    font-family: ${parseFontFamily};
    font-size: ${props => props.$fontSize};
  }
`