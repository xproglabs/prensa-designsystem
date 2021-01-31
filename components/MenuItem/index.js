import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import {withTheme} from 'styled-components';

import IcArrow from '../../icons/IcArrowForward';
import Block from '../Block';

const parseWidth = ({px, theme}) => {
  if (!px) return '';
  if (typeof px === 'string') return `width: calc(100% - (${px} * 2))`;
  else return `width: calc(100% - ${px * theme.factors.padding * 2}px)`;
};

const InnerContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  color: ${props => props.$color ? props.theme.parseColorValue(props, props.theme, '$color') : props.theme.colors.activeColor};
  text-decoration: unset;
  cursor: pointer;
  svg {
    width: 24px;
    height: 24px;
    fill: ${props => props.$color ? props.theme.parseColorValue(props, props.theme, '$color') : props.theme.colors.activeColor};
  }
  &:hover {
    background-color: ${props => props.theme.colors.neutral10};
    opacity: 0.8;
  }
  ${props => props.theme.parsePadding(props.theme, props)};
  ${props => parseWidth(props)};
`;

const MenuItem = ({children, path, mb, px, py, color}) => {
  return (
    <Block width='100%' mb={mb}>
      <InnerContainer $color={color} href={path} px={px} py={py}>
        {children ? children : <span>Content here</span>}
        <IcArrow />
      </InnerContainer>
    </Block>
  );
};

MenuItem.defaultProps = {
  px: 1,
  py: 1,
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
   * Realiza a navegação do usuário através do clique no componente
   */
  path: PropTypes.string.isRequired,
  /**
   * Permite customizar a cor do texto e ícone
   */
  color: PropTypes.string
};

export default withTheme(MenuItem);
