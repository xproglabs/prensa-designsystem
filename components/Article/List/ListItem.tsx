import { color } from '@xprog/prensa-css-engine/color'
import { margin } from '@xprog/prensa-css-engine/margin'
import { ComponentType } from 'react'
import styled from 'styled-components'

import { parseFontFamily } from '../../Typography/parsers'
import { ListItemProps } from './types'

export const ListItem: ComponentType<ListItemProps> = styled.li<ListItemProps>`
  ${margin};
  a {
    text-decoration: underline;
    :hover {
      opacity: 0.8;
    }
  }
  ::marker {
    ${(props) => color({ $color: props.color, theme: props.theme })};
    font-family: ${parseFontFamily};
    font-size: ${props => props.$fontSize};
  }
`