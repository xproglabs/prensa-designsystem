import {get} from 'lodash';

export const getColor = ({
  theme = {},
  $color = '',
}) => {
  const value = get(theme.colors, $color, '');
  return value;
};