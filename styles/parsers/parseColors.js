import {get} from 'lodash';

const parseBgColor = (props, theme) => {
  if (!props || !props.bgColor) return ''; 
  const selected = theme.colors[props.bgColor];
  if (!selected) return '';
  return `background-color: ${selected};`;
};

const parseFontColor = (props, theme) => {
  if (!props || !props.fontColor) return '';
  const selected = theme.colors[props.fontColor];
  if (!selected) return '';
  return `color: ${selected};`;
};

const parseColor = (props, theme, propName) => {
  if (!propName) return console.error('PRENSA :: Não existe nome de prop para buscar no parseColor');
  const propValue = get(props, propName, 'activeColor');
  if (propValue.startsWith('#')) return propValue;
  const parsedValue = theme.colors[propValue];
  if (!parsedValue) return console.error(`PRENSA :: Não existe valor correspondente para a prop de nome ${propName} passada na função parseColor`);
  return parsedValue;
};

export {parseColor, parseBgColor, parseFontColor};