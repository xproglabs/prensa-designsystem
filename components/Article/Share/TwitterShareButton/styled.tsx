import { margin } from 'prensa/styled-system'
import { ComponentType } from 'react'
import styled from 'styled-components'

import { getMinWidthValue } from '../styled'
import { TwitterAmpContainerProps } from './types'

export const TwitterAmpContainer: ComponentType<TwitterAmpContainerProps> = styled.div<TwitterAmpContainerProps>`
  amp-social-share[type="twitter"] {
    ${getMinWidthValue};
    ${margin};
    background-image: ${props => `url(${props.twitterPath})`};
    background-color: transparent; 
    &:hover {
      opacity: 80%;
    }
  }
`