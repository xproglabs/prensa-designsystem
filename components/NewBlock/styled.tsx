import { align } from '@xprog/prensa-css-engine/align'
import { color } from '@xprog/prensa-css-engine/color'
import { height } from '@xprog/prensa-css-engine/height'
import { margin } from '@xprog/prensa-css-engine/margin'
import { padding } from '@xprog/prensa-css-engine/padding'
import { width } from '@xprog/prensa-css-engine/width'
import { ComponentType } from 'react'
import styled from 'styled-components'

import { StyledBlockProps } from './props'

const StyledBlock: ComponentType<StyledBlockProps> = styled.div<StyledBlockProps>`
  ${align};
  ${color};
  ${height};
  ${margin};
  ${padding};
  ${width};
`

export { StyledBlock }