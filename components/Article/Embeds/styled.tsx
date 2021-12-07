import { margin } from 'prensa/styled-system'
import { ComponentType } from 'react'
import styled from 'styled-components'

type ContainerProps = {
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
  $height: Array<string>;
  $width: Array<string>;
}

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

/**
 * Prensa | Embeds Container
 * @description A container for web/amp embeds
 * Do NOT use display: flex; in this container. It must render a display: block; property in order to render AMP content
 */
const Container: ComponentType<ContainerProps> = styled.div<ContainerProps>`
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