import { margin } from 'prensa/styled-system'
import { ComponentType } from 'react'
import styled from 'styled-components'

import { getIconHeight, getMinWidthValue } from '../styled'
import { TelegramAmpContainerProps } from './types'

export const LinkedinAmpContainer: ComponentType<TelegramAmpContainerProps> = styled.div<TelegramAmpContainerProps>`
  amp-social-share[type="twitter"] {
    ${getIconHeight};
    ${getMinWidthValue};
    ${margin};
    background-image: ${props => `url(${props.telegramPath})`};
    background-color: transparent; 
    &:hover {
      opacity: 80%;
    }
  }
`