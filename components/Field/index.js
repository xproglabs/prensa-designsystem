import {get} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import InputMask from 'react-input-mask';
import {withTheme} from 'styled-components';

import colorProps from '../../styles/variables/colors.json';
import Block from '../Block';
import FieldLabel from './FieldLabel';
import FieldMessage from './FieldMessage';
import {Input, InputContainer} from './styled';

const Field = props => {

  const {
    icon,
    label,
    styledLabel,
    styledMessage,
    styledInput,
    styledField,
    onChange,
    onIconClick,
    type,
    value,
    validation,
    validationMessage,
    placeholder,
    disabled,
    on,
    id,
    name,
    mask
  } = props;

  const styledLabelDefaultProps = {
    fontSize: get(styledLabel, 'fontSize', '14px'),
    fontWeight: get(styledLabel, 'fontWeight', 400),
    fontFamily: get(styledLabel, 'fontFamily', 'secondary'),
    color: get(styledLabel, 'color', 'neutral5'),
    mt: get(styledLabel, 'mt', 0.5),
    mr: get(styledLabel, 'mr', undefined),
    mb: get(styledLabel, 'mb', 0.5),
    ml: get(styledLabel, 'ml', undefined)
  };

  const styledMessageDefaultProps = {
    fontSize: get(styledMessage, 'fontSize', '14px'),
    fontWeight: get(styledMessage, 'fontWeight', 400),
    fontFamily: get(styledMessage, 'fontFamily', 'secondary'),
    color: get(styledMessage, 'color', 'error1'),
    mt: get(styledMessage, 'mt', 0.5),
    mr: get(styledMessage, 'mr', undefined),
    mb: get(styledMessage, 'mb', 0.5),
    ml: get(styledMessage, 'ml', undefined)
  };

  const styledInputDefaultProps = {
    $fontSize: get(styledInput, 'fontSize', '14px'),
    $fontWeight: get(styledInput, 'fontWeight', 400),
    $fontFamily: get(styledInput, 'fontFamily', 'secondary'),
    $color: get(styledInput, 'color', 'neutral5'),
    $radius: get(styledInput, 'radius', 'default'),
  };

  const styledFieldDefaultProps = {
    mt: get(styledField, 'mt', 0.5),
    mr: get(styledField, 'mr', undefined),
    mb: get(styledField, 'mb', 0.5),
    ml: get(styledField, 'ml', undefined)
  };

  const handleChange = event => {
    onChange(event.target.value);
  };

  const renderIcon = () => {
    if (!icon) return null;
    const iconHasOnClick = icon.props && icon.props.onClick ? icon.props.onClick : false;
    return React.cloneElement(icon, {onClick: iconHasOnClick ? iconHasOnClick : onIconClick});
  };

  const renderLabel = () => {
    if (!label) return null;
    return <FieldLabel {...styledLabelDefaultProps}>{label}</FieldLabel>;
  };

  const renderMessage = () => {
    if (validation === true) return null;
    return <FieldMessage {...styledMessageDefaultProps}>{validationMessage}</FieldMessage>;
  };

  return (    
    <Block {...styledFieldDefaultProps} fullWidth>
      {renderLabel()}
      <InputContainer validation={validation} {...styledInputDefaultProps}>
        <InputMask
          name={name}
          type={type}
          id={id}
          value={value}
          on={on}
          onChange={handleChange}
          disabled={disabled}
          mask={mask}
          placeholder={placeholder}
          validation={validation}
          {...styledInputDefaultProps}
        >
          <Input />
        </InputMask>
        {renderIcon()}
      </InputContainer>
      {renderMessage()}
    </Block>
  );
};

Field.defaultProps = {
  validation: true,
  disabled: false,
};

Field.propTypes = {
  /**
   * Props de estilo para o Label do Field
   */
  styledLabel: PropTypes.shape({
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fontWeight: PropTypes.number,
    fontFamily: PropTypes.oneOf(['primary', 'secondary']),
    color: PropTypes.oneOf(colorProps),
    mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ml: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  /**
   * Props de estilo para a mensagem de erro
   */
  styledMessage: PropTypes.shape({
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fontWeight: PropTypes.number,
    fontFamily: PropTypes.oneOf(['primary', 'secondary']),
    color: PropTypes.oneOf(colorProps),
    mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ml: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  /**
   * Props de estilo para o elemento input HTML
   */
  styledInput: PropTypes.shape({
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fontWeight: PropTypes.number,
    fontFamily: PropTypes.oneOf(['primary', 'secondary']),
    color: PropTypes.oneOf(colorProps),
    radius: PropTypes.oneOf(['unset', 'default', 'alternative'])
  }),
  /**
   * Props de estilo para o componente React Field
   */
  styledField: PropTypes.shape({
    mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ml: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  /**
   * Ativa/desativa o estado disabled do input
   */
  disabled: PropTypes.bool,
  /**
   * Ativa ou desativa o uso do placeholder (recebe o texto)
   */
  placeholder: PropTypes.string,
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
   * Função disparada ao modificar o valor do Field
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Permite assinalar um id para o elemento input raíz
   */
  id: PropTypes.string,
  /**
   * Props que recebe o type do Field (prop nativa HTML)
   */
  type: PropTypes.string,
  /**
   * Recebe o valor do Field (prop nativa do HTML)
   */
  value: PropTypes.string,
  /**
   * Prop para nomear o elemento HTML (prop nativa do HTML)
   */
  name: PropTypes.string,
  /**
   * Recebe o estado do componente (true para padrão e false para erro)
   */
  validation: PropTypes.oneOf([true, false]),
  /**
   * Recebe a mensagem de validação (renderizada quando validation = false)
   */
  validationMessage: PropTypes.string,
  /**
   * AMP: Permite ação de clique e manipulação do estado
   */
  on: PropTypes.string,
  /**
   * Permite a aplicação de uma máscara no input
   */
  mask: PropTypes.string,
};

export default withTheme(Field);