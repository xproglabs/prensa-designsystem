import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import styled, {withTheme} from 'styled-components';

import {parseProps} from './propsParser';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: max-content;
  text-transform: uppercase;
  border: unset;
  cursor: pointer;
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
  ${props => parseProps('', props)};
  ${props => props.xs && parseProps('xs', props)};
  ${props => props.sm && parseProps('sm', props)};
  ${props => props.md && parseProps('md', props)};
  ${props => props.lg && parseProps('lg', props)};
  ${props => props.xl && parseProps('xl', props)};
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
  fontFamily,
  fontWeight,
  fontSize,
  width,
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
  removeText,
  px,
  py,
  on,
  path,
  iconSize,
  xs,
  sm,
  md,
  lg,
  xl,
  custom,
  id,
  type,
  ariaLabel
}) => {

  //check if children is string
  const childrenIsString = typeof children === 'string';

  // Trigger to Handle enter keydown for forms
  const handleKeyPress = event => {
    if (event.keyCode === 13) enterKey();
  };
  useEffect(() => {
    enterKey && window.addEventListener('keydown', handleKeyPress);
    return () => enterKey && window.removeEventListener('keydown', handleKeyPress);
  });

  //All props with $ are forwarded ONLY to components (Not to HTML like onClick)
  const getXsProps = () => xs && ({
    $color: xs.color ? xs.color : color,
    $variant: xs.variant ? xs.variant : variant,
    $radius: xs.radius ? xs.radius : radius,
    $size: xs.size ? xs.size : size,
    $width: xs.width ? xs.width : width,
    $fontWeight: fontWeight,
    $fontSize: fontSize,
    $fontFamily: fontFamily,
    removeText: xs.removeText !== undefined ? xs.removeText : removeText,
    iconSize: xs.iconSize ? xs.iconSize : iconSize,
    px: xs.px ? xs.px : px,
    py: xs.py ? xs.py : py,
    custom: custom,
  });
  const getSmProps = () => sm && ({
    $color: sm.color ? sm.color : color,
    $variant: sm.variant ? sm.variant : variant,
    $radius: sm.radius ? sm.radius : radius,
    $size: sm.size ? sm.size : size,
    $width: sm.width ? sm.width : width,
    $fontWeight: fontWeight,
    $fontSize: fontSize,
    $fontFamily: fontFamily,
    removeText: sm.removeText !== 'undefined' ? sm.removeText : removeText,
    iconSize: sm.iconSize ? sm.iconSize : iconSize,
    px: sm.px ? sm.px : px,
    py: sm.py ? sm.py : py,
    custom: custom,
  });
  const getMdProps = () => md && ({
    $color: md.color ? md.color : color,
    $variant: md.variant ? md.variant : variant,
    $radius: md.radius ? md.radius : radius,
    $size: md.size ? md.size : size,
    $width: md.width ? md.width : width,
    $fontWeight: fontWeight,
    $fontSize: fontSize,
    $fontFamily: fontFamily,
    removeText: md.removeText !== undefined ? md.removeText : removeText,
    iconSize: md.iconSize ? md.iconSize : iconSize,
    px: md.px ? md.px : px,
    py: md.py ? md.py : py,
    custom: custom,
  });
  const getLgProps = () => lg && ({
    $color: lg.color ? lg.color : color,
    $variant: lg.variant ? lg.variant : variant,
    $radius: lg.radius ? lg.radius : radius,
    $size: lg.size ? lg.size : size,
    $width: lg.width ? lg.width : width,
    $fontWeight: fontWeight,
    $fontSize: fontSize,
    $fontFamily: fontFamily,
    removeText: lg.removeText !== undefined ? lg.removeText : removeText,
    iconSize: lg.iconSize ? lg.iconSize : iconSize,
    px: lg.px ? lg.px : px,
    py: lg.py ? lg.py : py,
    custom: custom,
  });
  const getXlProps = () => xl && ({
    $color: xl.color ? xl.color : color,
    $variant: xl.variant ? xl.variant : variant,
    $radius: xl.radius ? xl.radius : radius,
    $size: xl.size ? xl.size : size,
    $width: xl.width ? xl.width : width,
    $fontWeight: fontWeight,
    $fontSize: fontSize,
    $fontFamily: fontFamily,
    removeText: xl.removeText !== undefined ? xl.removeText : removeText,
    iconSize: xl.iconSize ? xl.iconSize : iconSize,
    px: xl.px ? xl.px : px,
    py: xl.py ? xl.py : py,
    custom: custom,
  });

  const renderRoot = () => {
    return (
      <StyledButton
        on={on}
        px={px}
        py={py}
        fullWidth={fullWidth}
        style={style}
        onClick={onClick}
        disabled={disabled}
        fontColor={fontColor}
        removeText={removeText}
        iconSize={iconSize}
        $color={color}   
        $variant={variant}
        $radius={radius}
        $size={size}
        $width={width}
        $fontFamily={fontFamily}
        $fontWeight={fontWeight}
        $fontSize={fontSize}
        xs={getXsProps()}
        sm={getSmProps()}
        md={getMdProps()}
        lg={getLgProps()}
        xl={getXlProps()}
        custom={custom}
        id={id}
        type={type}
        aria-label= {ariaLabel}
      >
        {loading && 'Carregando...'}
        {leftIcon && leftIcon}
        {children && childrenIsString && <span>{children}</span>}
        {children && !childrenIsString && children}
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
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Permite estilos customizados no componente
   */
  custom: PropTypes.string,
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
   * Permite alterar a largura do componente (disponível a família de tamanhos em Number e String)
   */
  width: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
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
  radius: PropTypes.oneOf(['unset', 'default', 'alternative']),
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
   * Permite alterar o espaçamento (x) interno no botão
   */
  px: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Permite alterar o espaçamento (y) interno no botão
   */
  py: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** 
   * Permite remover o texto do botão
   */
  removeText: PropTypes.bool,
  /**
   * Permite escolha de uma das propriedades do theme para font-family
   */
  fontFamily: PropTypes.string,
  /**
   * Permite a escolha de um font-weight para o texto do botão
   */
  fontWeight: PropTypes.number,
  /**
   * Permite alterar o tamanho da fonte interior do botão
   */
  fontSize: PropTypes.number,
  /**
   * AMP :: Props equivalente a onClick, executa a ação do clique no AMP
   */
  on: PropTypes.string,
  /**
   * AMP :: Props equivalente a onClick, executa a ação de clique para links externos
   */
  path: PropTypes.string,
  /**
   * Permite aumentar ou diminuir o tamanho do ícone no interior do botão
   */
  iconSize: PropTypes.string,
  xs: PropTypes.shape({
    color: PropTypes.string,
    variant: PropTypes.oneOf(['filled', 'outlined', 'ghost']),
    radius: PropTypes.oneOf(['unset', 'default', 'alternative']),
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    removeText: PropTypes.bool,
    iconSize: PropTypes.string,
    px: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    py: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  sm: PropTypes.shape({
    color: PropTypes.string,
    variant: PropTypes.oneOf(['filled', 'outlined', 'ghost']),
    radius: PropTypes.oneOf(['unset', 'default', 'alternative']),
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    removeText: PropTypes.bool,
    iconSize: PropTypes.string,
    px: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    py: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  md: PropTypes.shape({
    color: PropTypes.string,
    variant: PropTypes.oneOf(['filled', 'outlined', 'ghost']),
    radius: PropTypes.oneOf(['unset', 'default', 'alternative']),
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    removeText: PropTypes.bool,
    iconSize: PropTypes.string,
    px: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    py: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  lg: PropTypes.shape({
    color: PropTypes.string,
    variant: PropTypes.oneOf(['filled', 'outlined', 'ghost']),
    radius: PropTypes.oneOf(['unset', 'default', 'alternative']),
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    removeText: PropTypes.bool,
    iconSize: PropTypes.string,
    px: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    py: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  xl: PropTypes.shape({
    color: PropTypes.string,
    variant: PropTypes.oneOf(['filled', 'outlined', 'ghost']),
    radius: PropTypes.oneOf(['unset', 'default', 'alternative']),
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    removeText: PropTypes.bool,
    iconSize: PropTypes.string,
    px: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    py: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  /**
   * Permite passagem de um id para o elemento raíz button
   */
  id: PropTypes.string,
  /**
   * Permite a definição da prop type HTML para o componente
   */
  type: PropTypes.string,
  /**
   * Permite a definição de um aria-label para suporte à acessibilidade
   */
  ariaLabel: PropTypes.string,
};

Button.defaultProps = {
  px: 2,
  disabled: false,
  variant: 'filled',
  color: 'primary1',
  radius: 'default',
  size: 4,
  loading: false,
  fontFamily: 'secondary'
};

export default withTheme(Button);