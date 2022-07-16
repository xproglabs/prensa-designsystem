import { color } from '@xprog/prensa-css-engine/color'
import { fontFamily } from '@xprog/prensa-css-engine/fontFamily'
import { fontSize } from '@xprog/prensa-css-engine/fontSize'
import { margin } from '@xprog/prensa-css-engine/margin'
import { ComponentType } from 'react'
import styled from 'styled-components'

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
    ${color};
    ${fontFamily};
    ${fontSize};
  }
`