import {get} from 'lodash';
import styled from 'styled-components';

import {margin} from '../../../styled-system/margin';

const getColor = props => {
  const theme = get(props, 'theme.colors');
  const value = get(theme, props.$color);
  return value;
};

const IconContainer = styled.svg`
  width: ${props => props.$width}px;
  height: ${props => props.$height}px;
  fill: ${getColor};
`;

const IconLink = styled.a`
  ${margin};
  height: max-content;
  width: max-content;
  &:hover {
    opacity: 0.8;
  }
`;

export {IconLink, IconContainer};