import { getColor, margin } from 'prensa/styled-system'
import { FC } from 'react'
import styled from 'styled-components'

import { parseFontFamily } from '../../Typography/parsers'
import { ListItemProps } from './types'

export const ListItem: FC<ListItemProps> = styled.li<ListItemProps>`
  ${margin};
  a {
    text-decoration: underline;
    :hover {
      opacity: 0.8;
    }
  }
  ::marker {
    ${getColor};
    font-family: ${parseFontFamily};
    font-size: ${props => props.$fontSize};
  }
`