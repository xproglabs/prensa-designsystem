import styled from 'styled-components'

function renderMaxWidth({ maxWidth }: any) {
  return `max-width: calc(${maxWidth} - 40px)`
}

export const UnorderedList = styled.ul`
  ${renderMaxWidth};
`