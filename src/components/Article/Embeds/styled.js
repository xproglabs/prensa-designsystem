import { margin } from 'prensa/styled-system'
import styled from 'styled-components'

const Container = styled.div`
  ${margin};
  height: max-content;
  width: 100%;
  @media (min-width: ${props => props.theme.queries.md}) {
    width: ${props => props.$width};
    height: ${props => props.$height};
  }
`

export { Container }