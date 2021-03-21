import {get} from 'lodash';
import styled from 'styled-components';

const handleFontFamily = props => {
  const theme = get(props, 'theme.fonts');
  const value = get(props, '$fontFamily');
  return theme[value];
};

const handleBorderRadius = props => {
  const theme = get(props, 'theme.radius');
  const value = get(props, '$radius');
  return theme[value];
};

const handleColor = props => {
  const isValid = get(props, 'validation');
  const theme = get(props, 'theme.colors');
  const value = get(props, '$color');
  //Static rule for false validation (apply color error1)
  if (isValid === false) return theme.error1;
  return theme[value];
};

const handleFocusedColor = props => {
  const isValid = get(props, 'validation');
  const theme = get(props, 'theme.colors');
  if (isValid === false) return theme.error1;
  //Static rule to return activeSystemColor to label border
  return theme.activeColor;
};

export const Input = styled.input`
  width: calc(100% - 16px);
  height: calc(100% - 2px);
  padding-left: 8px;
  padding-right: 8px;
  font-size: 14px;
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
`;

export const InputContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 40px;
  box-shadow: ${props => `0 0 0 1px ${handleColor(props)}`};
  display: flex;
  align-items: center;
  border-radius: ${handleBorderRadius};
  &:focus-within {
    box-shadow: ${props => `0 0 0 2px ${handleFocusedColor(props)}`};
  }
`;