import { margin } from 'prensa/styled-system'
import { FC } from 'react'
import styled from 'styled-components'

import { getIconHeight, getMinWidthValue } from '../styled'
import { LinkedinAmpContainerProps } from './types'

export const LinkedinAmpContainer: FC<LinkedinAmpContainerProps> = styled.div<LinkedinAmpContainerProps>`
  amp-social-share[type="linkedin"] {
    ${getIconHeight};
    ${getMinWidthValue};
    ${margin};
    background-image: ${props => `url(${props.linkedinPath})`};
    background-color: transparent; 
    &:hover {
      opacity: 80%;
    }
  }
`