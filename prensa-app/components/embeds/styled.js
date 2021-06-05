import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: max-content;
  @media (min-width: ${props => props.theme.queries.md}) {
    width: ${props => props.$width};
    height: ${props => props.$height};
  }
`

export {Container};