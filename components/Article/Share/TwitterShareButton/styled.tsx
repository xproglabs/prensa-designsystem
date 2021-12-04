import styled from 'styled-components'

import { getMinWidthValue } from '../styled'

export const TwitterAmpContainer = styled.div`
  amp-social-share[type="twitter"] {
    ${getMinWidthValue};
    background-image: ${props => `url(${props.twitterPath})`};
    background-color: transparent; 
    &:hover {
      opacity: 80%;
    }
  }
`