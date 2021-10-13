import React from 'react'
import styled, { css } from 'styled-components'

const AreaStyled = styled.div`
  background-color: rgba(0,0,0,0.2);
  margin-top: 8px;
  padding: 8px;
  outline: 2px solid rgba(0,0,0,0.4);;
  width: calc(100% - 16px);
`

interface AreaButtonsType {
  action: any;
  enabled: boolean;
  reset: any;
}
/**
 * Area Buttons allows teaser wysiwyg
 * @param action to handle submit
 * @param enabled check if is enabled
 * @param reset to handle reset
 * @returns 
 */
const AreaButtons = ({
  action,
  enabled,
  reset
}: AreaButtonsType) => {
  if(!enabled) {
    return <></>
  }
  const handleReset = () => reset()
  const handleSubmit = () => {
    action()
  }
  return (
    <AreaStyled>
      <button onClick={handleReset}>resetar</button>
      <button onClick={handleSubmit}>salvar</button>
    </AreaStyled>
  )
}

export default AreaButtons