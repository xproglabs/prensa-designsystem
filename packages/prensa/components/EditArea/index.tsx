// @ts-nocheck
import React from 'react'
import ContentEditable from 'react-contenteditable'

import { 
  ButtonsBox,
  EditBox
} from './styled'
import {
  EditAreaType,
  EditButtonsType
} from './types'
/**
 * EditArea allows teaser wysiwyg
 * @param children text to be edited
 * @param enabled check if is enabled
 * @param saving set teaser in edition
 * @param set_modified set teaser in edition
 * @param state reference to field
 * @returns 
 */
const EditArea = ({
  children,
  enabled,
  set_modified,
  set_selected,
  state
}: EditAreaType) => {
  if(!enabled) {
    return children
  }
  const handleBlur = () => {
    set_selected && set_selected(false)
  }
  const handleChange = (event) => {
    state.current = event.target.value
    set_modified && set_modified(true)
  }
  const handleFocus = () => {
    set_selected && set_selected(true)
  }
  return (
    <EditBox>
      <ContentEditable
        className='div-editable-focus'
        contentEditable={true}
        html={state?.current}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        suppressContentEditableWarning={true}
      />
    </EditBox>
  )
}
/**
 * EditButtons allows teaser "wysiwyg"
 * @param action to handle submit
 * @param enabled check if is enabled
 * @param reset to handle reset
 * @returns
 */
const EditButtons = ({
  action,
  enabled,
  reset
}: EditButtonsType) => {
  if(!enabled) {
    return <></>
  }
  const handleReset = () => reset()
  const handleSubmit = () => {
    action()
  }
  return (
    <ButtonsBox>
      <button onClick={handleReset}>resetar</button>
      <button onClick={handleSubmit}>salvar</button>
    </ButtonsBox>
  )
}
export {
  EditArea,
  EditButtons
}