import styled, { css } from 'styled-components'

import * as T from './types'

export const HtmlBackgroundStyled = styled.div<T.ImageBackgroundProps>`
  height: 100%;
  width: 100%;

  ${props => props.img_path && css`
    background-image: url(${props.img_path});
    background-position: center center;
    background-size: cover;
  `}
`

export const HtmlImageStyled = styled.img`
  width: 100%;
`
