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
    labelProps,
    messageProps,
    inputProps,    
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
    return <FieldLabel {...labelProps}>{label}</FieldLabel>;
  };

  const renderMessage = () => {
    if (validation === true) return null;
    return <FieldMessage {...messageProps}>{validationMessage}</FieldMessage>;
  };

  const inputItinerantProps = {
    $fontSize: inputProps.fontSize,
    $fontWeight: inputProps.fontWeight,
    $fontFamily: inputProps.fontFamily,
    $color: inputProps.color,
    $radius: inputProps.radius,
  };

  return (
    <Block mt={props.mt} mr={props.mr} mb={props.mb} ml={props.ml} fullWidth>
      {renderLabel()}
      <InputContainer
        validation={validation}
        {...inputItinerantProps}
      >
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
          {...inputItinerantProps}
        >
          {forwardedProps => <Input {...forwardedProps} />}
        </InputMask>
        {renderIcon()}
      </InputContainer>
      {renderMessage()}
    </Block>
  );
};

Field.propTypes = {
  labelProps: PropTypes.shape({
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fontWeight: PropTypes.number,
    fontFamily: PropTypes.oneOf(['primary', 'secondary']),
    color: PropTypes.oneOf(colorProps),
    mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ml: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  messageProps: PropTypes.shape({
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fontWeight: PropTypes.number,
    fontFamily: PropTypes.oneOf(['primary', 'secondary']),
    color: PropTypes.oneOf(colorProps),
    mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ml: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  inputProps: PropTypes.shape({
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fontWeight: PropTypes.number,
    fontFamily: PropTypes.oneOf(['primary', 'secondary']),
    color: PropTypes.oneOf(colorProps),
    radius: PropTypes.oneOf(['unset', 'default', 'alternative'])
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
   * Permite aplicação de margin no componente
   */
  mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ml: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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

Field.defaultProps = {
  labelProps: {
    fontSize: '14px',
    fontWeight: 400,
    fontFamily: 'secondary',
    color: 'neutral5',
    mb: 0.5
  },
  messageProps: {
    fontSize: '14px',
    fontWeight: 400,
    fontFamily: 'secondary',
    color: 'error1',
    mt: 0.5,
    mb: 0.5
  },
  inputProps: {
    fontSize: '14px',
    fontWeight: 400,
    fontFamily: 'secondary',
    color: 'neutral5',
    radius: 'default',
  },
  validation: true,
  mt: 0.5,
  mb: 0.5
};

export default withTheme(Field);