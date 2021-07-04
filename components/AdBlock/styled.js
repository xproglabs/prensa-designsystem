import styled from 'styled-components';

import {getColor} from '../../styled-system/color';

const getHeight = props => {
  return `${props.minHeight}px`;
};
const getWidth = props => {
  return `${props.minWidth}px`;
};

const DesktopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${getColor};
  min-height: ${getHeight};
  min-width: ${getWidth};
  @media (max-width: ${props => props.theme.queries.lg}) {
    display: none;
  }
`;
const MobileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${getColor};
  min-height: ${getHeight};
  min-width: ${getWidth};
  @media (min-width: ${props => props.theme.queries.lg}) {
    display: none;
  }
`;

export {DesktopContainer, MobileContainer};