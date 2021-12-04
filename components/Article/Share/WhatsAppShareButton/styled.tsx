import styled from 'styled-components'

import { getMinWidthValue } from '../styled'

export const WhatsAppShareButton = styled.div`
  amp-social-share[type="whatsapp"] {
    ${getMinWidthValue};
    background-image: ${props => `url(${props.whatsappPath})`};
    background-color: transparent; 
    &:hover {
      opacity: 80%;
    }
  }
`