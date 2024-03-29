import { margin } from 'prensa/styled-system'
import { FC } from 'react'
import styled from 'styled-components'

import { getIconHeight, getMinWidthValue } from '../styled'
import { TwitterAmpContainerProps } from './types'

export const TwitterAmpContainer: FC<TwitterAmpContainerProps> = styled.div<TwitterAmpContainerProps>`
  amp-social-share[type="twitter"] {
    ${getIconHeight};
    ${getMinWidthValue};
    ${margin};
    background-image: ${props => `url(${props.twitterPath})`};
    background-color: transparent; 
    &:hover {
      opacity: 80%;
    }
  }
`