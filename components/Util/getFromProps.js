import {get} from 'lodash';

import numberToString from './numberToString';

const getFromProps = (props, param, defaultValue = false) => {
  const defaultIsNumber = Number.isInteger(defaultValue);
  const value = defaultIsNumber ? numberToString(defaultValue) : defaultValue;
  return get(props, numberToString(param), value);
};

export default getFromProps;