import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import styled, {withTheme} from 'styled-components';

const parseFontColor = props => {
  const {fontColor, buttonVariant, disabled, theme} = props;
  if (disabled && buttonVariant !== 'filled') return theme.colors.neutral8;
  if (fontColor) return theme.parseColorValue(props, 'fontColor');
  if (buttonVariant === 'outlined' || buttonVariant === 'ghost') return theme.parseColorValue(props, 'buttonColor');
  return theme.colors.white;
};
const parseFontFamily = props => {
  const {inheritFontStyle, theme} = props;
  if (inheritFontStyle) return 'inherit';
  return `${theme.fonts.primary}`;
};

//Get button size (height)
const getSize = props => {
  const factor = props.theme.factors.margin;
  const size = props.buttonSize;
  if (isNaN(size)) return `height: ${size}`;
  if (size < 4) return `height: ${factor * 4}px`;
  return `height: ${factor * props.buttonSize}px`;
};

//Get button width variations from props
const getWidth = props => {
  const factor = props.theme.factors.margin;
  const size = props.buttonWidth;
  if (typeof size === 'string') return `width: ${size}`;
  if (size) return `width: ${factor * size}px`;
  if (isNaN(size)) return `width: ${size}`;
  if (props.fullWidth) return 'width: 100%;';
  return 'width: max-content;';
};
//Get button variations from props (return style matching the variation)
const getVariations = props => {
  switch(props.buttonVariant) {
    case 'outlined':
      return `
        background-color: transparent;
        border-width: 1px;
        border-style: solid;
        border-color: ${props.theme.parseColorValue(props, 'buttonColor')};
        &:disabled {
          border-color: ${props.theme.colors.neutral8};
        }
      `;
    case 'ghost':
      return `
        background-color: transparent;
      `;
    case 'filled':
    default: 
      return `
        background-color: ${props.theme.parseColorValue(props, 'buttonColor')};
        &:disabled {
          background-color: ${props.theme.colors.neutral8};
        }
      `;
  }
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: max-content;
  text-transform: uppercase;
  border: unset;
  cursor: pointer;
  svg {
    fill: ${props => parseFontColor(props)};
    width: 24px;
    height: 24px;
  }
  span {
    margin-left: 8px;
    margin-right: 8px;
    color: ${props => parseFontColor(props)};
    font-size: 14px;
    font-weight: 400;
    font-family: ${props => parseFontFamily(props)};
  }
  &:disabled {
    cursor: unset;
    &:hover {
      animation-name: none;
    }
  }
  &:hover {
    animation-name: buttonHover;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }
  @keyframes buttonHover {
    from {opacity: 100%;}
    to {opacity: 80%;}
  }
  ${props => props.theme.parsePadding(props.theme, props)};
  ${props => props.theme.parseRadius(props, 'borderRadius')};
  ${props => getVariations(props)};
  ${props => getSize(props)};
  ${props => getWidth(props)};
`;

const StyledAria = styled.a`
  max-width: max-content;
  text-decoration: unset;
`;

const Button = ({
  children,
  color,
  disabled,
  fontColor,
  buttonWidth,
  fullWidth,
  leftIcon,
  onClick,
  radius,
  rightIcon,
  size,
  style,
  variant,
  loading,
  enterKey,
  px,
  on,
  path
}) => {

  // Trigger to Handle enter keydown for forms
  const handleKeyPress = event => {
    if (event.keyCode === 13) enterKey();
  };
  useEffect(() => {
    enterKey && window.addEventListener('keydown', handleKeyPress);
    return () => enterKey && window.removeEventListener('keydown', handleKeyPress);
  });

  const renderRoot = () => {
    return (
      <StyledButton
        onClick={onClick}
        px={px}
        disabled={disabled}
        buttonColor={color}      
        fontColor={fontColor}
        borderRadius={radius}
        buttonVariant={variant}
        buttonSize={size}
        buttonWidth={buttonWidth}
        fullWidth={fullWidth}
        style={style}
        on={on}
      >
        {loading && 'Carregando...'}
        {leftIcon && leftIcon}
        <span>{children}</span>
        {rightIcon && rightIcon}
      </StyledButton>
    );
  };

  return path ? <StyledAria href={path} target='_blank'>{renderRoot()}</StyledAria> : renderRoot();
};

Button.propTypes = {
  /**
   * Corresponde ao texto escrito do botão
   */
  children: PropTypes.string.isRequired,
  /**
   * Altera a cor geral do componente
   */
  color: PropTypes.string,
  /**
   * Ativa/desativa o estado disabed nativo do elemento
   */
  disabled: PropTypes.bool,
  /**
   * Permite a troca da cor da fonte para casos específicos
   */
  fontColor: PropTypes.string,
  /**
   * Ativa o estilo com largura máxima para o botão (cresce 100% do width disponível)
   */
  fullWidth: PropTypes.bool,
  /**
   * Ativa o estilo com largura customizado em pixels
   */
  buttonWidth: PropTypes.bool,
  /**
   * Permite a passagem de um componente SVG para ícone no lado esquerdo
   */
  leftIcon: PropTypes.element,
  /**
   * Lida com o evento de clique do botão
   */
  onClick: PropTypes.func,
  /**
   * Permite a escolha do token para border-radius
   */
  radius: PropTypes.oneOf([false, 'default', 'alternative']),
  /**
   * Permite a passagem de um ícone à direita
   */
  rightIcon: PropTypes.element,
  /**
   * Permite a escolha de um tamanho (height) para o botão
   */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Passagem de estilos customizados inline
   */
  style: PropTypes.object,
  /**
   * Permite a escolha de uma das variações de estrutura do componente
   */
  variant: PropTypes.oneOf(['filled', 'outlined', 'ghost']),
  /**
   * Ativa a informação "Carregando"
   */
  loading: PropTypes.bool,
  /**
   * Recebe o evento de clique na tecla enter | return através de uma função
   */
  enterKey: PropTypes.func,
  /**
   * Permite alterar o espacamento interno no botão
   */
  px: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * AMP :: Props equivalente a onClick, executa a ação do clique no AMP
   */
  on: PropTypes.string,
  /**
   * AMP :: Props equivalente a onClick, executa a ação de clique para links externos
   */
  path: PropTypes.string,
};

Button.defaultProps = {
  px: 2,
  disabled: false,
  variant: 'filled',
  color: 'primary1',
  radius: 'default',
  size: 4,
  loading: false
};

export default withTheme(Button);