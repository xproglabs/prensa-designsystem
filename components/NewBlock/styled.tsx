import { align } from '@xprog/prensa-css-engine/align'
import { border } from '@xprog/prensa-css-engine/border'
import { borderStyle } from '@xprog/prensa-css-engine/borderStyle'
import { boxShadow } from '@xprog/prensa-css-engine/boxShadow'
import { color } from '@xprog/prensa-css-engine/color'
import { customCSS } from '@xprog/prensa-css-engine/customCSS'
import { height } from '@xprog/prensa-css-engine/height'
import { margin } from '@xprog/prensa-css-engine/margin'
import { maxAndMin } from '@xprog/prensa-css-engine/maxAndMin'
import { padding } from '@xprog/prensa-css-engine/padding'
import { radius } from '@xprog/prensa-css-engine/radius'
import { width } from '@xprog/prensa-css-engine/width'
import { ComponentType } from 'react'
import styled from 'styled-components'

import { StyledBlockProps } from './props'

const StyledBlock: ComponentType<StyledBlockProps> = styled.div<StyledBlockProps>`
  ${align};
  ${border};
  ${borderStyle};
  ${boxShadow};
  ${color};
  ${customCSS};
  ${height};
  ${margin};
  ${maxAndMin};
  ${padding};
  ${radius};
  ${width};
`

export { StyledBlock }