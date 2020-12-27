import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import {withTheme} from 'styled-components';

const Component = styled.div`
  ${props => props && props.theme.parseProps('', props.theme, props)};
  ${props => props.xs && props.theme.parseProps('xs', props.theme, props.xs)};
  ${props => props.sm && props.theme.parseProps('sm', props.theme, props.sm)};
  ${props => props.md && props.theme.parseProps('md', props.theme, props.md)};
  ${props => props.lg && props.theme.parseProps('lg', props.theme, props.lg)};
  ${props => props.xl && props.theme.parseProps('xl', props.theme, props.xl)};
`;

const Blocks = props => {
  return (
    <Component
      align={props.align}
      alignx={props.alignx}
      aligny={props.aligny}
      bgColor={props.bgColor}
      custom={props.custom}
      customDef={props.customDef}
      fontColor={props.fontColor}
      xs={props.xs}
      sm={props.sm}
      md={props.md}
      lg={props.lg}
      xl={props.xl}
      typography={props.typography}>
      {props.children}
    </Component>
  );
};

Blocks.defaultProps = {
  align: 'col',
  alignx: 'left',
  aligny: 'top',
};
Blocks.propTypes = {
  /**
   * Configuração da orientação de posição
   */
  align: PropTypes.oneOf(['col', 'row']),
  /**
   * Configuração da posição horizontal (eixo x)
   */
  alignx: PropTypes.oneOf(['left', 'center', 'right', 'evenly', 'between']),
  /**
   * Configuração da posição vertical (eixo y)
   */
  aligny: PropTypes.oneOf(['top', 'middle', 'bottom', 'evenly', 'between']),
  /**
   * Define propriedade de background-color
   */
  bgColor: PropTypes.string,
  /**
   * Define estilo customizado para o bloco
   */
  custom: PropTypes.string,
  /**
   * Seleciona estilo customizado para o bloco
   */
  customDef: PropTypes.string,
  /**
   * Renderiza os blocos filhos
   */
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  /**
   * Define propriedade de color
   */
  fontColor: PropTypes.string,
  /**
   * Define propriedade de color
   */
  typography: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * Propriedades responsivas
   */
  xs: PropTypes.object,
  sm: PropTypes.object,
  md: PropTypes.object,
  lg: PropTypes.object,
  xl: PropTypes.object
};

export default withTheme(Blocks);