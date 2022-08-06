import { margin } from 'prensa/styled-system'
import { FC } from 'react'
import styled from 'styled-components'

import { getIconHeight, getMinWidthValue } from '../styled'
import { WhatsAppAmpContainerProps } from './types'

export const WhatsAppAmpContainer: FC<WhatsAppAmpContainerProps> = styled.div<WhatsAppAmpContainerProps>`
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