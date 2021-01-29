import {get} from 'lodash';

const parseBgColor = (theme, {bgColor}) => {
  const selected = theme.colors[bgColor];
  if(!selected)
    return '';
  return `background-color: ${selected};`;
};

const parseFontColor = (theme, {fontColor}) => {
  const selected = theme.colors[fontColor];
  if(!selected)
    return '';
  return `color: ${selected};`;
};

const parseColorValue = (props, theme, propName) => {
  if (!propName) return console.error('PRENSA :: Não existe nome de prop para buscar no parseColor');
  const propValue = get(props, propName, 'activeColor');
  if (propValue.startsWith('#')) return propValue;
  const parsedValue = theme.colors[propValue];
  if (!parsedValue) return console.error(`PRENSA :: Não existe valor correspondente para a prop de nome ${propName} passada na função parseColor`);
  return parsedValue;
};

export {parseColorValue, parseBgColor, parseFontColor};