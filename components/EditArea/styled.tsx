import styled, { css } from 'styled-components'

import {
  EditBoxProps,
  EditWrapProps
} from './types'

const ButtonsBox = styled.div`
  margin-top: -4px;

  & > button:last-child {
    margin-left: 4px;
  }
`

const EditBox = styled.div<EditBoxProps>`
  cursor: text;
  width: 100%;

  & .div-editable-focus:focus-visible {
    outline: none;
  }
`

const EditWrap = styled.div<EditWrapProps>`
  z-index: 100;
  width: 100%;
  
  ${props => props.enabled && css`
    outline: 5px solid #ffa60021;
    outline-offset: 5px;
    width: 100%;
  `}

  ${props => props.saving && css`
    outline: 5px solid #14a314cc;
    outline-offset: 5px;
    width: 100%;
  `}

  ${props => props.selected && css`
    outline: 5px solid #ffbb008b;
    outline-offset: 5px;
    width: 100%;
  `}
`

export {
  ButtonsBox,
  EditBox,
  EditWrap
}