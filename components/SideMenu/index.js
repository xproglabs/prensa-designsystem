import PropTypes from 'prop-types';
import React from 'react';
import styled, {withTheme} from 'styled-components';

import Block from '../Block';

const parsePosition = ({menuAnchor}) => {
  if (menuAnchor === 'left') return 'left: 0px;';
  if (menuAnchor === 'right') return 'right: 0px;';
};
const getWidthFromProps = ({menuSize, px}) => {
  return `
    max-width: calc(${menuSize} - ${px} - ${px});
    width: calc(${menuSize} - ${px} - ${px});
  `;
};
const getHeightFromProps = ({py}) => {
  return `
    height: calc(100% - ${py} - ${py});
  `;
};

const OuterContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  top: 0px;
`;
const Menu = styled.div`
  position: fixed;
  display: block;
  overflow-y: auto;
  z-index: 11;
  top: 0px;
  ${props => parsePosition(props)};
  ${props => getWidthFromProps(props)};
  ${props => getHeightFromProps(props)};
  ${props => props.theme.parsePadding(props.theme, props)};
  ${props => props.theme.parseBgColor(props.theme, props)};
`;

const SideMenu = props => {

  const {isOpen, onClose, children} = props;

  if (!isOpen) return null;

  return (
    <Block>
      <OuterContainer {...props} onClick={onClose} />
      <Menu {...props}>
        {children}
      </Menu>
    </Block>
  );
};

SideMenu.defaultProps = {
  menuAnchor: 'left',
  menuSize: '350px',
  px: '24px',
  py: '24px',
  bgColor: 'neutral10'
};

SideMenu.propTypes = {
  /**
   * Permite passagem de conteúdo para o Menu Lateral
   */
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
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
   * Define as margens para o conteúdo
   */
  px: PropTypes.string,
  py: PropTypes.string,
  /**
   * Define a cor de fundo do conteúdo
   */
  bgColor: PropTypes.string
};

export default withTheme(SideMenu);