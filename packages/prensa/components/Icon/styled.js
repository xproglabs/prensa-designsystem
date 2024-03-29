import styled from 'styled-components'

import { getColor } from '../../styled-system/color'
import { margin } from '../../styled-system/margin'

const Svg = styled.svg`
  ${margin};
  fill: ${getColor};
`

export { Svg }