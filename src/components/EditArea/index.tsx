import React from 'react'
import ContentEditable from 'react-contenteditable'

import { 
  ButtonsBox,
  EditBox
} from './styled'
import { EditButtonsType } from './types'
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
  modified,
  saving,
  set_modified,
  state
}) => {
  if(!enabled) {
    return children
  }
  const handleChange = (event) => {
    state.current = event.target.value
    set_modified(true)
  }
  return (
    <EditBox
      modified={modified}
      saving={saving}>
      <ContentEditable
        className='div-editable-focus'
        contentEditable={true}
        html={state.current}
        onChange={handleChange} 
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