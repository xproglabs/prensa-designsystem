import styled, { css } from 'styled-components'

import { EditBoxProps } from './types'

const ButtonsBox = styled.div`
  background-color: rgba(0,0,0,0.2);
  margin-top: 8px;
  padding: 8px;
  outline: 2px solid rgba(0,0,0,0.4);;
  width: calc(100% - 16px);
`

const EditBox = styled.div<EditBoxProps>`
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: rgba(255, 225, 50, 0.50);
    color: black;
  }

  & > .div-editable-focus:focus-visible {
    background-color: rgba(255, 225, 50, 0.50);
    outline: 2px solid rgba(0,0,0,0.3);
    color: black;
  }

  ${props => props.modified && css`
    background-color: rgba(255, 225, 50, 1);
    color: black;
    outline: 2px solid #b48d43;
  `}

  ${props => props.saving && css`
    background-color: rgba(50, 225, 50, 0.3);
    color: black;
    outline: 2px solid #128b37;
  `}
`
export {
  ButtonsBox,
  EditBox
}