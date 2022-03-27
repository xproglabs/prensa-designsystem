import { get } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import InputMask from 'react-input-mask'
import { withTheme } from 'styled-components'

import Block from '../NewBlock/index.tsx'
import FieldLabel from './FieldLabel'
import FieldMessage from './FieldMessage'
import { Input, InputContainer } from './styled'

// eslint-disable-next-line react/display-name
const Field = React.forwardRef((props, ref) => {

  const {
    icon,
    label,
    styledLabel,
    styledMessage,
    styledInput,
    styledField,
    styledRoot,
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
    mask,
    onEnterKey,
    size
  } = props
  
  const styledLabelDefaultProps = {
    fontSize: get(styledLabel, 'fontSize', '14px'),
    fontWeight: get(styledLabel, 'fontWeight', 400),
    fontFamily: get(styledLabel, 'fontFamily', 'secondary'),
    color: get(styledLabel, 'color', 'neutral5'),
    mt: get(styledLabel, 'mt', 0.5),
    mr: get(styledLabel, 'mr', undefined),
    mb: get(styledLabel, 'mb', 0.5),
    ml: get(styledLabel, 'ml', undefined)
  }
  
  const styledMessageDefaultProps = {
    fontSize: get(styledMessage, 'fontSize', '14px'),
    fontWeight: get(styledMessage, 'fontWeight', 400),
    fontFamily: get(styledMessage, 'fontFamily', 'secondary'),
    color: get(styledMessage, 'color', 'error1'),
    mt: get(styledMessage, 'mt', 0.5),
    mr: get(styledMessage, 'mr', undefined),
    mb: get(styledMessage, 'mb', 0.5),
    ml: get(styledMessage, 'ml', undefined)
  }
  
  const styledInputDefaultProps = {
    $color: get(styledInput, 'color', 'neutral5'),
    $radius: get(styledInput, 'radius', 'default'),
    size: size
  }
  
  const styledRootDefaultProps = {
    $fontSize: get(styledRoot, 'fontSize', '14px'),
    $fontWeight: get(styledRoot, 'fontWeight', 400),
    $fontFamily: get(styledRoot, 'fontFamily', 'secondary'),
    $color: get(styledRoot, 'color', 'neutral2'),
    placeholderColor: get(styledRoot, 'placeholderColor'),
    $radius: get(styledInput, 'radius', 'default'),
  }
  
  const styledFieldDefaultProps = {
    mt: get(styledField, 'mt', 0.5),
    mr: get(styledField, 'mr', undefined),
    mb: get(styledField, 'mb', 0.5),
    ml: get(styledField, 'ml', undefined),
  }
  
  const handleChange = event => {
    onChange(event.target.value)
  }
  
  const renderIcon = () => {
    if (!icon) return null
    const iconHasOnClick = icon.props && icon.props.onClick ? icon.props.onClick : false
    return React.cloneElement(icon, { onClick: iconHasOnClick ? iconHasOnClick : onIconClick })
  }
  
  const renderLabel = () => {
    if (!label) return null
    return <FieldLabel {...styledLabelDefaultProps}>{label}</FieldLabel>
  }
  
  const renderMessage = () => {
    if (validation === true) return null
    return <FieldMessage {...styledMessageDefaultProps}>{validationMessage}</FieldMessage>
  }
  
  const handleKeyPress = ({ key }) => {
    if (typeof onEnterKey === 'function') {
      if (key === 'Enter') onEnterKey()
    }
  }

  const inputProps = {
    name: name,
    type: type,
    id: id,
    value: value,
    on: on,
    onChange: handleChange,
    disabled: disabled,
    mask: mask,
    placeholder: placeholder,
    validation: validation,
    onKeyPress: handleKeyPress,
  }
  
  return (    
    <Block {...styledFieldDefaultProps} width='100%'>
      {renderLabel()}
      <InputContainer validation={validation} {...styledInputDefaultProps}>
        {mask ? 
          <InputMask {...inputProps}>
            <Input ref={ref} {...styledRootDefaultProps} />
          </InputMask>
          :
          <Input ref={ref} {...inputProps} {...styledRootDefaultProps} />
        }
        {renderIcon()}
      </InputContainer>
      {renderMessage()}
    </Block>
  )
})

Field.defaultProps = {
  validation: true,
  disabled: false,
  size: '40px'
}

Field.propTypes = {
  /**
   * Props de estilo para o Label do Field
   */
  styledLabel: PropTypes.shape({
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fontWeight: PropTypes.number,
    fontFamily: PropTypes.oneOf(['primary', 'secondary']),
    color: PropTypes.string,
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
    color: PropTypes.string,
    mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ml: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  /**
   * Props de estilo para o elemento input HTML
   */
  styledInput: PropTypes.shape({
    color: PropTypes.string,
    radius: PropTypes.oneOf(['unset', 'default', 'alternative'])
  }),
  /**
   * Props de estilo para o componente HTML input
   */
  styledRoot: PropTypes.shape({
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fontWeight: PropTypes.number,
    fontFamily: PropTypes.oneOf(['primary', 'secondary']),
    radius: PropTypes.oneOf(['unset', 'default', 'alternative']),
    placeholderColor: PropTypes.string,
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
  /**
   * Função executada quando ocorrer o clique na tecla "Enter"
   */
  onEnterKey: PropTypes.func,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withTheme(Field)