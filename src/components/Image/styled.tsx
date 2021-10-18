import styled, { css } from 'styled-components'

import * as T from './types'

export const HtmlBackgroundStyled = styled.div<T.ImageBackgroundProps>`
  height: 100%;
  width: 100%;

  ${props => props.href && css`
    background-image: url(${props.href});
    background-size: cover;
  `}
`

export const HtmlImageStyled = styled.img`
  width: 100%;
`
