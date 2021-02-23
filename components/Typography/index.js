import type, {ComponentType} from 'react'
import styled, {css} from 'styled-components'

type TypographyProps = {
  element: string,
}

const renderComponent = props => {

  console.log(props)

  const styles = css`
    font-size: ${fontSize};
    font-family: ${fontFamily};
    font-weight: ${fontWeight};
  `

  switch(element) {
    case 'h1':
      return styled.h1`${styles}`
    case 'h2':
      return styled.h2
    case 'h3':
      return styled.h3
    case 'h4':
      return styled.h4
    case 'h5':
      return styled.h5
    case 'h6':
      return styled.h6
    case 'p':
      return styled.p
    case 'span':
    default:
      return styled.span
  }
}

const Typography: ComponentType<TypographyProps> = renderComponent

export default Typography;
