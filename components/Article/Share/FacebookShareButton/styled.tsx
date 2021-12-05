import { margin } from 'prensa/styled-system'
import { ComponentType } from 'react'
import styled from 'styled-components'

import { getIconHeight, getMinWidthValue } from '../styled'
import { FacebookAmpContainerProps } from './types'

export const FacebookAmpContainer: ComponentType<FacebookAmpContainerProps> = styled.div<FacebookAmpContainerProps>`
  amp-social-share[type="facebook"] {
    ${getIconHeight};
    ${getMinWidthValue};
    ${margin};
    background-image: ${props => `url(${props.facebookPath})`};
    background-color: transparent;
    &:hover {
      opacity: 80%;
    }
  }
`