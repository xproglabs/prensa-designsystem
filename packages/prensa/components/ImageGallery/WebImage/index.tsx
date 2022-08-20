import styled from 'styled-components'

export const WebImage = styled.img`
  height: 360px;
  object-fit: contain;
  object-position: center;
  @media (min-width: ${props => props.theme.queries.md}) {
    width: 768px;
    height: 500px;
  }
`