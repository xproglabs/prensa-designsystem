import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {withTheme} from 'styled-components';

import {parseAlign, parseCustom, parseTheme} from './parser'

const Component = styled.div`
  ${props => parseTheme(props.theme)};
  ${props => parseCustom(props.custom)};
  ${props => parseAlign(props)};
`;

const Blocks = ({
  align,
  alignx,
  aligny,
  children,
  custom,
  theme
}) => {
  return (
    <Component
      align={align}
      alignx={alignx}
      aligny={aligny}
      custom={custom}
      theme={theme}>
      {children}
    </Component>
  );
};

Blocks.defaultProps = {
  align: 'col',
  alignx: 'left',
  aligny: 'top',
}
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
   * Define estilo customizado para o bloco
   */
  custom: PropTypes.string,
  /**
   * Renderiza os blocos filhos
   */
  children: PropTypes.array
};

export default withTheme(Blocks);