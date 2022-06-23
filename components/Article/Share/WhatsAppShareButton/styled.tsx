import { margin } from '@xprog/prensa-css-engine/margin'
import { ComponentType } from 'react'
import styled from 'styled-components'

import { getIconHeight, getMinWidthValue } from '../styled'
import { WhatsAppAmpContainerProps } from './types'

export const WhatsAppAmpContainer: ComponentType<WhatsAppAmpContainerProps> = styled.div<WhatsAppAmpContainerProps>`
  amp-social-share[type="whatsapp"] {
    ${getIconHeight};
    ${getMinWidthValue};
    ${margin};
    background-image: ${props => `url(${props.whatsappPath})`};
    background-color: transparent; 
    &:hover {
      opacity: 80%;
    }
  }
`