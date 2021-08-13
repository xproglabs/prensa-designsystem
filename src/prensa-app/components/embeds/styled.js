import styled from 'styled-components'

const Container = styled.div`
  height: max-content;
  margin-bottom: 24px;
  width: 100%;
  @media (min-width: ${props => props.theme.queries.md}) {
    width: ${props => props.$width};
    height: ${props => props.$height};
  }
`

export { Container }