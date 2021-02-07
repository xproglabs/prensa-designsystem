import PropTypes from 'prop-types';
import React from 'react';
import styled, {withTheme} from 'styled-components';

import IcArrow from '../../icons/IcArrowForward';
import Block from '../Block';

const StyledAria = styled.a`
  text-decoration: none;
`;

const MenuItem = ({children, mb, px, py, color, onClick, path, theme}) => {

  const customStyle = `
    border-bottom: 1px solid rgba(0,0,0,0.1);    
    cursor: pointer;
    text-decoration: unset;
    svg {
      width: 24px;
      height: 24px;
      fill: ${color ? theme.parseColor({color}, theme, 'color') : theme.colors.primary1};
    }
    &:hover {
      background-color: ${theme.colors.neutral10};
      opacity: 0.8;
    }
  `;

  const renderContent = () => (
    <Block onClick={!path ? onClick : null} width='100%' mb={mb}>
      <Block fullWidth align='row' alignx='between' aligny='middle' fontColor={color} px={px} py={py} custom={customStyle}>
        {children ? children : <span>Content here</span>}
        <IcArrow />
      </Block>
    </Block>
  );

  return path ? <StyledAria href={path}>{renderContent()}</StyledAria> : renderContent();
};

MenuItem.defaultProps = {
  px: 1,
  py: 1,
  color: 'primary1'
};

MenuItem.propTypes = {
  /**
   * Permite passagem de conteúdo para o componente
   */
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  /**
   * Permite alterar o padding-x (horizontal) do container interno
   */
  px: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Permite alterar o padding-y (vertical) do container interno
   */
  py: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Permite adicionar margem abaixo do componente, no container externo
   */
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Realiza a navegação do usuário através de um href
   */
  path: PropTypes.string.isRequired,
  /**
   * Permite customizar a cor do texto e ícone
   */
  color: PropTypes.string,
  /**
   * Prop que recebe o evento de clique para WEB
   */
  onClick: PropTypes.func,
  theme: PropTypes.object,
};

export default withTheme(MenuItem);
