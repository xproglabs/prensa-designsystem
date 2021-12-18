import styled from 'styled-components'

const renderXPosition = ({ isNext }) => {
  if (isNext) return 'right: 0;'
  return 'left: 0;'
}

const renderYPosition = () => {
  // calc(50% - buttonHeight / 2 - buttonMargin)
  return 'top: calc(50% - 17px - 16px);'
}

export const Button = styled.button`
  background-color: rgba(0,0,0,.5);
  border-radius: 2px;
  border: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  margin: 16px;
  position: absolute;
  z-index: 10;
  ${renderXPosition};
  ${renderYPosition};
  &:focus {
    outline: 1px solid white;
    border: 1px solid black;
  }
`