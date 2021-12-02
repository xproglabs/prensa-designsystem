import { margin } from 'prensa/styled-system'
import styled from 'styled-components'

// ToDo: Implement .tsx file and typing
// import { ComponentType } from 'react'
// type ContainerProps = {
//   mt?: string | number;
//   mr?: string | number;
//   mb?: string | number;
//   ml?: string | number;
//   $height: Array<string>;
//   $width: Array<string>;
// }
// const Container: ComponentType<ContainerProps> = styled.div<ContainerProps>`

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
  .Prensa-YouTubeEmbed-web {
    ${mobile_height};
    ${mobile_width};
  }
  @media (min-width: ${props => props.theme.queries.md}) {
    ${desktop_height};
    ${desktop_width};
    .Prensa-YouTubeEmbed-web {
      ${desktop_height};
      ${desktop_width};
    }
  }
`

export { Container }