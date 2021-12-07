import styled, { withTheme } from 'styled-components'

import { Container } from '../styled'

export const TwitterEmbedContainer = withTheme(styled(Container)`
  div {
    width: ${props => props.$width[0]};
    @media (min-width: ${props => props.theme.queries.md}) {
      width: ${props => props.$width[1]};
    }
  }
`)