import { ComponentType } from 'react'
import styled from 'styled-components'

import { getBackgroundColor } from '../Menu/styled'
import { StyledContainerProps } from '../types'

export const StyledContainer: ComponentType<StyledContainerProps> = styled.div`
  amp-sidebar {
    ${getBackgroundColor};
  }
`