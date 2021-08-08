import { get } from 'lodash'
import styled from 'styled-components'

const handleFontFamily = props => {
  const theme = get(props, 'theme.fonts')
  const value = get(props, '$fontFamily')
  return theme[value]
}

const handleFontSize = props => {
  const unit = get(props, 'theme.factors.dimensions', 10)
  const value = get(props, '$fontSize')
  if (typeof value === 'string') return value
  else return `${value * unit}px`
}

const handleBorderRadius = props => {
  const theme = get(props, 'theme.radius')
  const value = get(props, '$radius')
  return theme[value]
}

const handlePlaceholderColor = props => {
  const theme = get(props, 'theme.colors')
  const value = get(props, 'placeholderColor')
  return theme[value]
}

//TODO: Unificar as funções de getColor do theme
const handleInputColor = props => {
  const isValid = get(props, 'validation')
  const theme = get(props, 'theme.colors')
  const value = get(props, '$color')
  //Static rule for false validation (apply color error1)
  if (isValid === false) return theme.error1
  return theme[value]
}

const handleColor = props => {
  const theme = get(props, 'theme.colors')
  const value = get(props, '$color')
  return theme[value]
}

const handleFocusedColor = props => {
  const isValid = get(props, 'validation')
  const theme = get(props, 'theme.colors')
  if (isValid === false) return theme.error1
  //Static rule to return activeSystemColor to label border
  return theme.activeColor
}

const handleSize = props => {
  if (typeof props.size === 'string') return props.size
  return `${props.size}px`
}

export const Input = styled.input`
  width: calc(100% - 16px);
  padding-left: 8px;
  padding-right: 8px;
  font-size: ${handleFontSize};
  font-weight: 400;
  font-family: ${handleFontFamily};
  color: ${handleColor};
  border-radius: ${handleBorderRadius};
  border-color: unset;
  border-width: unset;
  border-style: unset;
  &:focus {
    outline-color: unset;
    outline-width: unset;
    outline-style: none;
  }
  ::placeholder {
    color: ${handlePlaceholderColor};
  }
`

export const InputContainer = styled.div`
  background-color: white;
  width: 100%;
  height: ${handleSize};
  box-shadow: ${props => `0 0 0 1px ${handleInputColor(props)}`};
  display: flex;
  align-items: center;
  border-radius: ${handleBorderRadius};
  &:focus-within {
    box-shadow: ${props => `0 0 0 2px ${handleFocusedColor(props)}`};
  }
`