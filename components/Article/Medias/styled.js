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
  width: max-content;
  height: max-content;
  ${margin};
`;

export {IconLink, IconContainer};