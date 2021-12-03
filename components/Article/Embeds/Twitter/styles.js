import { margin } from 'prensa/styled-system'
import styled from 'styled-components'

function mobile_height({ $height }) {
  const value = $height[0]
  if (!value) return ''
  return `height: ${value}`
}
function mobile_width({ $width }) {
  const value = $width[0]
  if (!value) return ''
  return `width: ${value}`
}
function desktop_height({ $height }) {
  const value = $height[1]
  if (!value) return ''
  return `height: ${value}`
}
function desktop_width({ $width }) {
  const value = $width[1]
  if (!value) return ''
  return `width: ${value}`
}

const Container = styled.div`
  ${margin};
  ${mobile_height};
  ${mobile_width};
  .Prensa-Twitter-web {
    ${mobile_height};
    ${mobile_width};
  }
  @media (min-width: ${props => props.theme.queries.md}) {
    ${desktop_height};
    ${desktop_width};
    .Prensa-Twitter-web {
      ${desktop_height};
      ${desktop_width};
    }
  }
`

export { Container }