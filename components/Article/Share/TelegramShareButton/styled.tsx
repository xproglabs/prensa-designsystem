import { margin } from '@xprog/prensa-css-engine/margin'
import { ComponentType } from 'react'
import styled from 'styled-components'

import { getIconHeight, getMinWidthValue } from '../styled'
import { TelegramAmpContainerProps } from './types'

export const TelegramAmpContainer: ComponentType<TelegramAmpContainerProps> = styled.div<TelegramAmpContainerProps>`
  amp-social-share[type="telegram"] {
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