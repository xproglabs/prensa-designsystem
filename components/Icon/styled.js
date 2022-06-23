import { color } from '@xprog/prensa-css-engine/color'
import { margin } from '@xprog/prensa-css-engine/margin'
import styled from 'styled-components'

const Svg = styled.svg`
  ${margin};
  fill: ${color};
`

export { Svg }