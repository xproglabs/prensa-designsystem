import {get} from 'lodash';

const parseRadius = (props, propName) => {
  const propValue = get(props, propName);
  const selected = props.theme.radius[propValue];
  if (!selected) {
    console.error(`PRENSA :: Erro ao traduzir token "${propValue}" no parseRadius`);
    return '';
  }
  return `border-radius: ${selected}`;
};

export {parseRadius};