import {get} from 'lodash';

export const parseFontFamily = props => {
  const fonts = get(props, 'theme.fonts', {});
  const propValue = get(props, '$fontFamily', '');
  const selected = get(fonts, propValue, '');
  return selected;
};

export const parseSize = (props, propName) => {
  const factor = get(props, 'theme.factors.dimensions', {});
  const propValue = get(props, `$${propName}`);
  const isNumber = typeof propValue === 'number';
  if (isNumber) return `${propValue * factor}px`;
  return propValue;
};