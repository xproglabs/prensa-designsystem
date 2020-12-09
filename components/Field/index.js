import {get} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import {withTheme} from 'styled-components';

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
  if (!isValid) return props.theme.colors.error1;
  if (props.borderColor) return props.borderColor;
  return props.theme.colors.neutral9;
};

const validateIcon = props => {
  const isValid = get(props, 'validation', true);
  if (!isValid) return props.theme.colors.error1;
  if (props.iconColor) return props.iconColor;
  return props.theme.colors.neutral5;
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
  font-family: ${props => props.fontFamily ? props.fontFamily : props.theme.fonts.fontPrimary};
  color: ${props => getFromProps(props, 'fontColor', props.theme.colors.neutral5)};
  text-transform: capitalize;
`;
const InputContainer = styled.div`
  width: calc(100% - 2px);
  height: 40px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => validateStyle(props)};
  border-radius: ${props => getFromProps(props, 'radius', 5)};
  display: flex;
  align-items: center;
  svg {
    width: 32px;
    height: 32px;
    margin-right: 8px;
    fill: ${props => validateIcon(props)};
    cursor: pointer;
  }
  &:focus-within {
    border-color: ${props => getFromProps(props, 'activeColor', props.theme.colors.primary1)};
    border-width: 2px;
    width: calc(100% - 3px);
    height: calc(40px - 2px);
  }
`;
const StyledInput = styled.input`
  width: calc(100% - 16px);
  height: calc(100% - 2px);
  padding-left: 8px;
  padding-right: 8px;
  font-size: 14px;
  font-weight: 400;
  font-family: ${props => props.fontFamily ? props.fontFamily : props.theme.fonts.fontPrimary};
  border-radius: ${props => getFromProps(props, 'radius', 5)};
  border-color: unset;
  border-width: unset;
  border-style: unset;
  &:focus {
    outline-color: unset;
    outline-width: unset;
    outline-style: none;
  }
`;

const ErrorMessage = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-family: ${props => props.fontFamily ? props.fontFamily : props.theme.fonts.fontPrimary};
  color: ${props => props.theme.colors.error1};
  margin-top: 4px;
  margin-bottom: 0px;
  height: 16px;
`;

const Field = ({
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  icon,
  label,
  radius,
  onChange,
  onIconClick,
  type,
  value,
  fontFamily,
  activeColor,
  borderColor,
  fontColor,
  iconColor,
  validation,
  validationMessage
}) => {

  const handleChange = event => {
    onChange(event.target.value);
  };

  const getIconFromProps = () => {
    const iconHasOnClick = icon.props && icon.props.onClick ? icon.props.onClick : false;
    return React.cloneElement(icon, {onClick: iconHasOnClick ? iconHasOnClick : onIconClick});
  };

  return (
    <Container marginTop={marginTop} marginRight={marginRight} marginBottom={marginBottom} marginLeft={marginLeft} validation={validation}>
      <StyledLabel fontColor={fontColor}>{label}</StyledLabel>
      <InputContainer radius={radius} activeColor={activeColor} validation={validation} borderColor={borderColor} iconColor={iconColor}>
        <StyledInput type={type} value={value} onChange={handleChange} radius={radius} fontFamily={fontFamily} activeColor={activeColor} borderColor={borderColor} validation={validation} fontColor={fontColor} />
        {icon && getIconFromProps()}
      </InputContainer>
      {validation === false && <ErrorMessage>{validationMessage}</ErrorMessage>}
    </Container>
  );
};

Field.propTypes = {
  /**
   * Corresponde a um margin-top
   */
  marginTop: PropTypes.number,
  /**
   * Corresponde a um margin-right
   */
  marginRight: PropTypes.number,
  /**
   * Corresponde a um margin-bottom
   */
  marginBottom: PropTypes.number,
  /**
   * Corresponde a um margin-left
   */
  marginLeft: PropTypes.number,
  /**
   * Possibilita adicionar um ícone à direita do Field
   */
  icon: PropTypes.element,
  /**
   * Função executada ao clicar no ícone
   */
  onIconClick: PropTypes.func,
  /**
   * Adiciona um label ao Field
   */
  label: PropTypes.string,
  /**
   * Modifica o radius do Field
   */
  radius: PropTypes.number,
  /**
   * Função executada ao modificar o valor do Field
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Props que recebe o type do Field (prop nativa do elemento)
   */
  type: PropTypes.string,
  /**
   * Recebe o valor do Field (prop nativa do elemento)
   */
  value: PropTypes.string,
  /**
   * Recebe o estado do componente (true para padrão e false para erro)
   */
  validation: PropTypes.oneOf([true, false]).isRequired,
  /**
   * Recebe a mensagem de validação (renderizada quando validation = false)
   */
  validationMessage: PropTypes.string.isRequired,
  //STYLE PROPS
  /**
   * Altera a família da fonte do input (conectada ao theme)
   */
  fontFamily: PropTypes.string,
  /**
   * Altera a cor do Field quando estiver no estado ATIVO (focused) (conectada ao theme)
   */
  activeColor: PropTypes.oneOf(colorProps),
  /**
   * Altera a cor da borda do Field (conectada ao theme)
   */
  borderColor: PropTypes.oneOf(colorProps),
  /**
   * Altera a cor da fonte do Field (conectada ao theme)
   */
  fontColor: PropTypes.oneOf(colorProps),
  /**
   * Altera a cor do ícone (caso ativo) (conectada ao theme)
   */
  iconColor: PropTypes.oneOf(colorProps)
};

Field.defaultProps = {
  validation: true
};

export default withTheme(Field);