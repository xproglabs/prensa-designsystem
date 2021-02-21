import PropTypes from 'prop-types';
import React from 'react';
import {withTheme} from 'styled-components';

import Block from '../Block';

const SideMenu = props => {

  const {children, isOpen, onClose, menuSize, menuAnchor, bgColor} = props;

  if (!isOpen) return null;

  const parsePosition = () => {
    if (menuAnchor === 'left') return 'left: 0px;';
    if (menuAnchor === 'right') return 'right: 0px;';
  };

  const menuCustomStyle = `
    position: fixed;
    display: block;
    overflow-y: auto;
    z-index: 11;
    top: 0px;
    ${parsePosition()};
  `;
  const outerContainerCustomStyle = `
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
    top: 0px;
  `;

  return (
    <Block>
      <Block width='100vw' height='100vh' onClick={onClose} custom={outerContainerCustomStyle} />
      <Block width='100%' md={{width: menuSize}} fullHeight bgColor={bgColor} custom={menuCustomStyle}>
        {children}
      </Block>
    </Block>
  );
};

SideMenu.defaultProps = {
  menuAnchor: 'left',
  menuSize: '350px',
  px: 4,
  py: 4,
  bgColor: 'neutral10'
};

SideMenu.propTypes = {
  /**
   * Permite passagem de conteúdo para o Menu Lateral
   */
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.node]),
  /**
   * Define a âncora onde o menu será renderizado (esquerda e direita da tela)
   */
  menuAnchor: PropTypes.oneOf(['left', 'right']),
  /**
   * Define o tamanho do menu '[number]px'
   */
  menuSize: PropTypes.string,
  /**
   * Controla a exibição ou não do Menu
   */
  isOpen: PropTypes.bool.isRequired,
  /**
   * Controla a ação de fechamento do Menu
   */
  onClose: PropTypes.func.isRequired,
  /**
   * Define a cor de fundo do conteúdo
   */
  bgColor: PropTypes.string
};

export default withTheme(SideMenu);