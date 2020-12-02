import {get} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {colors} from '../../styles/theme';
import colorProps from '../../styles/variables/colors.json';

const parseNumberToString = (param) => {
  return `${param}px`;
};

const getFromProps = (props, param, defaultValue) => {
  const defaultIsNumber = Number.isInteger(defaultValue);
  const value = defaultIsNumber ? parseNumberToString(defaultValue) : defaultValue;
  return get(props, param, value);
};

const validateStyle = (props) => {
  const isValid = get(props, 'validation', true);
  if (!isValid) return colors.error1;
  if (props.borderColor) return props.borderColor;
  return colors.neutral9;
};

const Container = styled.div`
  margin-top: ${props => getFromProps(props, 'marginTop', 0)};
  margin-bottom: ${props => getFromProps(props, 'marginBottom', props.validation === false ? 12 : 32)};
  margin-left: ${props => getFromProps(props, 'marginLeft', 0)};
  margin-right: ${props => getFromProps(props, 'marginRight', 0)};
`;
const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 400;
  font-family: ${props => props.fontFamily ? props.fontFamily : 'Roboto'};
  color: ${props => getFromProps(props, 'fontColor', '#707070')};
  text-transform: capitalize;
`;
const StyledInput = styled.input`
  width: calc(100% - 6px - 16px);
  height: 40px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => validateStyle(props)};
  padding-left: 8px;
  padding-right: 8px;
  margin-top: 2px;
  border-radius: ${props => getFromProps(props, 'radius', 5)};
  font-size: 14px;
  font-weight: 400;
  font-family: ${props => props.fontFamily ? props.fontFamily : 'Roboto'};
  color: #333333;
  &:focus {
    outline-color: ${props => getFromProps(props, 'activeColor', colors.primary1)};
  }
`;

const ErrorMessage = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-family: ${props => props.fontFamily ? props.fontFamily : 'Roboto'};
  color: ${colors.error1};
  text-transform: capitalize;
  margin-top: 4px;
  margin-bottom: 0px;
  height: 16px;
`;

const Field = ({
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  label,
  radius,
  onChange,
  type,
  value,
  fontFamily,
  activeColor,
  borderColor,
  validation,
  validationMessage
}) => {

  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <Container marginTop={marginTop} marginRight={marginRight} marginBottom={marginBottom} marginLeft={marginLeft} validation={validation}>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput type={type} value={value} onChange={handleChange} radius={radius} fontFamily={fontFamily} activeColor={activeColor} borderColor={borderColor} validation={validation} />
      {validation === false && <ErrorMessage>{validationMessage}</ErrorMessage>}
    </Container>
  );
};

Field.propTypes = {
  marginTop: PropTypes.number,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  label: PropTypes.string,
  radius: PropTypes.number,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
  validation: PropTypes.oneOf([true, false]).isRequired,
  validationMessage: PropTypes.string.isRequired,
  fontFamily: PropTypes.string,
  //STYLE PROPS
  activeColor: PropTypes.oneOf(colorProps),
  borderColor: PropTypes.oneOf(colorProps)
};

Field.defaultProps = {
  validation: true
};

export default Field;