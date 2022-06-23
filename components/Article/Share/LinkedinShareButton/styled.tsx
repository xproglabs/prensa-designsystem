import { margin } from '@xprog/prensa-css-engine/margin'
import { ComponentType } from 'react'
import styled from 'styled-components'

import { getIconHeight, getMinWidthValue } from '../styled'
import { LinkedinAmpContainerProps } from './types'

export const LinkedinAmpContainer: ComponentType<LinkedinAmpContainerProps> = styled.div<LinkedinAmpContainerProps>`
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