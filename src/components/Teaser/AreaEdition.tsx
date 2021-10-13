import React from 'react'
import ContentEditable from 'react-contenteditable'
import styled, { css } from 'styled-components'

interface AreaStyledProps {
  modified: boolean;
  saving: boolean;
}
const AreaStyled = styled.div<AreaStyledProps>`
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
/**
 * Area Edition allows teaser wysiwyg
 * @param children text to be edited
 * @param enabled check if is enabled
 * @param saving set teaser in edition
 * @param set_modified set teaser in edition
 * @param state reference to field
 * @returns 
 */
const AreaEdition = ({
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
    <AreaStyled
      modified={modified}
      saving={saving}>
      <ContentEditable
        className='div-editable-focus'
        contentEditable={true}
        html={state.current}
        onChange={handleChange} 
        suppressContentEditableWarning={true}
      />
    </AreaStyled>
  )
}

export default AreaEdition