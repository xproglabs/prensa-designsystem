import styled from 'styled-components'

import { getItemMarginStyle, getMinWidthValue } from '../styled'

export const FacebookAmpContainer = styled.div`
   amp-social-share[type="facebook"] {
    ${getMinWidthValue};
    ${getItemMarginStyle};
    background-image: ${props => `url(${props.facebookPath})`};
    background-color: transparent;
    &:hover {
      opacity: 80%;
    }
  }
`