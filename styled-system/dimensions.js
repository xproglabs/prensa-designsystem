import {get} from 'lodash';

//ToDo: Allow default props by object, second param
//ToDo: parseHeight
//ToDo: Unit testing
export const parseWidth = props => {  
  const theme = get(props, 'theme', {});
  const unit = get(theme, 'factors.padding', 10);
  const width = get(props, '$width', undefined);
  const fullWidth = get(props, 'fullWidth', undefined);
  const px = get(props, 'px', undefined);
  const pl = get(props, 'pl', undefined);
  const pr = get(props, 'pr', undefined);
  const mx = get(props, 'mx', undefined);
  const ml = get(props, 'ml', undefined);
  const mr = get(props, 'mr', undefined);

  if (fullWidth) {
    if (px) {
      if (typeof px === 'string') return `width: calc(100% - ${px} - ${px})`;
      return `width: calc(100% - ${px * unit}px - ${px * unit}px)`;
    }
    if (pl && pr) {
      if (typeof pl === 'string' && typeof pr === 'string') return `width: calc(100% - ${pl} - ${pr})`;
      return `width: calc(100% - ${pl * unit}px - ${pr * unit}px)`;
    }
    if (pl) {
      if (typeof pl === 'string') return `width: calc(100% - ${pl})`;
      return `width: calc(100% - ${pl * unit}px)`;
    }
    if (pr) {
      if (typeof pr === 'string') return `width: calc(100% - ${pr})`;
      return `width: calc(100% - ${pr * unit}px)`;
    }
    if (mx) {
      if (typeof mx === 'string') return `width: calc(100% - ${mx} - ${mx})`;
      return `width: calc(100% - ${mx * unit}mx - ${mx * unit}mx)`;
    }
    if (ml && mr) {
      if (typeof ml === 'string' && typeof mr === 'string') return `width: calc(100% - ${ml} - ${mr})`;
      return `width: calc(100% - ${ml * unit}px - ${mr * unit}px)`;
    }
    if (ml) {
      if (typeof ml === 'string') return `width: calc(100% - ${ml})`;
      return `width: calc(100% - ${ml * unit}px)`;
    }
    if (mr) {
      if (typeof mr === 'string') return `width: calc(100% - ${mr})`;
      return `width: calc(100% - ${mr * unit}px)`;
    }
    return 'width: 100%';
  } else if (!width) {
    return '';
  } else if (typeof width === 'string') {
    return `width: ${width}`;
  } else {
    return `width: ${width * theme.factors.dimensions}px`;
  }
};