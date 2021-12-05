import { margin } from 'prensa/styled-system'
import { ComponentType } from 'react'
import styled from 'styled-components'

import { getMinWidthValue } from '../styled'
import { WhatsAppAmpContainerProps } from './types'

export const WhatsAppAmpContainer: ComponentType<WhatsAppAmpContainerProps> = styled.div<WhatsAppAmpContainerProps>`
  amp-social-share[type="whatsapp"] {
    ${getMinWidthValue};
    ${margin};
    background-image: ${props => `url(${props.whatsappPath})`};
    background-color: transparent; 
    &:hover {
      opacity: 80%;
    }
  }
`