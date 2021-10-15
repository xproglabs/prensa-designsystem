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
  cursor: pointer;
  width: 100%;

  & .div-editable-focus:focus-visible {
    outline: none;
  }
`

const EditWrap = styled.div<EditWrapProps>`
  z-index: 100;
  
  ${props => props.enabled && css`
    outline: 5px solid rgba(0,0,0,0.4);
    outline-offset: 8px;
    width: 100%;
  `}

  ${props => props.saving && css`
    outline: 4px solid rgba(50, 225, 50,0.8);
    outline-offset: 4px;
    width: 100%;
  `}

  ${props => props.selected && css`
    outline: 4px solid rgba(200,200,0,0.8);
    outline-offset: 4px;
    width: 100%;
  `}
`

export {
  ButtonsBox,
  EditBox,
  EditWrap
}