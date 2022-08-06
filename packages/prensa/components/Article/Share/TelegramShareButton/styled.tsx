import { margin } from 'prensa/styled-system'
import { FC } from 'react'
import styled from 'styled-components'

import { getIconHeight, getMinWidthValue } from '../styled'
import { TelegramAmpContainerProps } from './types'

export const TelegramAmpContainer: FC<TelegramAmpContainerProps> = styled.div<TelegramAmpContainerProps>`
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